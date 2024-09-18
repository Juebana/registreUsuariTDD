import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let compiled:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled=fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Has title SignUp', () => {
    expect(compiled.querySelector('h1')?.textContent).toBe('Sign Up');
  });

  it('Has label for Username', () => {
    expect(getNthLabelContent(0)).toBe('Username:');
  });

  it('Has label for Email', () => {
    expect(getNthLabelContent(1)).toBe('Email:');
  });

  it('Has label for Password', () => {
    expect(getNthLabelContent(2)).toBe('Password:');
  });

  function getNthLabelContent(index:number){
    return compiled.querySelectorAll('label')[index]?.textContent;
  };
});
