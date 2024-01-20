const fs = require("fs");

// Create
fs.writeFileSync("employees.json", JSON.stringify({ name: "Employee 1 Name", salary: 2000 }));

// Read
let data = fs.readFileSync("./employees.json", "utf-8");
console.log(JSON.parse(data));

// Update
data = {
  name: "Employee 1 Name Updated",
  salary: 4000,
};
fs.writeFileSync("employees.json", JSON.stringify(data));

// Delete
fs.unlinkSync("./employees.json");
