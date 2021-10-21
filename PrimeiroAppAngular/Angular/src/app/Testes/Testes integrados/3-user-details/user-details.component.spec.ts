/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { routes } from 'src/app/app-routing.module';
import { UserDetailsComponent } from './user-details.component';

class RouterStub{
  navigate(param: any){

  }
}

class ActivatedRouterStub{
  private subject = new Subject();

   public push(value: any){
    this.subject.next(value);
  }
  
  get params(){
    return this.subject.asObservable();
  }

  //params: Observable<any> = new Observable<any>();
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers:[
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouterStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve redirecionar o usuario depois de salvar', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');
    
    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it('Deve redirecionar o usuario para notfound', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');
    let route: ActivatedRouterStub = TestBed.get(ActivatedRoute);
    route.push({ id: 0 });

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });
});
