const mongoose = require('mongoose')
const { Schema } = mongoose

const roomSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
      unique: true
    },
    title: {
      type: String,
      required: true
    },
    tags: {
      type: [String],
      index: true
    },
    people: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Room', roomSchema)
