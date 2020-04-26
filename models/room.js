const mongoose = require('mongoose')
const { Schema } = mongoose

const roomSchema = new Schema(
  {
    slug: {
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
    description: {
      type: String,
      default: ''
    },
    people: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Room', roomSchema)
