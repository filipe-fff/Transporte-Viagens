import { BaggageTypeEnum } from "../enums/baggage-type.enum";

export const BaggageTypeDescriptionMap: {[key in BaggageTypeEnum]: string} = {
    [BaggageTypeEnum.CHECKED]: "Despachada",
    [BaggageTypeEnum.HAND_LUGGAGE]: "Bagagem de Mão",
    [BaggageTypeEnum.PERSONAL_ITEM]: "Item Pessoal"
}