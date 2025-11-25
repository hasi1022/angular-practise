import { Component } from "@angular/core";
import { Directive2Component } from "./directive2.directive";
@Component({
    selector:'app-directive2',
    standalone:true,
    imports:[Directive2Component],
    templateUrl:'./directive2.component.html'
})
export class directive2directive{}