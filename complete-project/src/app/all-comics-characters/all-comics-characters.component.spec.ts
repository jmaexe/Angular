import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComicsCharactersComponent } from './all-comics-characters.component';

describe('AllComicsCharactersComponent', () => {
  let component: AllComicsCharactersComponent;
  let fixture: ComponentFixture<AllComicsCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllComicsCharactersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllComicsCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
