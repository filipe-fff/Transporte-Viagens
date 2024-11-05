import { Component, inject, OnInit } from '@angular/core';
import { FlightsTicketService } from '../../services/flights-ticket.service';
import { take } from 'rxjs';
import { AirportsList } from '../../types/airports-list';
import { StatesService } from '../../services/states.service';

@Component({
  selector: 'app-transport-container',
  templateUrl: './transport-container.component.html',
  styleUrl: './transport-container.component.scss'
})
export class TransportContainerComponent implements OnInit {
  _flightsTicketService = inject(FlightsTicketService);
  _statesService = inject(StatesService);

  airportsList: AirportsList = [];

  ngOnInit(): void {
      
  }
}