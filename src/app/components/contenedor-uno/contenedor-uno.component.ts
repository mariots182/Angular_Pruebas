import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-contenedor-uno',
  templateUrl: './contenedor-uno.component.html',
  styleUrls: ['./contenedor-uno.component.scss'],
})
export class ContenedorUnoComponent implements OnInit {
  @ViewChild('button') button: any;
  @Input() nombre: string = '';
  @Output() saludo = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  saludar(persona: string) {
    console.log(this.button);
    console.log(this.button.nativeElement.innerText);
    // console.log(this.button.nativeElement.click);
    this.saludo.emit('Hola mundo' + persona);
  }
}
