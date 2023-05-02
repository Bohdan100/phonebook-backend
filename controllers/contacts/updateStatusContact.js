const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const { _id: owner } = req.user;

  if (!req.body) {
    next(HttpError(400, "Missing field favorite"));
  }

  const result = await Contact.findOneAndUpdate(
    { _id: contactId, owner },
    {
      $set: {
        favorite,
      },
    }
  );
  if (!result) {
    next(HttpError(404, "Not Found"));
  }

  return res.status(200).json({ message: "Success update field" });
};

module.exports = updateStatusContact;
