import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AirportsList } from "../type/airports-list";

@Injectable({
    providedIn: "root",
})
export class FlightsTicketService {

    /*
        GRU

        Nome: Aeroporto Internacional de Guarulhos
        Estado: São Paulo
        Cidade: Guarulhos
        Destinos:
            SDU - Rio de Janeiro (Rio de Janeiro)
            BSB - Brasília (Distrito Federal)
            SSA - Salvador (Bahia)
            REC - Recife (Pernambuco)
            CWB - Curitiba (Paraná)
    */

    /*

        SDU

        Nome: Aeroporto Santos Dumont
        Estado: Rio de Janeiro
        Cidade: Rio de Janeiro
        Destinos:
            GRU - São Paulo (São Paulo)
            CNF - Belo Horizonte (Minas Gerais)
            POA - Porto Alegre (Rio Grande do Sul)
            FLN - Florianópolis (Santa Catarina)
    */

    /*
        BSB

    Nome: Aeroporto Internacional de Brasília
    Estado: Distrito Federal
    Cidade: Brasília
    Destinos:
        GRU - São Paulo (São Paulo)
        SDU - Rio de Janeiro (Rio de Janeiro)
        REC - Recife (Pernambuco)
        CWB - Curitiba (Paraná)
    */
    
    /* 
        CNF

        Nome: Aeroporto de Confins
        Estado: Minas Gerais
        Cidade: Confins
        Destinos:
            GRU - São Paulo (São Paulo)
            VIX - Vitória (Espírito Santo)
            FOR - Fortaleza (Ceará)
            CWB - Curitiba (Paraná)
            MAO - Manaus (Amazonas)
    */

    /*
                    VCP

        Nome: Aeroporto de Viracopos
        Estado: São Paulo
        Cidade: Campinas
        Destinos:
            BSB - Brasília (Distrito Federal)
            SDU - Rio de Janeiro (Rio de Janeiro)
            CWB - Curitiba (Paraná)
            REC - Recife (Pernambuco)
    */

    /*
        REC

        Nome: Aeroporto do Recife
        Estado: Pernambuco
        Cidade: Recife
        Destinos:
            GRU - São Paulo (São Paulo)
            FOR - Fortaleza (Ceará)
            SSA - Salvador (Bahia)
            BSB - Brasília (Distrito Federal)
    */

    /*
        FOR

        Nome: Aeroporto de Fortaleza
        Estado: Ceará
        Cidade: Fortaleza
        Destinos:
            GRU - São Paulo (São Paulo)
            SDU - Rio de Janeiro (Rio de Janeiro)
            NAT - Natal (Rio Grande do Norte)
            REC - Recife (Pernambuco)
    */

    /*
        SSA

        Nome: Aeroporto de Salvador
        Estado: Bahia
        Cidade: Salvador
        Destinos:
            GRU - São Paulo (São Paulo)
            BSB - Brasília (Distrito Federal)
            REC - Recife (Pernambuco)
            FOR - Fortaleza (Ceará)
    */

    /*
        MAO

        Nome: Aeroporto de Manaus
        Estado: Amazonas
        Cidade: Manaus
        Destinos:
            BSB - Brasília (Distrito Federal)
            GRU - São Paulo (São Paulo)
            BEL - Belém (Pará)
            NAT - Natal (Rio Grande do Norte)
    */

    /*
        POA

        Nome: Aeroporto de Porto Alegre
        Estado: Rio Grande do Sul
        Cidade: Porto Alegre
        Destinos:
            GRU - São Paulo (São Paulo)
            SDU - Rio de Janeiro (Rio de Janeiro)
            CWB - Curitiba (Paraná)
            CNF - Belo Horizonte (Minas Gerais)
    */

    /*
        CWB

        Nome: Aeroporto Afonso Pena
        Estado: Paraná
        Cidade: Curitiba
        Destinos:
            GRU - São Paulo (São Paulo)
            BSB - Brasília (Distrito Federal)
            SDU - Rio de Janeiro (Rio de Janeiro)
            FLN - Florianópolis (Santa Catarina)
    */

    /*
        FLN

        Nome: Aeroporto Hercílio Luz
        Estado: Santa Catarina
        Cidade: Florianópolis
        Destinos:
            GRU - São Paulo (São Paulo)
            CWB - Curitiba (Paraná)
            POA - Porto Alegre (Rio Grande do Sul)
    */

    /*
        VIX

        Nome: Aeroporto de Vitória
        Estado: Espírito Santo
        Cidade: Vitória
        Destinos:
            GRU - São Paulo (São Paulo)
            BSB - Brasília (Distrito Federal)
            SDU - Rio de Janeiro (Rio de Janeiro)
    */

    /*
        NAT

        Nome: Aeroporto de Natal
        Estado: Rio Grande do Norte
        Cidade: Natal
        Destinos:
            BSB - Brasília (Distrito Federal)
            FOR - Fortaleza (Ceará)
            REC - Recife (Pernambuco)
            MAO - Manaus (Amazonas)

    */

    /*
        BEL

        Nome: Aeroporto de Belém
        Estado: Pará
        Cidade: Belém
        Destinos:
            MAO - Manaus (Amazonas)
            BSB - Brasília (Distrito Federal)
            REC - Recife (Pernambuco)
            FOR - Fortaleza (Ceará)
    */

