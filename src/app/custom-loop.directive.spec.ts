import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CustomLoopDirective } from './custom-loop.directive';
import {Component,TemplateRef,ViewContainerRef} from '@angular/core'
@Component({
  template: `<input type="text" *ngIf="isApply" appCustomLoop=6>`
})
class CustomLoopComponent {
}

describe('CustomLoopDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [CustomLoopComponent,CustomLoopDirective]
    });
});
  it('should create an instance', () => {
    let templateRef: TemplateRef<any>;
    let viewContainerRef: ViewContainerRef
    const directive = new CustomLoopDirective(templateRef,viewContainerRef
      );
    expect(directive).toBeTruthy();
  });
});
