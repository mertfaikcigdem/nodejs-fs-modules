const fs = require('fs');

// create file
fs.writeFile('employees.json', `{"name": "Employee 1 Name", "salary": 2000}`, (err) => {
  if (err) console.log(err);
});

// read file
fs.readFile('employees.json', 'utf-8', (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

// update file
fs.appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 3000}', (err) => {
  if (err) console.log(err);
});

// remove file
fs.unlink('employees.json', (err) => {
  if (err) console.log(err);
});
