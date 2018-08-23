import mongoose, { Schema } from 'mongoose'

const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
  }
}, {
  timestamps: true
})


const model = mongoose.model('Event', eventSchema)

export default model