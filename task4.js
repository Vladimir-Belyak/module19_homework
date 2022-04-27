function Devices(name, power) {
    this.name = name,
        this.power = power,
        this.line = 'Yes',
        this.color = 'Grey'
}

Devices.prototype.getPower = function (power) {
    console.log(`Power is ${this.power} W`)
}

function Computers(name, power, display) {
    this.name = name,
        this.power = power,
        this.display = display
}

Computers.prototype = new Devices()

//Computers.prototype.getWeight = function(weight){
//  console.log(`Candy weight is ${weight} g`)
//}

const computer = new Computers('office_PC', '500', '22');
const lamp = new ElectricalAppliance(Bra, '30')

lamp.getPower(47)
  //snikers.getWeight(50)

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