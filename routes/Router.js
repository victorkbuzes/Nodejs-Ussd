
const {Router } = require("express");
const { sms_send, sms_delivery, test } = require("../controllers/smsController");
const { users, getUser, getUserByID } = require("../controllers/UserContollet");

const router = Router()
//users
router.post("/users", users)
router.get("/users", getUser)
router.get("/users/:number", getUserByID)


//sms
router.post('/message', sms_send)
// router.post('/delivery', sms_delivery)
router.get('/test', test);



module.exports = router;


