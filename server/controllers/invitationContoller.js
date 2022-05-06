const db = require("../models");

const Invitation = db.invitations;

const addInvitation = async (req, res) => {
  const { name, relation, attendance, people, message, notes } = req.body;

  const invitation = await Invitation.create({
    name,
    relation,
    attendance,
    people,
    message,
    notes,
  });
  res.status(200).send(invitation);
  console.log(invitation);
};

const getAllInvitation = async (req, res) => {
  let invitation = await Invitation.findAll({});
  res.status(200).send(invitation);
};

const updateInvitation = async (req, res) => {
  let id = req.params.id;
  const invitation = await Invitation.update(req.body, { where: { id } });
  res.status(200).send(invitation);
};

const deleteInvitation = async (req, res) => {
  await Invitation.destroy({ where: { id: req.params.id } });
};

module.exports = {
  addInvitation,
  updateInvitation,
  deleteInvitation,
  getAllInvitation,
};
