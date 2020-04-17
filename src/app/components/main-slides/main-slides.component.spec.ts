import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainSlidesComponent } from './main-slides.component';
import { MainCardsComponent } from './../main-cards/main-cards.component';

describe('MainSlidesComponent', () => {
  let component: MainSlidesComponent;
  let fixture: ComponentFixture<MainSlidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainSlidesComponent, MainCardsComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
