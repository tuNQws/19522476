const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const today = new Date();
var day = days[today.getDay()];
console.log('Today is: ' + day);

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand;

if (hour/12 == 0){
    prepand = 'AM';
}   else{
    prepand = 'PM';
}

hour = hour%12;

console.log('Current Time is : '+ hour + ' ' + prepand + ' : ' + minute + ' : ' + second);