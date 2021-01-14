const { Router } = require("express");
const router = Router();
const { auth, oauth } = require("../controllers/auth.controller");


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


router.get("/oauth");

module.exports = router;
