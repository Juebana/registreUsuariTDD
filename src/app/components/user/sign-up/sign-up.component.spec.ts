import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';

let component: SignUpComponent;
let fixture: ComponentFixture<SignUpComponent>;
let compiled:HTMLElement;

function getNthLabelContent(index:number){
  return compiled.querySelectorAll('label')[index];
};

function getInputFromLabel(index:number){
  return getNthLabelContent(index)!.querySelector("input");
};

describe('SignUpComponent', () => {

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
    expect(getNthLabelContent(0).textContent).toBe('Username: ');
  });

  it('Has label for Email', () => {
    expect(getNthLabelContent(1).textContent).toBe('Email: ');
  });

  it('Has label for Password', () => {
    expect(getNthLabelContent(2).textContent).toBe('Password: ');
  });

  it('Has label for Language', () => {
    expect(getNthLabelContent(3).textContent).toContain('Language: ');
  });

  it('Has input of type text for Username', () => {
    const inputUserName:HTMLInputElement|null = (getInputFromLabel(0));
    expect(inputUserName!.getAttribute('type')).toBe('text');
  });

  it('Has input of type text for Email', () => {
    const inputUserName:HTMLInputElement|null = (getInputFromLabel(1));
    expect(inputUserName!.getAttribute('type')).toBe('text');
  });

  it('Has input of type password for Password', () => {
    const inputPassword:HTMLInputElement|null = (getInputFromLabel(2));
    expect(inputPassword!.getAttribute('type')).toBe('password');
  });

  it('Has select tag for language', () => {
    const selectLanguage:HTMLSelectElement|null = getNthLabelContent(3)!.querySelector('select');
    expect(selectLanguage).toBeTruthy();
  });

  it('Language avariable: frances, angles, italia, catala, castella. Ordenats', () => {
    const languages=['français', 'anglais', 'italien', 'catalan', 'castellano'].sort();
    const selectLanguage:HTMLSelectElement = getNthLabelContent(3)!.querySelector('select')!;
    expect(selectLanguage?.options.length).toBe(languages.length);
    let index=0;
    languages.forEach(
      language => {
        expect(selectLanguage.options[index].value).toBe(language);
        index++;
      }
    )
  });

});

describe('buttonComponent', () => {
  
  it('Has button Sign Up', () => {
    const buttonSignUp:HTMLButtonElement|null = compiled.querySelector('button');
    expect(buttonSignUp).toBeTruthy();
    expect(buttonSignUp?.textContent).toBe('Sign Up');
  });
  
})