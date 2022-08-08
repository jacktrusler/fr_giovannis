import barberLogoDefault from '../barber_placeholder.png' 

export interface BarberCard {
  firstName: string;
  lastName: string;
  email: string;
  img: any;
  available: boolean;
}

export const barberCards: Array<BarberCard> = [
  {
  firstName: "Dan",
  lastName: "Barber",
  email: "Dan@Giovannis.com",
  img: barberLogoDefault,
  available: true,
  }
]
