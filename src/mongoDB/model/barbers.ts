import { Schema, models, model } from 'mongoose'

const priceSchema = new Schema({
  haircut: String,
  description: String,
  price: String,
})

const barbersSchema = new Schema({
  name: String,
  title: String,
  discription: String,
  email: String,
  imgUri: String,
  prices: [priceSchema]
})

export const Barbers = models.barbers || model('barbers', barbersSchema)
