import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatChipsModule,
  MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule,
  MatSidenavModule, MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatMenuModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTableModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatMenuModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTableModule
  ],
})
export class MaterialModule { }
