import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class counterServices{
     value=0;
     inc(){this.value++}
     dec(){this.value--}
     reset(){this.value=0}
}
@Injectable({providedIn:'root'})
export class localcounterServices{
     value=0;
     inc(){this.value++}
     dec(){this.value--}
     reset(){this.value=0}
}