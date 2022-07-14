import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsUploaderComponent } from './docs-uploader.component';

describe('DocsUploaderComponent', () => {
  let component: DocsUploaderComponent;
  let fixture: ComponentFixture<DocsUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
