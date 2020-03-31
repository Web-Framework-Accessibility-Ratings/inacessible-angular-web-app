import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextAlternativesComponent } from './text-alternatives/text-alternatives.component';
import { InfoRelationshipsComponent } from './info-relationships/info-relationships.component';
import { MeaningfulSequenceComponent } from './meaningful-sequence/meaningful-sequence.component';
import { InputPurposeComponent } from './input-purpose/input-purpose.component';
import { IdentifyPurposeComponent } from './identify-purpose/identify-purpose.component';
import { UseOfColorComponent } from './use-of-color/use-of-color.component';
import { AudioControlComponent } from './audio-control/audio-control.component';
import { InsufficientColorContrastMinimumComponent } from './insufficient-color-contrast-minimum/insufficient-color-contrast-minimum.component';
import { TextResizeComponent } from './text-resize/text-resize.component';
import { ImageOfTextComponent } from './image-of-text/image-of-text.component';
import { ColorContrastEnhancedComponent } from './color-contrast-enhanced/color-contrast-enhanced.component';
import { VisualPresentationComponent } from './visual-presentation/visual-presentation.component';
import { NonTextContrastComponent } from './non-text-contrast/non-text-contrast.component';
import { TextSpacingComponent } from './text-spacing/text-spacing.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { KeyboardTrapComponent } from './keyboard-trap/keyboard-trap.component';
import { ShortcutComponent } from './shortcut/shortcut.component';
import { TimeAdjustableComponent } from './time-adjustable/time-adjustable.component';
import { PauseStopHideComponent } from './pause-stop-hide/pause-stop-hide.component';
import { BypassBlockComponent } from './bypass-block/bypass-block.component';
import { ThreeFlashesBelowThresholdComponent } from './three-flashes-below-threshold/three-flashes-below-threshold.component';
import { FocusOrderComponent } from './focus-order/focus-order.component';
import { LinkPurposeComponent } from './link-purpose/link-purpose.component';
import { HeadingsLabelsComponent } from './headings-labels/headings-labels.component';
import { LabelNameComponent } from './label-name/label-name.component';
import { PageLangComponent } from './page-lang/page-lang.component';
import { PartLangComponent } from './part-lang/part-lang.component';
import { OnInputComponent } from './on-input/on-input.component';
import { ConsistentNavigationComponent } from './consistent-navigation/consistent-navigation.component';
import { ConsistentIdentificationComponent } from './consistent-identification/consistent-identification.component';
import { ErrorIdentificationComponent } from './error-identification/error-identification.component';
import { LabelInstructionsComponent } from './label-instructions/label-instructions.component';
import { ParsingComponent } from './parsing/parsing.component';
import { NameRoleValueComponent } from './name-role-value/name-role-value.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    TextAlternativesComponent,
    InfoRelationshipsComponent,
    MeaningfulSequenceComponent,
    InputPurposeComponent,
    IdentifyPurposeComponent,
    UseOfColorComponent,
    AudioControlComponent,
    InsufficientColorContrastMinimumComponent,
    TextResizeComponent,
    ImageOfTextComponent,
    ColorContrastEnhancedComponent,
    VisualPresentationComponent,
    NonTextContrastComponent,
    TextSpacingComponent,
    KeyboardComponent,
    KeyboardTrapComponent,
    ShortcutComponent,
    TimeAdjustableComponent,
    PauseStopHideComponent,
    BypassBlockComponent,
    ThreeFlashesBelowThresholdComponent,
    FocusOrderComponent,
    LinkPurposeComponent,
    HeadingsLabelsComponent,
    LabelNameComponent,
    PageLangComponent,
    PartLangComponent,
    OnInputComponent,
    ConsistentNavigationComponent,
    ConsistentIdentificationComponent,
    ErrorIdentificationComponent,
    LabelInstructionsComponent,
    ParsingComponent,
    NameRoleValueComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
