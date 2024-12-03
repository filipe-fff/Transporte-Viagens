import { Pipe, PipeTransform } from '@angular/core';
import { FlightClassTypeEnum } from '../enums/flight-class-type.enum';

@Pipe({
  name: 'iconPrice'
})
export class IconPricePipe implements PipeTransform {

  transform(priceType: number): string {

    const pricesIcon: {[key in FlightClassTypeEnum]: string} = {
        [FlightClassTypeEnum.ECONOMY] : "../../../assets/ticket/economy.jpg",
        [FlightClassTypeEnum.BUSINESS] : "../../../assets/ticket/business.jpg",
        [FlightClassTypeEnum.FIRST_CLASS] : "../../../assets/ticket/first-class.jpg",
    }

    return pricesIcon[priceType as FlightClassTypeEnum];
  }

}
