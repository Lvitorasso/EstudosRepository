import { routes } from './app-routing.module';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain('Angular app is running!');
  });

  it('deve ter o router outlet', () =>
  {
    const fixture = TestBed.createComponent(AppComponent);
    let de = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(de).not.toBeNull();

  })

  it('deve ter o link para todos', () => {      
    const fixture = TestBed.createComponent(AppComponent);
    let t = fixture.debugElement.query(By.css('a')).attributes;

    
    let de = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    let index = de.findIndex(de => de.attributes['routerLink'] === '/todos');

    expect(index).toBeGreaterThan(-1);
  })
});
