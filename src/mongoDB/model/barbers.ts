import { Schema, models, model } from 'mongoose'

export interface PriceScheme{
  _id: string;
  haircut: string;
  description: string;
  price: string;
}

export interface BarbersScheme{
  _id: string;
  __v: number;
  name?: string;
  title?: string;
  discription?: string;
  email?: string;
  imgUri?: string;
  prices: PriceScheme[]
}

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
