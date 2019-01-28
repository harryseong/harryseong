import {NgModule} from '@angular/core';

import {OverlayModule} from '@angular/cdk/overlay';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {PortalModule} from '@angular/cdk/portal';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule,
  MatGridListModule,
  MatCommonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatSnackBarModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  MatTableModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatSliderModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatChipsModule,
  MatTabsModule,
  MatStepperModule,
  MatIconModule,
} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';

const materialModules = [
  OverlayModule,
  PortalModule,
  BidiModule,
  A11yModule,
  ObserversModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
  MatGridListModule,
  MatCommonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatSnackBarModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  MatTableModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatSliderModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatChipsModule,
  MatTabsModule,
  MatStepperModule,
  MatIconModule,
  DragDropModule,
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
})
export class MaterialModule {}
