import { Injectable, NgZone } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Injectable({
    providedIn: 'root'
})
export class SideDrawerService {

    drawer: RadSideDrawer;

    constructor(private router: Router, private ngZone: NgZone) {

        this.router.events.subscribe((event: RouterEvent) => {
            if (event instanceof NavigationStart) {
                this.closeDrawer();
            }
        });

    }

    public showSideDrawer(): void {
        this.drawer.showDrawer();
    }

    public closeDrawer(callback?: Function): void {

        if (this.drawer == null || !this.drawer.getIsOpen()) {
            return;
        }

        if (callback != null) {
          this.drawer.once(RadSideDrawer.drawerClosingEvent, () => {
              if (callback) {
                this.ngZone.run(() => {
                  callback();
                });
              }
            });
        }

        this.drawer.closeDrawer();
    }

}
