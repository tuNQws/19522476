var proj = {
    Name : "tuannq",
    Age : 22,
    Gender: "male"
};
const fs = require('fs');
fs.writeFile(`file.json`, JSON.stringify(proj), (error) => {
    if (error) throw error;
});