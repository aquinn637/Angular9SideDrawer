import { Component, OnInit } from '@angular/core';
import { SideDrawerService } from './side-drawer.service';

@Component({
    selector: 'ns-side-drawer',
    templateUrl: './side-drawer.component.html'
})
export class SideDrawerComponent implements OnInit {

    constructor(private sideDrawerService: SideDrawerService) { }

    public ngOnInit(): void { }

    public close() {
        this.sideDrawerService.closeDrawer();
    }

}
