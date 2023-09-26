import {InputData} from "../interfaces/input-data";

export const cardPayment: InputData[] = [
    {
        title: 'Numer karty',
        formControlName: 'cardNumber',
        required: false
    },
    {
        title: 'Posiadacz  karty',
        formControlName: 'cardHolder',
        required: false
    },
    {
        title: 'Data ważności (MM/YY)',
        formControlName: 'expiredDate',
        required: false
    },
    {
        title: 'CW/CVC(123)',
        formControlName: 'CWCVC',
        required: false
    },
]
