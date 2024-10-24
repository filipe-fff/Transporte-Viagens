import { IDisplacement } from "./displacement.interface";
import { IPrice } from "./price.interface";

export interface IFlaght {
    origin: IDisplacement;
    destination: IDisplacement;
    date: string;
    time: string;
    prices: IPrice;
}