/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn, thisArg = null) {
    for (let i = 0; i < array.length; i++) {
        fn.call(thisArg, array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        newArr[i] = fn(array[i], i, array);
    }

    return newArr;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    let start = initial === undefined ? 1 : 0;

    initial = initial === undefined ? array[0] : initial;

    for (let i = start; i < array.length; i++) {
        initial = fn(initial, array[i], i, array);
    }

    return initial;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    return Object.keys(obj).map(name => name.toUpperCase());
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from = 0, to = array.length) {
    const newArr = [];
    const len = array.length;

    let begin = from < 0 ? from + len : from;
    let end = to < 0 ? len + to : to;

    begin = begin < 0 ? 0 : begin;

    end = end > len ? len : end;

    for (let i = begin; i < end; i++) {
        newArr.push(array[i]);
    }

    return newArr;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    return new Proxy(obj, {
        get(target, prop) {
            return target[prop];
        },
        set(target, prop, value) {
            target[prop] = value ** 2;

            return true;
        }
    });
}

export { forEach, map, reduce, upperProps, slice, createProxy };
