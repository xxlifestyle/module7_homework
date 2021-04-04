let obj = {
	name: "Vlad",
	age: 20,
	city: "Saint-P"
  }
  let checker = (str, obj) => {
	  return obj.hasOwnProperty(str);
  }
  console.log(checker('20', obj));

  console.log(checker('name', obj));

  console.log(checker('city', obj));

  console.log(checker('', obj));