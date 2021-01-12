const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ListSchema = new Schema({
   title: {
      type: String,
      required: true,
   },
});

module.exports = new model('List', ListSchema);
