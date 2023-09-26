import {Component, ElementRef, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {clientInformation} from "../../data/clientInformation";
import {shippingInformation} from "../../data/shippingInformation";
import {cardPayment} from "../../data/cardPayment";

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {


    paymentsForm!: FormGroup;
    paymentType = 'creditCard'
    clientInformation = clientInformation
    shippingInformation = shippingInformation
    cardPayment = cardPayment
    cardNumberCardPerson = this.cardPayment.filter(item => item.formControlName === 'cardNumber' || item.formControlName === 'cardHolder')
    cardDateCW = this.cardPayment.filter(item => item.formControlName === 'expiredDate' || item.formControlName === 'CWCVC')

    ngOnInit(): void {
        this.paymentsForm = new FormGroup(
            {
                'lastName': new FormControl('', [
                    Validators.required]),
                'firstName': new FormControl('', [
                    Validators.required]),
                'phoneNumber': new FormControl(''),
                'email': new FormControl('')
            }
        )
    }

    changePaymentType(paymentType: string) {
        this.paymentType = paymentType
    }
}
