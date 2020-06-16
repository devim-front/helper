# Devim Front: Helper

Содержит реализацию шаблона проектирования "помощник".

## Установка

Подключите этот пакет в зависимости:

```bash
npm i -S @devim-front/helper
```

## Общие концепции

Помощник или хэлпер - класс, содержащий статические методы или свойства, которые имеющие только геттер. В помощниках запрещено использование не статических методов, объявление статических переменных или использование свойств, имеющих сеттеры. Также запрещено создавать экземпляры класса. Все методы, представленные в хэлпере, должны быть [чистыми](https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D1%81%D1%82%D0%BE%D1%82%D0%B0_%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8). Также следует помнить, что помощник не может обращаться к нечистым методам других классов, например, к [сервисам](https://github.com/devim-front/service) или [хранилищам](https://github.com/devim-front/store). Если специфика решаемой задачи требует нарушить одно из представленных выше правил, вместо помощника следует использовать [сервис](https://github.com/devim-front/service).

Помощник служит для того, чтобы предоставлять функционал, не требующий сохранения промежуточного состояния (рассчёты по формулам, форматирование значений и тому подобное). Нормальная практика - группировать помощники по типам сущностей, с которыми они работают (StringHelper, DateHelper, AmountHelper). Единственный Helper на весь проект, содержащий десятки методов - это грубая архитектурная ошибка.

## API

Документация находится [в этом разделе](https://github.com/devim-front/helper/tree/master/docs).

## Пример

Давайте спроектируем собственный простой помощник.

Допустим, в нашем проекте есть работа с телефонными номерами. Во-первых, договоримся, что внутренный формат телефонного номера выглядит как `"+70000000000"`. Придя к единому формату мы исключим ошибки при преобразовании данных, когда, например, форма ввода телефоннного номера ожидает человекопонятный формат `"+7 (000) 000-00-00"`, а модуль общения с API оперирует целыми одинадцатизначными числами вида `70000000000`.

Таким образом, в помощнике мы должны предоставить функционал для:

- валидации обоих форматов номера;
- приведения обоих форматов к служебному;
- преобразования номера из служебного формата в человекопонятный и числовой.

В этой реализации мы воспрользуемся встроенными ошибками из библиотеки [@devim-front/error](https://github.com/devim-front/error).

```typescript
// PhoneHelper.ts
import { Helper as Base } from '@devim-front/helper';
import { ExpectationError, ArgumentError } from '@devim-front/error';

export class PhoneHelper extends Base {
  public static validateNumber(value: number) {
    return /^7\d{10}$/.test(String(value));
  }

  public static validateDisplay(value: string) {
    return /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/.test(value);
  }

  public static parseNumber(value: number) {
    const isValid = this.validateNumber(value);

    if (!isValid) {
      throw new ArgumentError(
        'PhoneHelper.parseNumber',
        'value',
        'in format 70000000000',
        value
      );
    }

    return `+${value}`;
  }

  public static parseDisplay(value: string) {
    const isValid = this.validateDisplay(value);

    if (!isValid) {
      throw new ArgumentError(
        'PhoneHelper.parseDisplay',
        'value',
        'in format "+70000000000"',
        value
      );
    }

    const match = value.match(/^\+7\s\((\d{3})\)\s(\d{3})-(\d{2})-(\d{2})$/);

    if (match == null) {
      throw new ExpectationError('match', 'defined', match);
    }

    const [, partA, partB, partC, partD] = match;
    return `+7${partA}${partB}${partC}${partD}`;
  }

  public static formatNumber(phone: string) {
    const text = phone.substr(1);
    return Number(text);
  }

  public static formatDisplay(phone: string) {
    const match = phone.match(/^\+7(\d{3})(\d{3})(\d{2})(\d{2})^/);

    if (match == null) {
      throw new ExpectationError('match', 'defined', match);
    }

    const [, partA, partB, partC, partD] = match;
    return `+7 (${partA}) ${partB}-${partC}-${partD}`;
  }
}
```

Собственно, это и есть базовый функционал помощника по работе с телефонными номерами.
