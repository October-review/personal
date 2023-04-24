import { Component, Input, Output, EventEmitter, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'onesource-dashboard-card',
  templateUrl: 'dashcard.html',
  styleUrls: ['dashcard.component.scss'],
})
export class Dashcard {



  @Input()
  padding: '24px' | '32px' | '16px' | '40px' | '60px' = '24px';
  

  
  @Input()
  Text: string = 'Empty Dashcard';



  public get cardclass(): string[] {
    let style='';

    if(this.padding == '24px'){
      style= "os-card";
      }
     if(this.padding == '32px'){
       style= "os-card2";
       }
       if(this.padding == '16px'){
        style= "os-card3";
        }
        if(this.padding == '40px'){
          style= "os-card4";
          }
          if(this.padding == '60px'){
            style= "os-card5";
            }
       return [ style ]

  }



}



