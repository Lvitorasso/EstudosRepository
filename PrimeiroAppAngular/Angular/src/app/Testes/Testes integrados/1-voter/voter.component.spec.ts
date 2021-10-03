import { componentFactoryName } from '@angular/compiler';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VoterComponent } from './voter.component';


describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
  });

  it('deve carregar o total de votos', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.vote-count'));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('21');
  });

  it('deve deixar como highlight se votado', () => {
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    
    expect(de.classes['highlighted']).toBeTruthy();
  });

  it('deve aumentar o total de votos quando clicado', () => {
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.totalVotes).toBeGreaterThan(0);
  });
});
