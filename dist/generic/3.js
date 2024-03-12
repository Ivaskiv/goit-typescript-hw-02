/*
  У вас є функція merge, яка поєднує два об'єкти.
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
export {};
//T extends object гарантує, що T буде розширювати тип object. Таким чином, об'єкт objA, який має тип T, може бути переданий як цільовий об'єкт для Object.assign
//# sourceMappingURL=3.js.map