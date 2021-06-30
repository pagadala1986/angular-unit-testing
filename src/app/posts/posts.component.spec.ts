import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import {  PostsComponent } from './posts.component';
import { PostsService } from '../posts.service';
import * as Rx from 'rxjs';
import { delay } from "rxjs/operators";


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        PostsComponent
      ],
      providers : [
        PostsService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PostsComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    const fixture = TestBed.createComponent(PostsComponent);
    const component = fixture.debugElement.componentInstance;
    let spy_getPostDetails = spyOn(component,"getPostDetails").and.returnValue([]);
    component.ngOnInit();
    expect(component.postDetails).toEqual([]);
  })

  it('should call getPostDetails and get response as empty array', fakeAsync(() => {
    const fixture = TestBed.createComponent(PostsComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(PostsService);
    let spy_getPosts = spyOn(service,"getPosts").and.callFake(() => {
      return Rx.of([]).pipe(delay(100));
    });
    component.getPostDetails();
    tick(100);
    expect(component.postDetails).toEqual([]);
  }))

  it('should call getPostDetails and get response as array', fakeAsync(() => {
    const fixture = TestBed.createComponent(PostsComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(PostsService);
    let spy_getPosts = spyOn(service,"getPosts").and.callFake(() => {
      return Rx.of([{postId : 100}]).pipe(delay(2000));
    });
    component.getPostDetails();
    tick(1000);
    expect(component.showLoadingIndicator).toEqual(true);
    tick(1000);
    expect(component.showLoadingIndicator).toEqual(false);
    expect(component.postDetails).toEqual([{postId : 100}]);
  }))

});
