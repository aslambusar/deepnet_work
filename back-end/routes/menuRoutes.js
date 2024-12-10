const express = require('express');
const Menu = require('../model/Menu');
const router = express.Router();

// Create a new menu
router.post('/', async (req, res) => {
  const { name, description } = req.body;
  try {
    const menu = new Menu({ name, description });
    await menu.save();
    res.status(201).json(menu);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all menus
router.get('/', async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;