const router = require("express").Router();
const invitationController = require("../controllers/invitationContoller");

router.get("/invitation", invitationController.getAllInvitation);
router.post("/invitation", invitationController.addInvitation);
router.put("/:id", invitationController.updateInvitation);
router.delete("/:id", invitationController.deleteInvitation);

module.exports = router;
