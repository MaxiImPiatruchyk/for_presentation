import {InputData} from "../interfaces/input-data";

export const clientInformation:InputData[] = [
    {
        title: 'Nazwisko',
        formControlName: 'lastName',
        required: true
    },
    {
        title: 'Imię',
        formControlName: 'firstName',
        required: true
    },
    {
        title: 'Numer telefonu',
        formControlName: 'phoneNumber',
        required: false
    },
    {
        title: 'E-mail',
        formControlName: 'email',
        required: false
    }
]
