import { Component, inject, OnInit } from '@angular/core';
import { FlightsTicketService } from '../../service/flights-ticket.service';
import { take } from 'rxjs';
import { AirportsList } from '../../type/airports-list';
import { StatesService } from '../../service/states.service';

@Component({
  selector: 'app-transport-container',
  templateUrl: './transport-container.component.html',
  styleUrl: './transport-container.component.scss'
})
export class TransportContainerComponent {
  _flightsTicketService = inject(FlightsTicketService);
  _statesService = inject(StatesService);

  airportsList: AirportsList = [];
}