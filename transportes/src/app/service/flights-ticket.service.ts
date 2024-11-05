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
            origin: { code: "BEL", airportName: "Aeroporto de Belém", city: "Belém", state: "Pará" }
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
                    destination: { code: "MAO", city: "Manaus", state: "Amazonas" },
                    date: "2023-11-04",
                    time: "5:45",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 550,
                            childPrice: 520,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1789.9,
                            childPrice: 1689.04,
                        },
                    ]
                },
                {
                    destination: { code: "BSB", city: "Brasília", state: "Distrito Federal" },
                    date: "2025-01-09",
                    time: "14:30",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 730.07,
                            childPrice: 690.10,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 2500,
                            childPrice: 2402.2,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 5900,
                            childPrice: 5900,
                        },
                    ]
                },
                {
                    destination: { code: "REC", city: "Recife", state: "Pernambuco" },
                    date: "2024-09-21",
                    time: "6:45",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 230,
                            childPrice: 220,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 890,
                            childPrice: 810,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 3450.99,
                            childPrice: 3350.99,
                        },
                    ]
                },
                {
                    destination: { code: "FOR", city: "Fortaleza", state: "Ceará" },
                    date: "2024-12-31",
                    time: "8:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 790.89,
                            childPrice: 723.98,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 3567.48,
                            childPrice: 3453.45,
                        },
                    ]
                }
            ]
        },
        {
            origin: { code: "GIG", airportName: "Aeroporto Internacional do Galeão", city: "Rio de Janeiro", state: "Rio de Janeiro" }
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
                    date: "2025-02-16",
                    time: "9:20",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 450,
                            childPrice: 430,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1456.81,
                            childPrice: 1357.97,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 6868.57,
                            childPrice: 6757.03,
                        },
                    ]
                },
                {
                    destination: { code: "BSB", city: "Brasília", state: "Distrito Federal" },
                    date: "2024-10-09",
                    time: "11:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 679,
                            childPrice: 659,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 2566.01,
                            childPrice: 2364.89,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 7585.09,
                            childPrice: 7585.09,
                        },
                    ]
                },
                {
                    destination: { code: "SSA", city: "Salvador", state: "Bahia" },
                    date: "2025-04-19",
                    time: "15:30",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 578,
                            childPrice: 526,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1686,
                            childPrice: 1626,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 8681.97,
                            childPrice: 8681.97,
                        },
                    ]
                },
                {
                    destination: { code: "CNF", city: "Belo Horizonte", state: "Minas Gerais" },
                    date: "2024-08-25",
                    time: "8:45",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 685,
                            childPrice: 598,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 3647,
                            childPrice: 3547,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 9283.34,
                            childPrice: 9283.34,
                        },
                    ]
                }
            ]
        },
        {
            origin: { code: "AJU", airportName: "Aeroporto de Aracaju", city: "Aracaju", state: "Sergipe" }
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
                    date: "2024-12-08",
                    time: "9:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 679,
                            childPrice: 626,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1896,
                            childPrice: 1796,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 5747,
                            childPrice: 5474,
                        },
                    ]
                },
                {
                    destination: { code: "GRU", city: "São Paulo", state: "São Paulo" },
                    date: "2025-05-04",
                    time: "9:20",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 468.97,
                            childPrice: 436.7,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1474,
                            childPrice: 1337,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 6858,
                            childPrice: 6758,
                        },
                    ]
                },
                {
                    destination: { code: "REC", city: "Recife", state: "Pernambuco" },
                    date: "2024-08-26",
                    time: "9:30",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 685,
                            childPrice: 647,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1748.8,
                            childPrice: 1607.09,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 7960.98,
                            childPrice: 7885.97,
                        },
                    ]
                },
                {
                    destination: { code: "SSA", city: "Salvador", state: "Bahia" },
                    date: "2024-08-30",
                    time: "7:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 464,
                            childPrice: 436,
                        }
                    ]
                },
            ]
        },
        {
            origin: { code: "MCZ", airportName: "Aeroporto de Maceió", city: "Maceió", state: "Alagoas" }
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
                    destination: { code: "BSB", city: "Brasília", state: "Distrito Federal" },
                    date: "2024-09-28",
                    time: "09:30",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 368,
                            childPrice: 320,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 970,
                            childPrice: 959.8,
                        }
                    ]
                },
                {
                    destination: { code: "REC", city: "Recife", state: "Pernambuco" },
                    date: "2025-02-19",
                    time: "07:45",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 785.96,
                            childPrice: 474.87,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 3648.09,
                            childPrice: 3277.6,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 7585,
                            childPrice: 7585,
                        },
                    ]
                },
                {
                    destination: { code: "FOR", city: "Fortaleza", state: "Ceará" },
                    date: "2024-12-07",
                    time: "12:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 475,
                            childPrice: 437,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1474,
                            childPrice: 1426,
                        }
                    ]
                },
                {
                    destination: { code: "SAL", city: "Salvador", state: "Bahia" },
                    date: "2024-01-28",
                    time: "11:30",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 647.9,
                            childPrice: 638.98,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 2075.9,
                            childPrice: 1958.6,
                        }
                    ]
                }
            ]
        },
        {
            origin: { code: "SLZ", airportName: "Aeroporto de São Luís", city: "São Luís", state: "Maranhão" }
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
                    date: "2024-09-15",
                    time: "09:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 390,
                            childPrice: 350.8,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 979,
                            childPrice: 927.09,
                        },
                    ]
                },
                {
                    destination: { code: "MAO", city: "Manaus", state: "Amazonas" },
                    date: "2025-04-19",
                    time: "12:45",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 575,
                            childPrice: 353,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 2538,
                            childPrice: 2006,
                        },
                    ]
                },
                {
                    destination: { code: "REC", city: "Recife", state: "Pernambuco" },
                    date: "2024-08-29",
                    time: "10:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 675.79,
                            childPrice: 609.8,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 2546,
                            childPrice: 2353.8,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 7869.12,
                            childPrice: 7747.89,
                        },
                    ]
                },
                {
                    destination: { code: "FOR", city: "Fortaleza", state: "Ceará" },
                    date: "2025-03-05",
                    time: "08:20",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 786,
                            childPrice: 685.8,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 5757.97,
                            childPrice: 5757.97,
                        },
                    ]
                }
            ]
        },
        {
            origin: { code: "CGH", airportName: "Aeroporto de Congonhas", city: "São Paulo", state: "São Paulo" }
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
                    destination: { code: "SDU", city: "Rio de Janeiro", state: "Rio de Janeiro" },
                    date: "2024-11-21",
                    time: "09:45",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 549,
                            childPrice: 498,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1793,
                            childPrice: 1634,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 2342,
                            childPrice: 2142.3,
                        },
                    ]
                },
                {
                    destination: { code: "CNF", city: "Belo Horizonte", state: "Minas Gerais" },
                    date: "2025-01-01",
                    time: "12:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 234,
                            childPrice: 234,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 834.39,
                            childPrice: 803.23,
                        },
                    ]
                },
                {
                    destination: { code: "BSB", city: "Brasília", state: "Distrito Federal" },
                    date: "2024-07-12",
                    time: "08:00",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 434.3,
                            childPrice: 409.9,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1243,
                            childPrice: 1209,
                        },
                        {
                            type: FlightClassTypeEnum.FIRST_CLASS,
                            adultPrice: 6838,
                            childPrice: 6838,
                        },
                    ]
                },
                {
                    destination: { code: "POA", city: "Porto Alegre", state: "Rio Grande do Sul" },
                    date: "2025-03-04",
                    time: "10:45",
                    flightClass: [
                        {
                            type: FlightClassTypeEnum.ECONOMY,
                            adultPrice: 435.83,
                            childPrice: 397.77,
                        },
                        {
                            type: FlightClassTypeEnum.BUSINESS,
                            adultPrice: 1342.82,
                            childPrice: 1304.09,
                        },
                    ]
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