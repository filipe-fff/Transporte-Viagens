import { NgModule } from '@angular/core';
import { IconPricePipe } from './icon-price.pipe';


@NgModule({
  declarations: [
    IconPricePipe,
  ],
  exports: [
    IconPricePipe,
  ]
})
export class PipesModule { }
