import { Component } from "@angular/core";
import { SideDrawerService } from "./home/side-drawer/side-drawer.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent { 

  constructor(
    private sideDrawerService: SideDrawerService
  ) {

  }

  loadedDrawer(args) {
    this.sideDrawerService.drawer = args.object;
  }
}
