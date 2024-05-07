// Определяем ширину экрана с использованием BreakpointObserver Angular Material CDK
// https://material.angular.io/cdk/layout/overview

import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';


export type DevType = 'desktop' | 'mobile' | 'tablet';

@Injectable({
  providedIn: 'root'
})
export class DevTypeService {

  constructor(private _breakpointObserver: BreakpointObserver) { }

  public getDevType(): DevType {  
    if (this._breakpointObserver.isMatched('(min-width: 1280px)')) {
      return 'desktop';
    } else if (this._breakpointObserver.isMatched('(min-width: 768px)')) {
      return 'tablet';
    } else {
      return 'mobile';
    }
  }
  
}
