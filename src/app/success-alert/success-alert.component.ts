import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-success-alert',
    template: '<div class="success-alert__wrapper"><p>Succsses</p></div>',
    styles: ['.success-alert__wrapper{background-color: #A8EDCF; color: #2D7053; border: 1px solid #2D7053; padding: 15px; text-align:center;} p{margin: 0; font-weight: bold}'] 

})

export class SuccessAlertComponent implements OnInit {
    constructor() {}

    ngOnInit(): void{}
}
