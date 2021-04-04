class Device {

  constructor(name) {
	this.name = name;
	this.matrix = 'IPS';
	this.color = 'black';
  
  }
  
  turnOn = function() {
	console.log(this.name + ' включен');
  }
  
  turnOff = function() {
	console.log(this.name + ' выключен');
  }
}
  
class Device1 extends Device {
  constructor(name){
    super();
	  this.name = name;
	  this.processor = "Intel Core i5";
  }

  fanPower = function() {
	  let fanPower = +prompt('Введите предпочитаемую мощность вентилятора:');
	  console.log(`Для устройства ${this.name} , скорость вентилятора выставлена на ${fanPower}`);
  }
}

class Device2 extends Device{
  constructor(name){
  super();
	this.name = name;
	this.processor = "Apple M1";
}

volumeLvl = function() {
  let volumeLvl = +prompt('Укажите предпочитаемую громкость устройства:');
  console.log(`Для ${this.name} выставлена громкость уровня - ${volumeLvl} `);
  }
}

const pc = new Device1 ('PC');
pc.turnOn();
pc.fanPower();
pc.turnOff();

const IPhone = new Device2 ('IPhone');
IPhone.turnOn();
IPhone.volumeLvl();
IPhone.turnOff();

