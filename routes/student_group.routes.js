
const controller = require("../controller/logic/student_group.controller")

module.exports = (app) => {

     app.post("/sg", (req, res, next) => {
         console.log("Successfully created course");
         controller.createStudent_group(req, res, next);
     });
     
     app.put("/studentgroup", (req, res, next) => {
         console.log("Updated course data");
         controller.updateStudent_group(req, res, next);
     });
     
     app.delete("/studentgroup", (req, res, next) => {
         console.log("successfully eliminated course");
         controller.deleteStudent_group(req, res, next);
     });
}