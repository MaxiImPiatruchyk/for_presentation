import {Component} from '@angular/core';
import {steps} from '../../data/steps'


@Component({
    selector: 'app-wizard-step-bar',
    templateUrl: './wizard-step-bar.component.html',
    styleUrls: ['./wizard-step-bar.component.scss']
})
export class WizardStepBarComponent {
    steps = steps
}
