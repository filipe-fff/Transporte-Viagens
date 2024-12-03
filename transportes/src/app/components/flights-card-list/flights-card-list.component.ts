import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FlightsList } from '../../types/flights-list';
import { FlightDisplayCardList } from '../../types/flights-display-card-list';
import { prepareFlightsList } from '../../utils/prepare-flights-list';

@Component({
  selector: 'app-flights-card-list',
  templateUrl: './flights-card-list.component.html',
  styleUrl: './flights-card-list.component.scss'
})
export class FlightsCardListComponent implements OnChanges {
  @Input({ required: true }) flightsList: FlightsList = [];
  flightsDisplayCardList: FlightDisplayCardList = [];

  ngOnChanges(changes: SimpleChanges): void {

    if (this.flightsList) {
      this.flightsDisplayCardList = []
      this.flightsList.forEach((flightsResponse) => prepareFlightsList(flightsResponse, (flight) => {
        this.flightsDisplayCardList.push(flight);
      }));

      // console.log("flightsDisplayList => ", this.flightsDisplayList);
    }
  }
}