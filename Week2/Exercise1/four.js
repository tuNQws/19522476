const isValidJSON = obj => {
    try {
      JSON.parse(obj);
      return true;
    } catch (e) {
      return false;
    }
  };
console.log(isValidJSON('{"name":"tuannq","age":22,"gender": "male"}'));

console.log(isValidJSON('{"name":"tuannq",age:22,"gender": "male","isStrong": yes}'));