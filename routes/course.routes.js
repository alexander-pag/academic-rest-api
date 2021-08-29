
const controller = require("../controller/logic/course.controller")

module.exports = (app) => {

    app.get("/course", (req, res, next) =>{
         controller.getAll(req, res, next)
     })
     
     app.get("/course/bycode/:code", (req, res, next) => {
         console.log("Getting course by code");
         controller.getByCode(req, res, next);
     });
     
     app.post("/course", (req, res, next) => {
         console.log("Successfully created course");
         controller.createCourse(req, res, next);
     });
     
     app.put("/course", (req, res, next) => {
         console.log("Updated course data");
         controller.updateCourse(req, res, next);
     });
     
     app.delete("/course", (req, res, next) => {
         console.log("successfully eliminated course");
         controller.deleteCourse(req, res, next);
     });
}