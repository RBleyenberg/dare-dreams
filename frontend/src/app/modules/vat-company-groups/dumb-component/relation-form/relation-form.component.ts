import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppValidators } from '@validators/app.validator';
import { Relation } from '@state/relations/relation.interface';
import { Subject } from 'rxjs/Subject';
import { debounceTime, skip, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-relation-form',
  templateUrl: './relation-form.component.html',
  styleUrls: ['./relation-form.component.scss']
})
export class RelationFormComponent implements OnChanges, OnDestroy {
  formGroup: FormGroup;
  @Input() relation: Relation;
  @Input() showErrors: boolean;
  @Output() relationChange = new EventEmitter<{ relation: Relation; valid: boolean }>();

  private destroyed$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['relation'] && changes['relation'].currentValue) {
      this.formGroup.patchValue(this.relation);
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
      this.relationChange.emit({
        relation: value,
        valid: this.formGroup.valid
      });
    });
  }
}
