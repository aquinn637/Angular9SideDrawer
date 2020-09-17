import { Injectable } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';

@Injectable({
    providedIn: 'root'
})
export class SideDrawerService {

    constructor(private router: Router) {

        this.router.events.subscribe((event: RouterEvent) => {
            if (event instanceof NavigationStart) {
                this.closeDrawer();
            }
        });

    }

    public showSideDrawer(): void {
        const sideDrawer: RadSideDrawer = app.getRootView() as RadSideDrawer;
        sideDrawer.showDrawer();
    }

    public closeDrawer(callback?: Function): void {

        const sideDrawer: RadSideDrawer = app.getRootView() as RadSideDrawer;

        if (sideDrawer == null || !sideDrawer.getIsOpen()) {
            return;
        }

        if (callback != null) {
            callback = zonedCallback(callback);
            sideDrawer.once(RadSideDrawer.drawerClosingEvent, () => {
                callback();
            });
        }

        sideDrawer.closeDrawer();
    }

}
