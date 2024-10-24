import { Component, inject, OnInit } from '@angular/core';
import { FlightsTicketService } from '../../service/flights-ticket.service';
import { take } from 'rxjs';
import { AirportsList } from '../../type/airports-list';

@Component({
  selector: 'app-transport-container',
  templateUrl: './transport-container.component.html',
  styleUrl: './transport-container.component.scss'
})
export class TransportContainerComponent implements OnInit {
  _seachFlightService = inject(FlightsTicketService);

  airportsList: AirportsList = [];



  ngOnInit(): void {
      this._seachFlightService.getFlightsTicket().pipe(take(1)).subscribe((airportsResponse: AirportsList) => this.airportsList = airportsResponse);
  }
}