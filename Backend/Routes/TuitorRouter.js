import { Router } from "express"
import { getProfileById, getTuitorProfile, tuitorGetAllVideo, tuitorLogin, tuitorLogout, tuitorRegister, tuitorUpdateDetails, tuitorUpdatePassword, tuitoruploadvideo, updateImage } from "../controllers/TuitorController.js";
import { verifyJWTForTuitor } from "../Middlewares/TuitorAuthMiddaleware.js";

const router = Router();

router.route("/register").post(tuitorRegister)

router.route("/login").post(tuitorLogin)

router.route("/p/logout").post(verifyJWTForTuitor, tuitorLogout)

router.route("/p/getallvideo").get(verifyJWTForTuitor,tuitorGetAllVideo)

router.route("/p/uploadvideo").post(verifyJWTForTuitor, tuitoruploadvideo)

router.route("/p/profile").get(verifyJWTForTuitor, getTuitorProfile)

router.route("/p/updatepassword").patch(verifyJWTForTuitor, tuitorUpdatePassword)

router.route("/p/updatedetails").patch(verifyJWTForTuitor, tuitorUpdateDetails)

router.route("/p/:id").get(verifyJWTForTuitor, getProfileById)

router.route("/p/updateImage").patch(verifyJWTForTuitor, updateImage)


export default router;







