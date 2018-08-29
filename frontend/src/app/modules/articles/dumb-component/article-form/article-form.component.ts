import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppValidators } from '@validators/app.validator';
import { Article } from '@state/articles/article.interface';
import { Subject } from 'rxjs/Subject';
import { debounceTime, skip, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnChanges, OnDestroy {
  formGroup: FormGroup;
  @Input() article: Article;
  @Input() showErrors: boolean;
  @Output() articleChange = new EventEmitter<{ article: Article; valid: boolean }>();

  private destroyed$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['article'] && changes['article'].currentValue) {
      this.formGroup.patchValue(this.article);
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
      this.articleChange.emit({
        article: value,
        valid: this.formGroup.valid
      });
    });
  }
}
