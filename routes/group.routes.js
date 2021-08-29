
const controller = require("../controller/logic/group.controller")

module.exports = (app) => {

    app.get("/group", (req, res, next) =>{
         controller.getAll(req, res, next)
     })
     
     app.post("/group", (req, res, next) => {
         console.log("Successfully created group");
         controller.createGroup(req, res, next);
     });
     
     app.put("/group", (req, res, next) => {
         console.log("Updated group data");
         controller.updateGroup(req, res, next);
     });
     
     app.delete("/group", (req, res, next) => {
         console.log("successfully eliminated group");
         controller.deleteGroup(req, res, next);
     });
}