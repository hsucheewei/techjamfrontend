export interface IProduct {
  name: string;
  price: number;
  discount: number;
  sold: number;
  url: string;
  image: string;
}

export type IProducts = IProduct[];

declare global {
  namespace NodeJS {
    interface Process {
      VERCEL_URL: string;
    }
  }
}
