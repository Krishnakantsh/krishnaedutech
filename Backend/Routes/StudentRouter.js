import express from "express";
import { getMyCourseDetails, getProfile, loginstudent, registerstudent, studentlogout, updatedetails, updatepassword } from "../controllers/studentcontroller.js";
import { verifyJWT } from "../Middlewares/Authmiddleware.js";

const router = express.Router();

router.route("/register").post(registerstudent);

router.route("/login").post(loginstudent);

router.route("/getprofile/:id").get(verifyJWT,  getProfile);

router.route("/p/mycourse").get(verifyJWT, getMyCourseDetails);

router.route("/p/updatedetails").patch(verifyJWT,updatedetails);

router.route("/p/updatepassword").patch(verifyJWT, updatepassword);

router.route("/p/logout").post(verifyJWT , studentlogout);


// router.route("/p/cart").get(getCart);





export default router;
