import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-prueba';
  prueba = 'Hola mundo';
  loginForm: FormGroup;
  personasList: any[] = [
    { nombre: 'Juan', edad: '20' },
    { nombre: 'Pedro', edad: '30' },
    { nombre: 'Maria', edad: '40' },
  ];

  inputList: any[] = [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Ingrese su email',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Ingrese su password',
    },
  ];

  switchPersona = 2;
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        // Validators.pattern(''),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    this.loginForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
  ngDoCheck() {}
  ngOnInit() {
    console.log('init');
  }

  ngAfterViewInit() {
    console.log('after view init');
  }

  ngAfterViewChecked() {
    console.log('after view checked');
  }

  ngAfterContentChecked() {
    console.log('after content checked');
  }

  ngAfterContentInit() {
    console.log('after content init');
  }

  ngOnDestroy() {
    console.log('destroy');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      alert(1);
    } else {
      alert(2);
    }
  }

  saludoPadre(ev: any) {
    console.log(ev);
  }
}
