// Определяем ширину экрана с использованием BreakpointObserver Angular Material CDK
// https://material.angular.io/cdk/layout/overview

import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';


export type DevType = 'desktop' | 'mobile' | 'tablet';

@Injectable({
  providedIn: 'root'
})
export class DevTypeService {

  constructor(private _breakpointObserver: BreakpointObserver) { }

  public devType: DevType;

  public getDevType(): void { 
    this._breakpointObserver
    .observe(['(min-width: 1280px)','(min-width: 768px)'])
      .subscribe(
        (state: BreakpointState) => {
          if (state.breakpoints['(min-width: 1280px)']) {
            this.devType = 'desktop';
          } else if (state.breakpoints['(min-width: 768px)']) {
            this.devType = 'tablet';
          } else {
            this.devType = 'mobile';
          } 
        }
      );
  }
}
