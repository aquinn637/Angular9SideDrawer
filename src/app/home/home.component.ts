import { Component, OnInit } from "@angular/core";
import { SideDrawerService } from "./side-drawer/side-drawer.service";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(private sideDrawerService: SideDrawerService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    public open() {
        this.sideDrawerService.showSideDrawer();
    }

}
