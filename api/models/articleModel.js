// Load mongoose module
const mongoose = require('mongoose');
// Load Moongose schema to modelling the shape of collections elements
const Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    title: {
      type: String,
      required: 'Kindly enter the title of the article'
    },
    bodyText: {
      type: String,
      required: 'Kindly enter the body of the article'
    },
    public: {
      type: Boolean,
      default: true
    },
    featured: {
      type: Boolean,
      default: false
    },
    tags: {
        type: Array,
        default: []
    }
  });
  
  module.exports = mongoose.model('Articles', ArticleSchema);