let obj = {
	name : 'Vlad',
	age : 20,
	city : 'Saint-P'
  };
  
  for (let key of Object.keys(obj)) {
	  var value = obj[key];
	  console.log(`Ключ - ${key}, Значение - ${value}`);
  }
  
  