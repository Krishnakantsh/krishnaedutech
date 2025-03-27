import express from "express"
import { verifyJWTadmin } from "../Middlewares/AdminAuthMid.js"
import { adminLogin, adminRegister, deleteCourse, deleteStudent, deleteTuitor, getAdminProfile, getAllCourse, getAllStudent, getAllTuitors, getCourse, getStudent, getTuitor, logout, setStudentStatus, setTuitorStatus, updatePassword } from "../controllers/AdminController.js"


const router = express.Router()

router.route("/login").post(adminLogin) 
router.route("/register").post(adminRegister)
router.route("/p/updatePassword").patch(verifyJWTadmin,updatePassword)
router.route("/p/logout").patch(verifyJWTadmin,logout)
router.route("/p/getAdmin").get(verifyJWTadmin,getAdminProfile)


router.route("/p/getallstudent").get(verifyJWTadmin, getAllStudent)
router.route("/p/:id/getstudent").get(verifyJWTadmin, getStudent)
router.route("/p/:id/status").patch(verifyJWTadmin,setStudentStatus)
router.route("/p/:id/deleteStudent").delete(verifyJWTadmin, deleteStudent)
// router.route("/p/:id/assignBatch").post(adminRegistration)


router.route("/p/getTuitors").get(verifyJWTadmin, getAllTuitors)
router.route("/p/:id/getTuitor").get(verifyJWTadmin, getTuitor  )
router.route("/p/:id/status").patch(verifyJWTadmin,setTuitorStatus)
router.route("/p/:id/deleteTuitor").patch(verifyJWTadmin,deleteTuitor)
// router.route("/p/:id/assignBatch").post(adminRegistration)


// router.route("/p/uploadFile").post(adminRegistration)
// router.route("/p/updateFile").post(adminRegistration)
// router.route("/p/deleteFile").post(adminRegistration)

// router.route("/p/uploadVideo").post(adminRegistration)
// router.route("/p/updateVideo").post(adminRegistration)
// router.route("/p/deleteVideo").post(adminRegistration)


router.route("/p/:id/getCourse").get(verifyJWTadmin, getCourse)
router.route("/p/getAllCourse").get(verifyJWTadmin, getAllCourse)
// router.route("/p/:id/editCourse").post(adminRegistration)
router.route("/p/:id/deletecourse").post(verifyJWTadmin,deleteCourse)
// router.route("/p/addcourse").post(verifyJWTadmin,addNewCourse)


export default router;
