function Devices(name, power) {
    this.name = name,
        this.power = power,
        this.battery = 'No',
        this.color = 'Grey'
}

Devices.prototype.getPower = function () {
    console.log(`Power is ${this.power} W`)
}

function Computers(name, power, display) {
    this.name = name,
        this.power = power,
        this.display = display
}

function Lamps(name, power) {
    this.name = name,
        this.power = power
}

function LampsBattery(name, power, battery) {
    this.name = name,
        this.power = power,
        this.battery = battery
}

Devices.prototype.showKeyProperty = function () {
    for (let key in this) {
        if (this.hasOwnProperty(key))
            console.log(`${key}: ${this[key]}`)
    }
}

Computers.prototype = new Devices();
Lamps.prototype = new Devices();
LampsBattery.prototype = new Lamps();

Lamps.prototype.getPower = function () {
    console.log(`Power is ${this.power} W(Light-emitting diode)`)
}

const computer = new Computers('Office_PC', '500', '22');
const lamp = new Lamps('Bra', '30');
const mobile_lamp = new LampsBattery('Flashlight', '10', 'Yes');

lamp.getPower()
computer.getPower()
mobile_lamp.showKeyProperty()

/*
Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, 
какими свойствами он обладает.
План:
Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создайте экземпляры каждого прибора.
Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)
*/