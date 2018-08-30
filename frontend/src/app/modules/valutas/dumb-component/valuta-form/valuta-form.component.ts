import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppValidators } from '@validators/app.validator';
import { Valuta } from '@state/valutas/valuta.interface';
import { Subject } from 'rxjs/Subject';
import { debounceTime, skip, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-valuta-form',
  templateUrl: './valuta-form.component.html',
  styleUrls: ['./valuta-form.component.scss']
})
export class ValutaFormComponent implements OnChanges, OnDestroy {
  formGroup: FormGroup;
  @Input() valuta: Valuta;
  @Input() showErrors: boolean;
  @Output() valutaChange = new EventEmitter<{ valuta: Valuta; valid: boolean }>();

  private destroyed$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['valuta'] && changes['valuta'].currentValue) {
      this.formGroup.patchValue(this.valuta);
    }
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      price: ['', Validators.required, AppValidators.validateCurrency]
    });

    this.formGroup.valueChanges.pipe(takeUntil(this.destroyed$), skip(1), debounceTime(500)).subscribe(value => {
      this.valutaChange.emit({
        valuta: value,
        valid: this.formGroup.valid
      });
    });
  }
}
