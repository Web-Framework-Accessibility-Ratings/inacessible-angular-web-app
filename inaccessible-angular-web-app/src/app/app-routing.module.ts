import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
    path: "textAlternatives",
    component: TextAlternativesComponent
  },
  {
    path: "infoRelationship",
    component: InfoRelationshipsComponent
  },
  {
    path: "meaningfulSequence",
    component: MeaningfulSequenceComponent
  },
  {
    path: "inputPurpose",
    component: InputPurposeComponent
  },
  {
    path: 'identifyPurpose',
    component: IdentifyPurposeComponent
  },
  {
    path: 'useOfColor',
    component: UseOfColorComponent
  },
  {
    path: 'audioControl',
    component: AudioControlComponent
  },
  {
    path: 'colorContrastMinimum',
    component: InsufficientColorContrastMinimumComponent
  },
  {
    path: 'textResize',
    component: TextResizeComponent
  },
  {
    path: 'imageOfText',
    component: ImageOfTextComponent
  },
  {
    path: 'colorContrastEnhanced',
    component: ColorContrastEnhancedComponent
  },
  {
    path: 'visualPresentation',
    component: VisualPresentationComponent
  },
  {
    path: 'nonTextContrast',
    component: NonTextContrastComponent
  },
  {
    path: 'textSpacing',
    component: TextSpacingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
