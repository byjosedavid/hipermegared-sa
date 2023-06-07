import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  public form: FormGroup;

  public constructor(public fabricaDatos: FormBuilder) {
    this.form = this.initForm();
  }
  public initForm(): FormGroup {
    return this.fabricaDatos.group({
      nombre: ['Manuel'],
      descripcion: [''],
      precio: [''],
      fechaEntrada: [''],
      motivoDevolucion: [''],
      volumenOcupado: [''],
    });
  }
  public submit(): void {}
}
