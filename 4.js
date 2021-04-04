function Device(name) {
	this.name = name;
	this.matrix = 'IPS';
	this.color = 'black';
  }
  
  Device.prototype.turnOn = function() {
	console.log(this.name + ' включен');
  }
  
  Device.prototype.turnOff = function() {
	console.log(this.name + ' выключен');
  }
  
  function Device1(name) {
	  this.name = name;
	  this.processor = "Intel Core i5";
  }

  Device1.prototype = new Device();

  Device1.prototype.fanPower = function() {
	 let fanPower = +prompt('Введите предпочитаемую мощность вентилятора:');
	console.log(`Для устройства ${this.name} , скорость вентилятора выставлена на ${fanPower}`);
  }

function Device2(name) {
	this.name = name;
	this.processor = "Apple M1";
}

Device2.prototype = new Device();

Device2.prototype.volumeLvl = function() {
  let volumeLvl = +prompt('Укажите предпочитаемую громкость устройства');
  console.log(`Для ${this.name} выставлена громкость уровня - ${volumeLvl} `);
}

const pc = new Device1 ('PC');
pc.turnOn();
pc.fanPower();
pc.turnOff();

const IPhone = new Device2 ('IPhone');
IPhone.turnOn();
IPhone.volumeLvl();
IPhone.turnOff();

