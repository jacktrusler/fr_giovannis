export interface BarberPrices {
  barber: string;
  priceData: PriceData[];
}

export interface PriceData {
  _id: string;
  haircut: string;
  description: string;
  price: string;
}

export const dansPrices: BarberPrices = {
  barber: "Dan",
  priceData: [
    {
      _id: "1",
      haircut:"Haircut", 
      description:"Just your standard haircut.",
      price:"$20",
    },
    {
      _id: "2",
      haircut:"Bald Fade Skin Fade Razor Fade",
      description:"Any haircut where I go down to the skin.",
      price:"$23",
    },
    {
      _id: "3",
      haircut:"Beard Work with Haircut",
      description:"Beard Trim or line up and a normal haircut.",
      price:"$25",
    },
    {
      _id: "4",
      haircut:"Beard Trim Only",
      description:"Beard work, trim, lineup without a haircut",
      price:"$15",
    },
    {
      _id: "5",
      haircut:"Bald Head Shave",
      description:"Hot towels and razor shave or machine cut",
      price:"$20",
    },
    {
      _id: "6",
      haircut:"Buzz Cut",
      description:"Single length cut using a electric blade",
      price:"$17",
    },
    {
      _id: "7",
      haircut:"Seniors",
      description:"All senior haircuts are at a reduced price.",
      price:"$17"
    }
  ]
}