    /*
        GIG

        Nome: Aeroporto Internacional do Galeão
        Estado: Rio de Janeiro
        Cidade: Rio de Janeiro
        Destinos:
            GRU - São Paulo (São Paulo)
            BSB - Brasília (Distrito Federal)
            SSA - Salvador (Bahia)
            CNF - Belo Horizonte (Minas Gerais)
    */

    /*
        AJU

        Nome: Aeroporto de Aracaju
        Estado: Sergipe
        Cidade: Aracaju
        Destinos:
            BSB - Brasília (Distrito Federal)
            GRU - São Paulo (São Paulo)
            REC - Recife (Pernambuco)
            SSA - Salvador (Bahia)
    */

    /*
        MCZ

        Nome: Aeroporto de Maceió
        Estado: Alagoas
        Cidade: Maceió
        Destinos:
            BSB - Brasília (Distrito Federal)
            REC - Recife (Pernambuco)
            FOR - Fortaleza (Ceará)
            SAL - Salvador (Bahia)
    */

    /*
        SLZ

        Nome: Aeroporto de São Luís
        Estado: Maranhão
        Cidade: São Luís
        Destinos:
            BSB - Brasília (Distrito Federal)
            MAO - Manaus (Amazonas)
            REC - Recife (Pernambuco)
            FOR - Fortaleza (Ceará)
    */

    /*
        CGH

        Nome: Aeroporto de Congonhas
        Estado: São Paulo
        Cidade: São Paulo
        Destinos:
            SDU - Rio de Janeiro (Rio de Janeiro)
            CNF - Belo Horizonte (Minas Gerais)
            BSB - Brasília (Distrito Federal)
            POA - Porto Alegre (Rio Grande do Sul)
    */

