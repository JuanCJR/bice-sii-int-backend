const { Router } = require("express");
const router = Router();
const { auth, callBack } = require("../controllers/auth.controller");


/**
 * @swagger
 * paths:
 *  /auth:
 *    get:
 *      responses:
 *        '200':
 *          description: OK
 * 
 */
router.route("/").get(auth);


router.route("/call-back").get(callBack);

module.exports = router;
