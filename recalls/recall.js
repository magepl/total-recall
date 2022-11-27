const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecallSchema = new Schema({
  title: String,
  description: String,
});
