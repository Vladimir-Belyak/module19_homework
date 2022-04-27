function showKeyAndData(f_object) {
    for (let key in f_object) {
        if (f_object.hasOwnProperty(key)) {
            console.log(key + ": " + f_object[key]);
        }
    }
}

const obj1 = {
    name: "Иван",
    patronymic: "Иванович",
    surname: "Иванов"
}

const obj2 = Object.create(obj1);  //Для наглядности
obj2.age = 25;
obj2['growth'] = 175;

showKeyAndData(obj2);

/*
Задание 1.
Напишите функцию, которая принимает в качестве аргумента объект и выводит 
в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.
*/