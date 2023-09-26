import {Step} from "../interfaces/step";

export const steps: Step[] = [

  {
    stepNumber: 1,
    stepName: 'Wybierz miejsca',
    status: 'done',
    current: false
  },
  {
    stepNumber: 2,
    stepName: 'Dane adresowe',
    status: 'done',
    current: false
  },
  {
    stepNumber: 3,
    stepName: 'Płatnośc',
    status: 'active',
    current: true
  },
  {
    stepNumber: 4,
    stepName: 'Podsumowanie',
    status: 'disabled',
    current: false
  },
]
