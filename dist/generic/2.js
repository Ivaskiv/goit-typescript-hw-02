/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType.
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
const topObject = { name: 'Object1', position: 1, color: 'Red', weight: 10 };
const bottomObject = { name: 'Object2', position: 2, color: 'Blue', weight: 20 };
const result = compare(topObject, bottomObject);
console.log(result);
export {};
//# sourceMappingURL=2.js.map