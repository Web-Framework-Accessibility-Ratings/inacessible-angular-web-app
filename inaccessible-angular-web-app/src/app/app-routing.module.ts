import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextAlternativesComponent } from './text-alternatives/text-alternatives.component';
import { InfoRelationshipsComponent } from './info-relationships/info-relationships.component';
import { MeaningfulSequenceComponent } from './meaningful-sequence/meaningful-sequence.component';
import { InputPurposeComponent } from './input-purpose/input-purpose.component';
import { IdentifyPurposeComponent } from './identify-purpose/identify-purpose.component';
import { UseOfColorComponent } from './use-of-color/use-of-color.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
