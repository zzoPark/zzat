const mongoose = require('mongoose')
const { Schema } = mongoose
const {
  Types: { ObjectId }
} = Schema

const messageSchema = new Schema(
  {
    room: {
      type: ObjectId,
      required: true,
      ref: 'Room'
    },
    user: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Message', messageSchema)
