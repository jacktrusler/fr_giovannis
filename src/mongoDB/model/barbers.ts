import { Schema, models, model } from 'mongoose'

const priceSchema = new Schema({
  barber: String,
  priceData: String,
})

export const Prices = models.Price || model('Price', priceSchema)
