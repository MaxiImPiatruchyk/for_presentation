import {InputData} from "../interfaces/input-data";

export const shippingInformation: InputData[] = [
    {
        title: 'Miasto',
        formControlName: 'city',
        required: false
    },
    {
        title: 'Ulica',
        formControlName: 'street',
        required: false
    },
    {
        title: 'Kod pocztowy',
        formControlName: 'zip-code',
        required: false
    }
]
