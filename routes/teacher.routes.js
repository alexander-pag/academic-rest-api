
const controller = require("../controller/logic/teacher.controller")

module.exports = (app) => {

    app.get("/teacher", (req, res, next) =>{
         controller.getAll(req, res, next)
     })
     
     app.get("/teacher/bydocument/:document", (req, res, next) => {
         console.log("Getting teacher by document");
         controller.getByDocument(req, res, next);
     });
     
     app.post("/teacher", (req, res, next) => {
         console.log("Successfully created teacher");
         controller.createTeacher(req, res, next);
     });
     
     app.put("/teacher", (req, res, next) => {
         console.log("Updated teacher data");
         controller.updateTeacher(req, res, next);
     });
     
     app.delete("/teacher", (req, res, next) => {
         console.log("successfully eliminated teacher");
         controller.deleteTeacher(req, res, next);
     });
}