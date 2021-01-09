import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogwowComponent } from './blogwow.component';

describe('BlogwowComponent', () => {
  let component: BlogwowComponent;
  let fixture: ComponentFixture<BlogwowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogwowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogwowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
