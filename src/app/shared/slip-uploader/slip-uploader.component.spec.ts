import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlipUploaderComponent } from './slip-uploader.component';

describe('SlipUploaderComponent', () => {
  let component: SlipUploaderComponent;
  let fixture: ComponentFixture<SlipUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlipUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlipUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
