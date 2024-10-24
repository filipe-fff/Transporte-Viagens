import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AirportsList } from "../type/airports-list";

@Injectable({
    providedIn: "root",
})
export class FlightsTicketService {
    private _httpClient = inject(HttpClient);

    private airportsList: AirportsList = [
          {
              flightsList: [
                  {
                      origin: { code: 'GRU', city: 'São Paulo', state: 'SP' },
                      destination: { code: 'GIG', city: 'Rio de Janeiro', state: 'RJ' },
                      date: '2024-10-30',
                      time: '08:00',
                      prices: {
                          economy: 300,
                          business: 1200,
                          firstClass: 2500,
                      },
                  },
                  {
                      origin: { code: 'GRU', city: 'São Paulo', state: 'SP' },
                      destination: { code: 'BSB', city: 'Brasília', state: 'DF' },
                      date: '2024-10-31',
                      time: '10:30',
                      prices: {
                          economy: 350,
                          business: 1300,
                          firstClass: 2700,
                      },
                  },
                  {
                      origin: { code: 'GRU', city: 'São Paulo', state: 'SP' },
                      destination: { code: 'CWB', city: 'Curitiba', state: 'PR' },
                      date: '2024-11-01',
                      time: '09:15',
                      prices: {
                          economy: 250,
                          business: 1000,
                          firstClass: 2200,
                      },
                  },
              ],
          },
          {
              flightsList: [
                  {
                      origin: { code: 'GIG', city: 'Rio de Janeiro', state: 'RJ' },
                      destination: { code: 'BSB', city: 'Brasília', state: 'DF' },
                      date: '2024-11-05',
                      time: '09:00',
                      prices: {
                          economy: 320,
                          business: 1250,
                          firstClass: 2600,
                      },
                  },
                  {
                      origin: { code: 'GIG', city: 'Rio de Janeiro', state: 'RJ' },
                      destination: { code: 'CWB', city: 'Curitiba', state: 'PR' },
                      date: '2024-11-06',
                      time: '11:45',
                      prices: {
                          economy: 290,
                          business: 1100,
                          firstClass: 2500,
                      },
                  },
                  {
                      origin: { code: 'GIG', city: 'Rio de Janeiro', state: 'RJ' },
                      destination: { code: 'FLN', city: 'Florianópolis', state: 'SC' },
                      date: '2024-11-09',
                      time: '15:00',
                      prices: {
                          economy: 400,
                          business: 1500,
                      },
                  },
              ],
          },
          {
              flightsList: [
                  {
                      origin: { code: 'BSB', city: 'Brasília', state: 'DF' },
                      destination: { code: 'GRU', city: 'São Paulo', state: 'SP' },
                      date: '2024-11-10',
                      time: '12:00',
                      prices: {
                          economy: 380,
                          business: 1350,
                          firstClass: 2750,
                      },
                  },
                  {
                      origin: { code: 'BSB', city: 'Brasília', state: 'DF' },
                      destination: { code: 'GIG', city: 'Rio de Janeiro', state: 'RJ' },
                      date: '2024-11-11',
                      time: '14:00',
                      prices: {
                          economy: 420,
                      },
                  },
                  {
                      origin: { code: 'BSB', city: 'Brasília', state: 'DF' },
                      destination: { code: 'CWB', city: 'Curitiba', state: 'PR' },
                      date: '2024-11-12',
                      time: '17:30',
                      prices: {
                          economy: 360,
                          business: 1300,
                      },
                  },
                  {
                      origin: { code: 'BSB', city: 'Brasília', state: 'DF' },
                      destination: { code: 'NAT', city: 'Natal', state: 'RN' },
                      date: '2024-11-13',
                      time: '16:00',
                      prices: {
                          economy: 490,
                          business: 1500,
                          firstClass: 2900,
                      },
                  },
              ],
          },
          {
              flightsList: [
                  {
                      origin: { code: 'CWB', city: 'Curitiba', state: 'PR' },
                      destination: { code: 'GRU', city: 'São Paulo', state: 'SP' },
                      date: '2024-11-15',
                      time: '07:30',
                      prices: {
                          economy: 280,
                          business: 1150,
                          firstClass: 2400,
                      },
                  },
                  {
                      origin: { code: 'CWB', city: 'Curitiba', state: 'PR' },
                      destination: { code: 'POA', city: 'Porto Alegre', state: 'RS' },
                      date: '2024-11-16',
                      time: '09:15',
                      prices: {
                          economy: 150,
                      },
                  },
                  {
                      origin: { code: 'CWB', city: 'Curitiba', state: 'PR' },
                      destination: { code: 'FLN', city: 'Florianópolis', state: 'SC' },
                      date: '2024-11-17',
                      time: '13:00',
                      prices: {
                          economy: 180,
                          business: 900,
                      },
                  },
              ],
          },
          {
              flightsList: [
                  {
                      origin: { code: 'POA', city: 'Porto Alegre', state: 'RS' },
                      destination: { code: 'FLN', city: 'Florianópolis', state: 'SC' },
                      date: '2024-11-20',
                      time: '10:00',
                      prices: {
                          economy: 200,
                      },
                  },
                  {
                      origin: { code: 'POA', city: 'Porto Alegre', state: 'RS' },
                      destination: { code: 'BSB', city: 'Brasília', state: 'DF' },
                      date: '2024-11-21',
                      time: '12:00',
                      prices: {
                          economy: 350,
                          business: 1300,
                      },
                  },
                  {
                      origin: { code: 'POA', city: 'Porto Alegre', state: 'RS' },
                      destination: { code: 'GRU', city: 'São Paulo', state: 'SP' },
                      date: '2024-11-22',
                      time: '17:00',
                      prices: {
                          economy: 400,
                          business: 1400,
                      },
                  },
              ],
          },
          {
              flightsList: [
                  {
                      origin: { code: 'FLN', city: 'Florianópolis', state: 'SC' },
                      destination: { code: 'CWB', city: 'Curitiba', state: 'PR' },
                      date: '2024-11-24',
                      time: '08:00',
                      prices: {
                          economy: 180,
                      },
                  },
                  {
                      origin: { code: 'FLN', city: 'Florianópolis', state: 'SC' },
                      destination: { code: 'NAT', city: 'Natal', state: 'RN' },
                      date: '2024-11-25',
                      time: '10:30',
                      prices: {
                          economy: 400,
                          business: 1400,
                      },
                  },
                  {
                      origin: { code: 'FLN', city: 'Florianópolis', state: 'SC' },
                      destination: { code: 'SSA', city: 'Salvador', state: 'BA' },
                      date: '2024-11-26',
                      time: '15:00',
                      prices: {
                          economy: 320,
                      },
                  },
              ],
          },
          {
              flightsList: [
                  {
                      origin: { code: 'NAT', city: 'Natal', state: 'RN' },
                      destination: { code: 'BSB', city: 'Brasília', state: 'DF' },
                      date: '2024-11-27',
                      time: '11:00',
                      prices: {
                          economy: 350,
                      },
                  },
                  {
                      origin: { code: 'NAT', city: 'Natal', state: 'RN' },
                      destination: { code: 'REC', city: 'Recife', state: 'PE' },
                      date: '2024-11-28',
                      time: '15:00',
                      prices: {
                          economy: 300,
                          business: 1200,
                      },
                  },
                  {
                      origin: { code: 'NAT', city: 'Natal', state: 'RN' },
                      destination: { code: 'SSA', city: 'Salvador', state: 'BA' },
                      date: '2024-11-29',
                      time: '18:00',
                      prices: {
                          economy: 420,
                      },
                  },
              ],
          },
          {
            flightsList: [
                  {
                    origin: { code: 'SSA', city: 'Salvador', state: 'BA' },
                    destination: { code: 'GIG', city: 'Rio de Janeiro', state: 'RJ' },
                    date: '2024-11-30',
                    time: '09:30',
                    prices: {
                        economy: 350,
                        business: 1300,
                    }
                  },
                  {
                    origin: { code: 'SSA', city: 'Salvador', state: 'BA' },
                    destination: { code: 'BSB', city: 'Brasília', state: 'DF' },
                    date: '2024-12-01',
                    time: '14:00',
                    prices: {
                        economy: 400,
                    },
                },
                {
                    origin: { code: 'SSA', city: 'Salvador', state: 'BA' },
                    destination: { code: 'CWB', city: 'Curitiba', state: 'PR' },
                    date: '2024-12-02',
                    time: '16:45',
                    prices: {
                        economy: 450,
                        business: 1350,
                        firstClass: 2800,
                    },
                },
            ],
        },
        {
            flightsList: [
                {
                    origin: { code: 'REC', city: 'Recife', state: 'PE' },
                    destination: { code: 'NAT', city: 'Natal', state: 'RN' },
                    date: '2024-12-05',
                    time: '08:00',
                    prices: {
                        economy: 150,
                    },
                },
                {
                    origin: { code: 'REC', city: 'Recife', state: 'PE' },
                    destination: { code: 'BSB', city: 'Brasília', state: 'DF' },
                    date: '2024-12-06',
                    time: '10:00',
                    prices: {
                        economy: 280,
                        business: 1000,
                    },
                },
                {
                    origin: { code: 'REC', city: 'Recife', state: 'PE' },
                    destination: { code: 'FLN', city: 'Florianópolis', state: 'SC' },
                    date: '2024-12-07',
                    time: '12:30',
                    prices: {
                        economy: 320,
                        business: 1200,
                        firstClass: 2700,
                    },
                },
            ],
        },
        {
            flightsList: [
                {
                    origin: { code: 'CWB', city: 'Curitiba', state: 'PR' },
                    destination: { code: 'POA', city: 'Porto Alegre', state: 'RS' },
                    date: '2024-12-10',
                    time: '09:00',
                    prices: {
                        economy: 150,
                    },
                },
                {
                    origin: { code: 'CWB', city: 'Curitiba', state: 'PR' },
                    destination: { code: 'FLN', city: 'Florianópolis', state: 'SC' },
                    date: '2024-12-11',
                    time: '12:00',
                    prices: {
                        economy: 180,
                        business: 900,
                    },
                },
                {
                    origin: { code: 'CWB', city: 'Curitiba', state: 'PR' },
                    destination: { code: 'BSB', city: 'Brasília', state: 'DF' },
                    date: '2024-12-12',
                    time: '16:00',
                    prices: {
                        economy: 250,
                        business: 1000,
                        firstClass: 2200,
                    },
                },
            ],
        },
        {
            flightsList: [
                {
                    origin: { code: 'FLN', city: 'Florianópolis', state: 'SC' },
                    destination: { code: 'GIG', city: 'Rio de Janeiro', state: 'RJ' },
                    date: '2024-12-15',
                    time: '10:00',
                    prices: {
                        economy: 320,
                    },
                },
                {
                    origin: { code: 'FLN', city: 'Florianópolis', state: 'SC' },
                    destination: { code: 'SSA', city: 'Salvador', state: 'BA' },
                    date: '2024-12-16',
                    time: '12:00',
                    prices: {
                        economy: 400,
                        business: 1400,
                    },
                },
                {
                    origin: { code: 'FLN', city: 'Florianópolis', state: 'SC' },
                    destination: { code: 'NAT', city: 'Natal', state: 'RN' },
                    date: '2024-12-17',
                    time: '15:00',
                    prices: {
                        economy: 290,
                    },
                },
            ],
        },
        {
            flightsList: [
                {
                    origin: { code: 'GIG', city: 'Rio de Janeiro', state: 'RJ' },
                    destination: { code: 'CWB', city: 'Curitiba', state: 'PR' },
                    date: '2024-12-20',
                    time: '08:30',
                    prices: {
                        economy: 300,
                    },
                },
                {
                    origin: { code: 'GIG', city: 'Rio de Janeiro', state: 'RJ' },
                    destination: { code: 'BSB', city: 'Brasília', state: 'DF' },
                    date: '2024-12-21',
                    time: '12:00',
                    prices: {
                        economy: 320,
                        business: 1200,
                    },
                },
                {
                    origin: { code: 'GIG', city: 'Rio de Janeiro', state: 'RJ' },
                    destination: { code: 'FLN', city: 'Florianópolis', state: 'SC' },
                    date: '2024-12-22',
                    time: '14:45',
                    prices: {
                        economy: 350,
                        business: 1300,
                    },
                },
            ],
        },
        {
            flightsList: [
                {
                    origin: { code: 'POA', city: 'Porto Alegre', state: 'RS' },
                    destination: { code: 'GRU', city: 'São Paulo', state: 'SP' },
                    date: '2024-12-25',
                    time: '09:00',
                    prices: {
                        economy: 400,
                        business: 1400,
                        firstClass: 3000,
                    },
                },
                {
                    origin: { code: 'POA', city: 'Porto Alegre', state: 'RS' },
                    destination: { code: 'BSB', city: 'Brasília', state: 'DF' },
                    date: '2024-12-26',
                    time: '11:30',
                    prices: {
                        economy: 350,
                        business: 1300,
                    },
                },
                {
                    origin: { code: 'POA', city: 'Porto Alegre', state: 'RS' },
                    destination: { code: 'CWB', city: 'Curitiba', state: 'PR' },
                    date: '2024-12-27',
                    time: '16:00',
                    prices: {
                        economy: 250,
                    },
                },
            ],
        },
    ]

         

    // getSearchFlights(): Observable<any> {

    //     return this._httpClient.post<any>();
    // }
}