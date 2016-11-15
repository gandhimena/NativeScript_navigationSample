import { Page1Component } from "./pages/page1/page1.component";
import { Page2Component} from "./pages/page2/page2.component";


export const appRoutes: any = [
    {path:"" , component:Page1Component},
    {path:"page2" , component:Page2Component}
];

export const appComponents: any = [
    Page1Component,
    Page2Component
];

