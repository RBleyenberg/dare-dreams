import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppValidators } from '@validators/app.validator';
import { RelationType } from '@state/relationTypes/relationType.interface';
import { Subject } from 'rxjs/Subject';
import { debounceTime, skip, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-relationType-form',
  templateUrl: './relationType-form.component.html',
  styleUrls: ['./relationType-form.component.scss']
})
export class RelationTypeFormComponent implements OnChanges, OnDestroy {
  formGroup: FormGroup;
  @Input() relationType: RelationType;
  @Input() showErrors: boolean;
  @Output() relationTypeChange = new EventEmitter<{ relationType: RelationType; valid: boolean }>();

  private destroyed$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['relationType'] && changes['relationType'].currentValue) {
      this.formGroup.patchValue(this.relationType);
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
      this.relationTypeChange.emit({
        relationType: value,
        valid: this.formGroup.valid
      });
    });
  }
}
