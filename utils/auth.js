const Users = require("../models/user");
const checkErrors = ({ name, password }) => {
  const errors = {};
  if (name.length < 3) errors.name = "name must be 3 characters";
  if (password.length < 6) errors.password = "password must be 6 characters";
  const isEmpty =
    Object.keys(errors).length === 0 && errors.constructor === Object;
  return isEmpty ? false : errors;
};

const checkUserExist = async (email) => {
  try {
    const user = await Users.findOne({ email });
    return user === null ? false : true;
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports.checkErrors = checkErrors;
module.exports.checkUserExist = checkUserExist;
