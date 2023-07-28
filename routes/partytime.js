const router = require("express").Router();

const partyController = require("../controllers/partyController");

router.route("/partytime").post((req, res) => partyController.create(req, res));

router.route("/partytime").get((req, res) => partyController.getAll(req,res));

router.route("/partytime/:id").get((req, res) => partyController.get(req,res));

router.route("/partytime/:id").delete((req, res) => partyController.delete(req,res));

router.route("/partytime/:id").put((req, res) => partyController.update(req,res));

module.exports = router;