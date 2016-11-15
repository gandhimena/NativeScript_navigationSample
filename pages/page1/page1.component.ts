import { Component} from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "page1",
    templateUrl: "./pages/page1/page1.html",
    //styleUrls:[""],
})

export class Page1Component{
    
    public constructor (private router: Router){}
    
    public goToPage2(){
        this.router.navigate(["/page2"]);
    }
}
