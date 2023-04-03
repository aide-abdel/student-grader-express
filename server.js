const express = require("express");

const app = express();

const PORT = 3000;

app.listen(PORT, (req, res) => {
  console.log("Server listening on port ", PORT);
});

const students = require("./models/students");

app.set("views", "./views");
app.set("view engine", "jsx");

app.engine("jsx", require("express-react-views").createEngine());

// app.get("/", (req, res) => {
//   res.render("Index");
// });
app.get("/", (req, res) => {
  res.render("Index", { students });
});
// console.log(students);
app.get("/addStudent", (req, res) => {
  res.render("Students", { students });
});

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  let stu = {};
  stu.firstName = req.body.fname;
  stu.lastName = req.body.lname;
  stu.grade1 = req.body.grade1;
  stu.grade2 = req.body.grade2;
  stu.grade3 = req.body.grade3;
  students.push(stu);
  res.redirect("/");
});
