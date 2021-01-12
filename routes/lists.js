const express = require('express');
const router = express.Router();
const List = require('../models/List');

router.get('/', async (req, res) => {
   try {
      const lists = await List.find({});
      res.send(lists);
   } catch (e) {
      console.log(e);
   }
});
router.post('/', async (req, res) => {
   try {
      const { title, user_id } = req.body;
      const newList = new List({ title, user_id });
      await newList.save();
      res.send('List added');
   } catch (e) {
      console.log(e);
   }
});

router.delete('/', async (req, res) => {
   const { id } = req.body;
   try {
      await List.findByIdAndDelete(id);
      res.send('List deleted');
   } catch (e) {
      console.log(e);
   }
});

router.put('/', async (req, res) => {
   const { id, title } = req.body;
   try {
      const update = await List.findByIdAndUpdate(id, { title }, { new: true });
      res.send(update);
   } catch (e) {
      console.log(e);
   }
});
module.exports = router;
