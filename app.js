/** packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser")

/** app configuration */
const app = express();
const port = config.get("server-port")
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    { extended: true }
    ) 

app.use(jsonParser)
app.use(urlEncodedParser)  

const ipFn = require("./middleware/getIpAddress")
app.use("*", ipFn)

/** Methods */
app.get("/", (req, res, next) => {
    res.send("Welcome to academic api")
})

/** User Routes */
const userRoutes = require("./routes/user.routes");
userRoutes(app)

/** token middleware */
tkFunction = require("./middleware/veryfyToken")
app.use(tkFunction)

/** Student Routes*/
const studentRoutes = require("./routes/student.routes");
studentRoutes(app)

/** Teacher Routes */
const teacherRoutes = require("./routes/teacher.routes");
teacherRoutes(app)

/** Period Routes */
const periodRoutes = require("./routes/period.routes");
periodRoutes(app)

/** Course Routes */
const courseRoutes = require("./routes/course.routes");
courseRoutes(app)

/** Group Routes */
const groupRoutes = require("./routes/group.routes");
groupRoutes(app)

/** student-group Routes */
const student_groupRoutes = require("./routes/student_group.routes");
student_groupRoutes(app)

app.listen(port, () => {
    console.log(`Server is running by port ${port}`);
})