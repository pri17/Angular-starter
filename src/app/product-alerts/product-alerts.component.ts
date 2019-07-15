import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'app-pro-alerts',
    templateUrl:'./product-alerts.component.html'
})

export class ProAlertComponent implements OnInit{

    @Input() product;
    @Output() notify = new EventEmitter();

    constructor(){}

    ngOnInit(){}
}