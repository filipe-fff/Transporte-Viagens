import { Component, inject, OnInit } from '@angular/core';
import { SearchFlightsService } from '../../service/flights-ticket.service';

@Component({
  selector: 'app-transport-container',
  templateUrl: './transport-container.component.html',
  styleUrl: './transport-container.component.scss'
})
export class TransportContainerComponent implements OnInit {
  _seachFlightService = inject(SearchFlightsService);



  ngOnInit(): void {
      this._seachFlightService.getSearchFlights().subscribe((flightResponse) => console.log(flightResponse));
  }
}