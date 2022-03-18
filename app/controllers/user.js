const { Op } = require("sequelize");
const { User } = require("../../config/database");

//todo: get all users
const getAllUser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//todo: get user by id
const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//todo: create user
const postUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
      res.status(409).json({ error: "Email already exists" });
      return;
    }
    await User.create(req.body);
    res.status(201).json({ user: "User created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const putUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    const count = await User.count({
      where: {
        [Op.or]: [{ email: req.body.email }, { id: req.params.id }],
      },
    });
    if (count >= 2) {
      res.status(409).json({ error: "Email already exists" });
      return;
    }
    await user.update(req.body);
    res.status(200).json({ user: "User updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//todo: delete user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    await user.destroy();
    res.status(200).json({ user: "User deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUser,
  getUserById,
  postUser,
  putUser,
  deleteUser,
};
