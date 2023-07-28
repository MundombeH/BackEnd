const router = require("express").Router();


// services Router
 const servicesRouter = require("./services");

router.use("/", servicesRouter);

//party Router
const partyRouter = require("./partytime");

router.use("/",partyRouter);

module.exports = router;