    airportsList = [
        {
            airportName: "",
            origin: { code: "", city: "", state: "" }
            baggage: [
                {
                    type: BaggageTypeEnum.CHECKED,
                    maxKilo: ,
                },
                {
                    type: BaggageTypeEnum.HAND_LUGGAGE,
                    maxKilo: ,
                },
                {
                    type: BaggageTypeEnum.PERSONAL_ITEM,
                    maxKilo: ,
                },
            ]
            flightsList: [
                {
                    destination: { code: "", city: "", state: "" },
                    date: "",
                    time: "",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: ,
                            childPrice: ,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: ,
                            childPrice: ,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: ,
                            childPrice: ,
                        },
                    ]
                },

            ]
        }
    ]

    private airport = [
        {
            origin: { code: "GRU", airportName: "Aeroporto Internacional de Guarulhos", city: "Guarulhos", state: "São Paulo" }
            baggage: [
                {
                    type: BaggageTypeEnum.CHECKED,
                    maxKilo: 21,
                },
                {
                    type: BaggageTypeEnum.HAND_LUGGAGE,
                    maxKilo: 12,
                },
                {
                    type: BaggageTypeEnum.PERSONAL_ITEM,
                    maxKilo: 9,
                },
            ]
            flightsList: [
                {
                    destination: { code: "SDU", city: "Rio de Janeiro", state: "Rio de Janeiro" },
                    date: "2024-08-22",
                    time: "08:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 300,
                            childPrice: 280,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1400,
                            childPrice: 1375,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 3980,
                            childPrice: 3890,
                        },
                    ]
                },
                {
                    destination: { code: "BSB", city: "Brasília", state: "Distrito Federal" },
                    date: "2024-12-10",
                    time: "12:30",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 400,
                            childPrice: 380,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1550,
                            childPrice: 1475,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 4000,
                            childPrice: 3990,
                        },
                    ]
                },
                {
                    destination: { code: "", city: "", state: "" },
                    date: "",
                    time: "",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 405,
                            childPrice: 380,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1700,
                            childPrice: 1575,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 5980,
                            childPrice: 4890,
                        },
                    ]
                },
                {
                    destination: { code: "SSA", city: "Salvador", state: "Bahia" },
                    date: "2025-01-20",
                    time: "07:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 200,
                            childPrice: 189,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1500,
                            childPrice: 1475,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 3999,
                            childPrice: 3891,
                        },
                    ]
                },
                {
                    destination: { code: "REC", city: "Recife", state: "Pernambuco" },
                    date: "2024-11-08",
                    time: "14:10",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 205,
                            childPrice: 160,
                        },
                    ]
                },
                {
                    destination: { code: "CWB", city: "Curitiba", state: "Paraná" },
                    date: "2024-11-12",
                    time: "10:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 250,
                            childPrice: 180,
                        },
                    ]
                },
            ]
        },
        {
            origin: { code: "SDU", airportName: "Aeroporto Santos Dumont", city: "Rio de Janeiro", state: "Rio de Janeiro" }
            baggage: [
                {
                    type: BaggageTypeEnum.CHECKED,
                    maxKilo: 30,
                },
                {
                    type: BaggageTypeEnum.HAND_LUGGAGE,
                    maxKilo: 18,
                },
                {
                    type: BaggageTypeEnum.PERSONAL_ITEM,
                    maxKilo: 20,
                },
            ]
            flightsList: [
                {
                    destination: { code: "GRU", city: "São Paulo", state: "São Paulo" },
                    date: "2024-09-03",
                    time: "07:10",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 230,
                            childPrice: 224,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1400,
                            childPrice: 1380,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 3090,
                            childPrice: 3070,
                        },
                    ]
                },
                {
                    destination: { code: "CNF", city: "Belo Horizonte", state: "Minas Gerais" },
                    date: "2025-02-23",
                    time: "08:30",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 250,
                            childPrice: 224,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 990,
                            childPrice: 988,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 2080,
                            childPrice: 2010,
                        },
                    ]
                },
                {
                    destination: { code: "POA", city: "Porto Alegre", state: "Rio Grande do Sul" },
                    date: "2024-12-31",
                    time: "10:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 230,
                            childPrice: 224,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1002,
                            childPrice: 998,
                        },
                    ]
                },
                {
                    destination: { code: "FLN", city: "Florianópolis", state: "Santa Catarina" },
                    date: "2024-11-09",
                    time: "20:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1500,
                            childPrice: 1480,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 5090,
                            childPrice: 5070,
                        },
                    ]
                },
            ]
        },
        {
            origin: { code: "BSB", airportName: "Aeroporto Internacional de Brasília", city: "Brasília", state: "Distrito Federal" }
            baggage: [
                {
                    type: BaggageTypeEnum.CHECKED,
                    maxKilo: 21,
                },
                {
                    type: BaggageTypeEnum.HAND_LUGGAGE,
                    maxKilo: 10,
                },
                {
                    type: BaggageTypeEnum.PERSONAL_ITEM,
                    maxKilo: 10,
                },
            ]
            flightsList: [
                {
                    destination: { code: "GRU", city: "São Paulo", state: "São Paulo" },
                    date: "2025-04-11",
                    time: "15:30",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 660,
                            childPrice: 650,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1800,
                            childPrice: 1780,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 3500,
                            childPrice: 3450,
                        },
                    ]
                },
                {
                    destination: { code: "SDU", city: "Rio de Janeiro", state: "Rio de Janeiro" },
                    date: "2024-12-20",
                    time: "05:45",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 550,
                            childPrice: 530,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 2800,
                            childPrice: 2780,
                        },
                    ]
                },
                {
                    destination: { code: "REC", city: "Recife", state: "Pernambuco" },
                    date: "2024-08-18",
                    time: "06:30",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 750,
                            childPrice: 730,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 3002,
                            childPrice: 2880,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 8200.99,
                            childPrice: 8100.99,
                        },
                    ]
                },
                {
                    destination: { code: "CWB", city: "Curitiba", state: "Paraná" },
                    date: "2024-07-19",
                    time: "08:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 490.80,
                            childPrice: 470.85,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1590.9,
                            childPrice: 1580,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 4700,
                            childPrice: 4690,
                        },
                    ]
                }
            ]
        },
        {
            origin: { code: "CNF", airportName: "Aeroporto de Confins", city: "Confins", state: "Minas Gerais" }
            baggage: [
                {
                    type: BaggageTypeEnum.CHECKED,
                    maxKilo: 20,
                },
                {
                    type: BaggageTypeEnum.HAND_LUGGAGE,
                    maxKilo: 11,
                },
                {
                    type: BaggageTypeEnum.PERSONAL_ITEM,
                    maxKilo: 11,
                },
            ]
            flightsList: [
                {
                    destination: { code: "GRU", city: "São Paulo", state: "São Paulo" },
                    date: "2024-11-14",
                    time: "09:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 380,
                            childPrice: 378,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1390.99,
                            childPrice: 1370.99,
                        },
                    ]
                },
                {
                    destination: { code: "VIX", city: "Vitória", state: "Espírito Santo" },
                    date: "2025-01-17",
                    time: "07:20",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 550,
                            childPrice: 540,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 2100,
                            childPrice: 2099,
                        },
                    ]
                },
                {
                    destination: { code: "FOR", city: "Fortaleza", state: "Ceará" },
                    date: "2024-10-19",
                    time: "13:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1400,
                            childPrice: 1330,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 8000,
                            childPrice: 7980,
                        },
                    ]
                },
                {
                    destination: { code: "CWB", city: "Curitiba", state: "Paraná" },
                    date: "2024-06-21",
                    time: "20:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 650,
                            childPrice: 640,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 2300,
                            childPrice: 2200,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 12000,
                            childPrice: 12000,
                        },
                    ]
                },
                {
                    destination: { code: "MAO", city: "Manaus", state: "Amazonas" },
                    date: "2024-09-29",
                    time: "11:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 780,
                            childPrice: 770,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 2700,
                            childPrice: 2630,
                        },
                    ]
                },
            ]
        },
        {
            origin: { code: "VCP", airportName: "Aeroporto de Viracopos", city: "Campinas", state: "São Paulo" }
            baggage: [
                {
                    type: BaggageTypeEnum.CHECKED,
                    maxKilo: 21,
                },
                {
                    type: BaggageTypeEnum.HAND_LUGGAGE,
                    maxKilo: 30,
                },
                {
                    type: BaggageTypeEnum.PERSONAL_ITEM,
                    maxKilo: 10,
                },
            ]
            flightsList: [
                {
                    destination: { code: "BSB", city: "Brasília", state: "Distrito Federal" },
                    date: "2024-10-10",
                    time: "17:45",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1010,
                            childPrice: 999,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 2000,
                            childPrice: 1800,
                        },
                    ]
                },
                {
                    destination: { code: "SDU", city: "Rio de Janeiro", state: "Rio de Janeiro" },
                    date: "2025-",
                    time: "05:10",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 560,
                            childPrice: 550,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1700,
                            childPrice: 1680,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 3400,
                            childPrice: 3200,
                        },
                    ]
                },
                {
                    destination: { code: "CWB", city: "Curitiba", state: "Paraná" },
                    date: "25-05-01",
                    time: "12:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 780,
                            childPrice: 780,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 2300,
                            childPrice: 2280,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 5090,
                            childPrice: 5090,
                        },
                    ]
                },
                {
                    destination: { code: "REC", city: "Recife", state: "Pernambuco" },
                    date: "2025-01-08",
                    time: "10:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 380,
                            childPrice: 379.90,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1400,
                            childPrice: 1370 ,
                        },
                    ]
                },
            ]
        },
        {
            origin: { code: "REC", airportName: "Aeroporto do Recife", city: "Recife", state: "Pernambuco" }
            baggage: [
                {
                    type: BaggageTypeEnum.CHECKED,
                    maxKilo: 21,
                },
                {
                    type: BaggageTypeEnum.HAND_LUGGAGE,
                    maxKilo: 20,
                },
                {
                    type: BaggageTypeEnum.PERSONAL_ITEM,
                    maxKilo: 15,
                },
            ]
            flightsList: [
                {
                    destination: { code: "GRU", city: "São Paulo", state: "São Paulo" },
                    date: "2024-11-12",
                    time: "08:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 270,
                            childPrice: 259,
                        },
                    ]
                },
                {
                    destination: { code: "FOR", city: "Fortaleza", state: "Ceará" },
                    date: "2024-12-25",
                    time: "09:45",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 890,
                            childPrice: 870,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 4800,
                            childPrice: 4790,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 15000,
                            childPrice: 15090,
                        },
                    ]
                },
                {
                    destination: { code: "SSA", city: "Salvador", state: "Bahia" },
                    date: "2024-09-18",
                    time: "18:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 210,
                            childPrice: 210,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 890,
                            childPrice: 885,
                        },
                    ]
                },
                {
                    destination: { code: "BSB", city: "Brasília", state: "Distrito Federal" },
                    date: "2025-02-23",
                    time: "7:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 589.55,
                            childPrice: 579.91,
                        }
                    ]
                }
            ]
        },
        {
            origin: { code: "FOR", airportName: "Aeroporto de Fortaleza", city: "Fortaleza", state: "Ceará" }
            baggage: [
                {
                    type: BaggageTypeEnum.CHECKED,
                    maxKilo: 21,
                },
                {
                    type: BaggageTypeEnum.HAND_LUGGAGE,
                    maxKilo: 12,
                },
                {
                    type: BaggageTypeEnum.PERSONAL_ITEM,
                    maxKilo: 10,
                },
            ]
            flightsList: [
                {
                    destination: { code: "GRU", city: "São Paulo", state: "São Paulo" },
                    date: "2024-10-04",
                    time: "10:15",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1450.80,
                            childPrice: 1420,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 10000,
                            childPrice: 10000,
                        },
                    ]
                },
                {
                    destination: { code: "SDU", city: "Rio de Janeiro", state: "Rio de Janeiro" },
                    date: "2025-03-09",
                    time: "19:55",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 670,
                            childPrice: 650,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 2090,
                            childPrice: 2085,
                        },
                    ]
                },
                {
                    destination: { code: "NAT", city: "Natal", state: "Rio Grande do Norte" },
                    date: "2024-11-28",
                    time: "09:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 450.08,
                            childPrice: 447.90,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1600,
                            childPrice: 1600,
                        },
                    ]
                },
                {
                    destination: { code: "REC", city: "Recife", state: "Pernambuco" },
                    date: "2024-01-19",
                    time: "15:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 230,
                            childPrice: 220,
                        },
                    ]
                },
            ]
        },
        {
            origin: { code: "SSA", airportName: "Aeroporto de Salvador", city: "Salvador", state: "Bahia" },
            baggage: [
                {
                    type: BaggageTypeEnum.CHECKED,
                    maxKilo: 21,
                },
                {
                    type: BaggageTypeEnum.HAND_LUGGAGE,
                    maxKilo: 12,
                },
                {
                    type: BaggageTypeEnum.PERSONAL_ITEM,
                    maxKilo: 10,
                },
            ],
            flightsList: [
                {
                    destination: { code: "GRU", city: "São Paulo", state: "São Paulo" },
                    date: "2024-09-27",
                    time: "07:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 333,
                            childPrice: 320,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1509,
                            childPrice: 1498,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 7080,
                            childPrice: 7050,
                        },
                    ]
                },
                {
                    destination: { code: "BSB", city: "Brasília", state: "Distrito Federal" },
                    date: "2025-05-31",
                    time: "09:50",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 250,
                            childPrice: 240,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1500.80,
                            childPrice: 1490.85,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 5500,
                            childPrice: 5400,
                        },
                    ]
                },
                {
                    destination: { code: "REC", city: "Recife", state: "Pernambuco" },
                    date: "2024-09-29",
                    time: "08:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 690,
                            childPrice: 680,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 3600,
                            childPrice: 3550,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 9080,
                            childPrice: 9070,
                        },
                    ]
                },
                {
                    destination: { code: "FOR", city: "Fortaleza", state: "Ceará" },
                    date: "2024-11-28",
                    time: "07:45",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 550,
                            childPrice: 530,
                        },
                    ]
                },
            ]
        },
        {
            origin: { code: "MAO", airportName: "Aeroporto de Manaus", city: "Manaus", state: "Amazonas" }
            baggage: [
                {
                    type: BaggageTypeEnum.CHECKED,
                    maxKilo: 21,
                },
                {
                    type: BaggageTypeEnum.HAND_LUGGAGE,
                    maxKilo: 12,
                },
                {
                    type: BaggageTypeEnum.PERSONAL_ITEM,
                    maxKilo: 10,
                },
            ]
            flightsList: [
                {
                    destination: { code: "BSB", city: "Brasília", state: "Distrito Federal" },
                    date: "2024-10-09",
                    time: "10:30",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 480,
                            childPrice: 460,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1490,
                            childPrice: 1470,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 5600,
                            childPrice: 5598,
                        },
                    ]
                },
                {
                    destination: { code: "GRU", city: "São Paulo", state: "São Paulo" },
                    date: "2024-07-28",
                    time: "08:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 990,
                            childPrice: 980,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 5500,
                            childPrice: 5400,
                        }
                    ]
                },
                {
                    destination: { code: "BEL", city: "Belém", state: "Pará" },
                    date: "2025-04-09",
                    time: "14:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 440,
                            childPrice: 430.89,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1560,
                            childPrice: 1550,
                        }
                    ]
                },
                {
                    destination: { code: "NAT", city: "Natal", state: "Rio Grande do Norte" },
                    date: "2024-05-12",
                    time: "15:45",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 350.20,
                            childPrice: 330.21,
                        },
                    ]
                }
            ]
        },
        {
            origin: { code: "POA", airportName: "Aeroporto de Porto Alegre", city: "Porto Alegre", state: "Rio Grande do Sul" }
            baggage: [
                {
                    type: BaggageTypeEnum.CHECKED,
                    maxKilo: 21,
                },
                {
                    type: BaggageTypeEnum.HAND_LUGGAGE,
                    maxKilo: 12,
                },
                {
                    type: BaggageTypeEnum.PERSONAL_ITEM,
                    maxKilo: 10,
                },
            ]
            flightsList: [
                {
                    destination: { code: "GRU", city: "São Paulo", state: "São Paulo" },
                    date: "2024-11-04",
                    time: "09:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 560,
                            childPrice: 550,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1245.90,
                            childPrice: 1230.90,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 7080.99,
                            childPrice: 7070.99,
                        },
                    ]
                },
                {
                    destination: { code: "SDU", city: "Rio de Janeiro", state: "Rio de Janeiro" },
                    date: "2024-10-31",
                    time: "12:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 570.8,
                            childPrice: 560.8,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1680,
                            childPrice: 1650,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 8000,
                            childPrice: 8000,
                        },
                    ]
                },
                {
                    destination: { code: "CWB", city: "Curitiba", state: "Paraná" },
                    date: "2024-11-01",
                    time: "05:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 459,
                            childPrice: 435,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1589.56,
                            childPrice: 1378.87,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 6876.98,
                            childPrice: 6497.79,
                        },
                    ]
                },
                {
                    destination: { code: "CNF", city: "Belo Horizonte", state: "Minas Gerais" },
                    date: "2024-08-17",
                    time: "08:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 679.78,
                            childPrice: 586.80,
                        },
                    ]
                }
            ]
        },
        {
            origin: { code: "CWB", airportName: "Aeroporto Afonso Pena", city: "Curitiba", state: "Paraná" }
            baggage: [
                {
                    type: BaggageTypeEnum.CHECKED,
                    maxKilo: 21,
                },
                {
                    type: BaggageTypeEnum.HAND_LUGGAGE,
                    maxKilo: 9,
                },
                {
                    type: BaggageTypeEnum.PERSONAL_ITEM,
                    maxKilo: 9,
                },
            ]
            flightsList: [
                {
                    destination: { code: "GRU", city: "São Paulo", state: "São Paulo" },
                    date: "2024-09-30",
                    time: "09:55",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 345,
                            childPrice: 324,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1356,
                            childPrice: 1336,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 5876,
                            childPrice: 5476,
                        },
                    ]
                },
                {
                    destination: { code: "BSB", city: "Brasília", state: "Distrito Federal" },
                    date: "2025-01-31",
                    time: "08:30",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 679,
                            childPrice: 648,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 2646,
                            childPrice: 2527,
                        },
                    ]
                },
                {
                    destination: { code: "SDU", city: "Rio de Janeiro", state: "Rio de Janeiro" },
                    date: "2024-12-31",
                    time: "09:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 345.34,
                            childPrice: 305.38,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1032.23,
                            childPrice: 1039.34,
                        },
                    ]
                },
                {
                    destination: { code: "FLN", city: "Florianópolis", state: "Santa Catarina" },
                    date: "2024-09-18",
                    time: "04:45",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 575.35,
                            childPrice: 535.79,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1756,
                            childPrice: 1635,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 15000.99,
                            childPrice: 15000.99,
                        },
                    ]
                }
            ]
        },
        {
            origin: { code: "FLN", airportName: "Aeroporto Hercílio Luz", city: "Florianópolis", state: "Santa Catarina" }
            baggage: [
                {
                    type: BaggageTypeEnum.CHECKED,
                    maxKilo: 21,
                },
                {
                    type: BaggageTypeEnum.HAND_LUGGAGE,
                    maxKilo: 12,
                },
                {
                    type: BaggageTypeEnum.PERSONAL_ITEM,
                    maxKilo: 10,
                },
            ]
            flightsList: [
                {
                    destination: { code: "GRU", city: "São Paulo", state: "São Paulo" },
                    date: "2025-01-31",
                    time: "08:45",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 678.43,
                            childPrice: 634.54,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 2043.34,
                            childPrice: 2034.43,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 10003.43,
                            childPrice: 9994.43,
                        },
                    ]
                },
                {
                    destination: { code: "CWB ", city: "Curitiba", state: "Paraná" },
                    date: "2025-02-24",
                    time: "09:20",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 356,
                            childPrice: 352,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1245.43,
                            childPrice: 1240.28,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 5035,
                            childPrice: 5035,
                        },
                    ]
                },
                {
                    destination: { code: "POA", city: "Porto Alegre", state: "Rio Grande do Sul" },
                    date: "2024-10-09",
                    time: "13:55",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 798.9,
                            childPrice: 768.59,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 2475.88,
                            childPrice: 2354.68,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 4908,
                            childPrice: 4908,
                        },
                    ]
                },
            ]
        },
        {
            origin: { code: "VIX", airportName: "Aeroporto de Vitória", city: "Vitória", state: "Espírito Santo" }
            baggage: [
                {
                    type: BaggageTypeEnum.CHECKED,
                    maxKilo: 21,
                },
                {
                    type: BaggageTypeEnum.HAND_LUGGAGE,
                    maxKilo: 12,
                },
                {
                    type: BaggageTypeEnum.PERSONAL_ITEM,
                    maxKilo: 10,
                },
            ]
            flightsList: [
                {
                    destination: { code: "GRU ", city: "São Paulo", state: "São Paulo" },
                    date: "2025-03-27",
                    time: "11:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1456.79,
                            childPrice: 1365.57,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 7989.6,
                            childPrice: 7575,
                        },
                    ]
                },
                {
                    destination: { code: "BSB", city: "Brasília", state: "Distrito Federal" },
                    date: "2024-12-16",
                    time: "07:15",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 686.68,
                            childPrice: 657.47,
                        },
                    ]
                },
                {
                    destination: { code: "SDU", city: "Rio de Janeiro", state: "Rio de Janeiro" },
                    date: "2025-03-01",
                    time: "10:25",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 586.68,
                            childPrice: 570.57,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 8685.86,
                            childPrice: 8685.86,
                        },
                    ]
                },
            ]
        },
        {
            origin: { code: "NAT", airportName: "Aeroporto de Natal", city: "Natal", state: "Rio Grande do Norte" }
            baggage: [
                {
                    type: BaggageTypeEnum.CHECKED,
                    maxKilo: 22,
                },
                {
                    type: BaggageTypeEnum.HAND_LUGGAGE,
                    maxKilo: 12,
                },
                {
                    type: BaggageTypeEnum.PERSONAL_ITEM,
                    maxKilo: 12,
                },
            ]
            flightsList: [
                {
                    destination: { code: "BSB", city: "Brasília", state: "Distrito Federal" },
                    date: "2024-08-26",
                    time: "14:10",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 869.78,
                            childPrice: 828.68,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 3857.78,
                            childPrice: 3815.79,
                        }
                    ]
                },
                {
                    destination: { code: "FOR", city: "Fortaleza", state: "Ceará" },
                    date: "2024-11-18",
                    time: "09:30",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 784.76,
                            childPrice: 710.76,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 2753.8,
                            childPrice: 2695,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 7000,
                            childPrice: 7000,
                        },
                    ]
                },
                {
                    destination: { code: "REC", city: "Recife", state: "Pernambuco" },
                    date: "2025-05-30",
                    time: "07:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 257,
                            childPrice: 257,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1636,
                            childPrice: 1600,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 7906,
                            childPrice: 7859,
                        },
                    ]
                },
                {
                    destination: { code: "MAO", city: "Manaus", state: "Amazonas" },
                    date: "2024-11-27",
                    time: "08:35",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 467,
                            childPrice: 425,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1485,
                            childPrice: 1436,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 7574,
                            childPrice: 7406,
                        },
                    ]
                }
            ]
        },
        {
            origin: { code: "BEL", airportName: "", city: "Belém", state: "Pará" }
            baggage: [
                {
                    type: BaggageTypeEnum.CHECKED,
                    maxKilo: 21,
                },
                {
                    type: BaggageTypeEnum.HAND_LUGGAGE,
                    maxKilo: 12,
                },
                {
                    type: BaggageTypeEnum.PERSONAL_ITEM,
                    maxKilo: 10,
                },
            ]
            flightsList: [
                {
                    destination: { code: "", city: "", state: "" },
                    date: "",
                    time: "",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: ,
                            childPrice: ,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: ,
                            childPrice: ,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: ,
                            childPrice: ,
                        },
                    ]
                },
                {
                    destination: { code: "", city: "", state: "" },
                    date: "",
                    time: "",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: ,
                            childPrice: ,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: ,
                            childPrice: ,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: ,
                            childPrice: ,
                        },
                    ]
                },
                {
                    destination: { code: "", city: "", state: "" },
                    date: "",
                    time: "",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: ,
                            childPrice: ,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: ,
                            childPrice: ,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: ,
                            childPrice: ,
                        },
                    ]
                },
                {
                    destination: { code: "", city: "", state: "" },
                    date: "",
                    time: "",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: ,
                            childPrice: ,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: ,
                            childPrice: ,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: ,
                            childPrice: ,
                        },
                    ]
                }
            ]
        },
        {
            origin: { code: "", airportName: "", city: "", state: "" }
            baggage: [
                {
                    type: BaggageTypeEnum.CHECKED,
                    maxKilo: 21,
                },
                {
                    type: BaggageTypeEnum.HAND_LUGGAGE,
                    maxKilo: 12,
                },
                {
                    type: BaggageTypeEnum.PERSONAL_ITEM,
                    maxKilo: 10,
                },
            ]
            flightsList: [
                {
                    destination: { code: "", city: "", state: "" },
                    date: "",
                    time: "",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: ,
                            childPrice: ,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: ,
                            childPrice: ,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: ,
                            childPrice: ,
                        },
                    ]
                }
            ]
        },
        {
            origin: { code: "", airportName: "", city: "", state: "" }
            baggage: [
                {
                    type: BaggageTypeEnum.CHECKED,
                    maxKilo: 21,
                },
                {
                    type: BaggageTypeEnum.HAND_LUGGAGE,
                    maxKilo: 12,
                },
                {
                    type: BaggageTypeEnum.PERSONAL_ITEM,
                    maxKilo: 10,
                },
            ]
            flightsList: [
                {
                    destination: { code: "", city: "", state: "" },
                    date: "",
                    time: "",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: ,
                            childPrice: ,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: ,
                            childPrice: ,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: ,
                            childPrice: ,
                        },
                    ]
                }
            ]
        },
        {
            origin: { code: "", airportName: "", city: "", state: "" }
            baggage: [
                {
                    type: BaggageTypeEnum.CHECKED,
                    maxKilo: 21,
                },
                {
                    type: BaggageTypeEnum.HAND_LUGGAGE,
                    maxKilo: 10,
                },
                {
                    type: BaggageTypeEnum.PERSONAL_ITEM,
                    maxKilo: 10,
                },
            ]
            flightsList: [
                {
                    destination: { code: "", city: "", state: "" },
                    date: "",
                    time: "",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: ,
                            childPrice: ,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: ,
                            childPrice: ,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: ,
                            childPrice: ,
                        },
                    ]
                }
            ]
        },
        {
            origin: { code: "", airportName: "", city: "", state: "" }
            baggage: [
                {
                    type: BaggageTypeEnum.CHECKED,
                    maxKilo: 21,
                },
                {
                    type: BaggageTypeEnum.HAND_LUGGAGE,
                    maxKilo: 12,
                },
                {
                    type: BaggageTypeEnum.PERSONAL_ITEM,
                    maxKilo: 10,
                },
            ]
            flightsList: [
                {
                    destination: { code: "", city: "", state: "" },
                    date: "",
                    time: "",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: ,
                            childPrice: ,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: ,
                            childPrice: ,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: ,
                            childPrice: ,
                        },
                    ]
                }
            ]
        },
        {
            origin: { code: "", airportName: "", city: "", state: "" }
            baggage: [
                {
                    type: BaggageTypeEnum.CHECKED,
                    maxKilo: 21,
                },
                {
                    type: BaggageTypeEnum.HAND_LUGGAGE,
                    maxKilo: 12,
                },
                {
                    type: BaggageTypeEnum.PERSONAL_ITEM,
                    maxKilo: 10,
                },
            ]
            flightsList: [
                {
                    destination: { code: "", city: "", state: "" },
                    date: "",
                    time: "",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: ,
                            childPrice: ,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: ,
                            childPrice: ,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: ,
                            childPrice: ,
                        },
                    ]
                }
            ]
        },
    ]

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
        {
            flightsList: [
                {
                    origin: { code: 'GRU', city: 'São Paulo', state: 'SP' },
                    destination: { code: 'REC', city: 'Recife', state: 'PE' },
                    date: '2024-12-23',
                    time: '09:00',
                    prices: {
                        economy: 420,
                        business: 1600,
                        firstClass: 3000,
                    },
                },
                {
                    origin: { code: 'GRU', city: 'São Paulo', state: 'SP' },
                    destination: { code: 'SSA', city: 'Salvador', state: 'BA' },
                    date: '2024-12-24',
                    time: '12:45',
                    prices: {
                        economy: 380,
                        business: 1500,
                    },
                },
                {
                    origin: { code: 'GRU', city: 'São Paulo', state: 'SP' },
                    destination: { code: 'FOR', city: 'Fortaleza', state: 'CE' },
                    date: '2024-12-25',
                    time: '16:30',
                    prices: {
                        economy: 430,
                        firstClass: 3200,
                    },
                },
            ],
        },
        {
            flightsList: [
                {
                    origin: { code: 'BSB', city: 'Brasília', state: 'DF' },
                    destination: { code: 'FOR', city: 'Fortaleza', state: 'CE' },
                    date: '2024-12-26',
                    time: '14:00',
                    prices: {
                        economy: 360,
                        business: 1300,
                    },
                },
                {
                    origin: { code: 'BSB', city: 'Brasília', state: 'DF' },
                    destination: { code: 'REC', city: 'Recife', state: 'PE' },
                    date: '2024-12-27',
                    time: '11:00',
                    prices: {
                        economy: 320,
                    },
                },
                {
                    origin: { code: 'BSB', city: 'Brasília', state: 'DF' },
                    destination: { code: 'NAT', city: 'Natal', state: 'RN' },
                    date: '2024-12-28',
                    time: '18:00',
                    prices: {
                        economy: 470,
                        firstClass: 2800,
                    },
                },
            ],
        },
        {
            flightsList: [
                {
                    origin: { code: 'FOR', city: 'Fortaleza', state: 'CE' },
                    destination: { code: 'GRU', city: 'São Paulo', state: 'SP' },
                    date: '2024-12-29',
                    time: '07:00',
                    prices: {
                        economy: 410,
                        business: 1500,
                    },
                },
                {
                    origin: { code: 'FOR', city: 'Fortaleza', state: 'CE' },
                    destination: { code: 'CWB', city: 'Curitiba', state: 'PR' },
                    date: '2024-12-30',
                    time: '10:30',
                    prices: {
                        economy: 390,
                        business: 1200,
                        firstClass: 2700,
                    },
                },
                {
                    origin: { code: 'FOR', city: 'Fortaleza', state: 'CE' },
                    destination: { code: 'FLN', city: 'Florianópolis', state: 'SC' },
                    date: '2025-01-01',
                    time: '09:00',
                    prices: {
                        economy: 450,
                    },
                },
            ],
        },
        {
            flightsList: [
                {
                    origin: { code: 'SSA', city: 'Salvador', state: 'BA' },
                    destination: { code: 'NAT', city: 'Natal', state: 'RN' },
                    date: '2025-01-02',
                    time: '10:00',
                    prices: {
                        economy: 350,
                        business: 1400,
                    },
                },
                {
                    origin: { code: 'SSA', city: 'Salvador', state: 'BA' },
                    destination: { code: 'FLN', city: 'Florianópolis', state: 'SC' },
                    date: '2025-01-03',
                    time: '15:00',
                    prices: {
                        economy: 470,
                        firstClass: 3200,
                    },
                },
                {
                    origin: { code: 'SSA', city: 'Salvador', state: 'BA' },
                    destination: { code: 'CWB', city: 'Curitiba', state: 'PR' },
                    date: '2025-01-04',
                    time: '14:30',
                    prices: {
                        economy: 390,
                    },
                },
            ],
        },
        {
            flightsList: [
                {
                    origin: { code: 'FOR', city: 'Fortaleza', state: 'CE' },
                    destination: { code: 'REC', city: 'Recife', state: 'PE' },
                    date: '2025-01-05',
                    time: '16:00',
                    prices: {
                        economy: 240,
                        business: 1000,
                    },
                },
                {
                    origin: { code: 'FOR', city: 'Fortaleza', state: 'CE' },
                    destination: { code: 'NAT', city: 'Natal', state: 'RN' },
                    date: '2025-01-06',
                    time: '11:00',
                    prices: {
                        economy: 220,
                        business: 900,
                    },
                },
                {
                    origin: { code: 'FOR', city: 'Fortaleza', state: 'CE' },
                    destination: { code: 'SSA', city: 'Salvador', state: 'BA' },
                    date: '2025-01-07',
                    time: '09:00',
                    prices: {
                        economy: 330,
                    },
                },
            ],
        },
        {
            flightsList: [
                {
                    origin: { code: 'GRU', city: 'São Paulo', state: 'SP' },
                    destination: { code: 'POA', city: 'Porto Alegre', state: 'RS' },
                    date: '2025-01-08',
                    time: '12:00',
                    prices: {
                        economy: 350,
                        business: 1300,
                        firstClass: 2900,
                    },
                },
                {
                    origin: { code: 'GRU', city: 'São Paulo', state: 'SP' },
                    destination: { code: 'GIG', city: 'Rio de Janeiro', state: 'RJ' },
                    date: '2025-01-09',
                    time: '14:00',
                    prices: {
                        economy: 290,
                    },
                },
                {
                    origin: { code: 'GRU', city: 'São Paulo', state: 'SP' },
                    destination: { code: 'REC', city: 'Recife', state: 'PE' },
                    date: '2025-01-10',
                    time: '16:45',
                    prices: {
                        economy: 430,
                        business: 1600,
                    },
                },
            ],
        },
        {
            flightsList: [
                {
                    origin: { code: 'CWB', city: 'Curitiba', state: 'PR' },
                    destination: { code: 'SSA', city: 'Salvador', state: 'BA' },
                    date: '2025-01-11',
                    time: '11:00',
                    prices: {
                        economy: 420,
                    },
                },
                {
                    origin: { code: 'CWB', city: 'Curitiba', state: 'PR' },
                    destination: { code: 'REC', city: 'Recife', state: 'PE' },
                    date: '2025-01-12',
                    time: '14:30',
                    prices: {
                        economy: 360,
                        business: 1300,
                    },
                },
                {
                    origin: { code: 'CWB', city: 'Curitiba', state: 'PR' },
                    destination: { code: 'NAT', city: 'Natal', state: 'RN' },
                    date: '2025-01-13',
                    time: '18:00',
                    prices: {
                        economy: 380,
                        firstClass: 3000,
                    },
                },
            ],
        },
        {
            flightsList: [
                {
                    origin: { code: 'REC', city: 'Recife', state: 'PE' },
                    destination: { code: 'GIG', city: 'Rio de Janeiro', state: 'RJ' },
                    date: '2025-01-14',
                    time: '09:30',
                    prices: {
                        economy: 350,
                        business: 1400,
                    },
                },
                {
                    origin: { code: 'REC', city: 'Recife', state: 'PE' },
                    destination: { code: 'BSB', city: 'Brasília', state: 'DF' },
                    date: '2025-01-15',
                    time: '12:45',
                    prices: {
                        economy: 320,
                        firstClass: 290
                    }
                }
            ]
        },
    ]

    getFlightsTicket(): Observable<AirportsList> {

        return new Observable<AirportsList>((observable) => {
          setTimeout(() => {
            observable.next(this.airportsList);
            observable.complete();
          }, 500);
        });
    }
}