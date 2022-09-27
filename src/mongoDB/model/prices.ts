import { Schema, models, model } from 'mongoose'

const pricesSchema = new Schema({
  haircut: String,
  description: String,
  price: String,
})

export const Prices = models.Prices || model('prices', pricesSchema)
