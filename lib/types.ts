export interface IProduct {
    name: string; 
    price: number;
    discount: number;
    sold: number;
    url: string;
    image: string;
};

export type IProducts = IProduct[];