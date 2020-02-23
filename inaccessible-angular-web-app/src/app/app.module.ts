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

@NgModule({
  declarations: [
    AppComponent,
    TextAlternativesComponent,
    InfoRelationshipsComponent,
    MeaningfulSequenceComponent,
    InputPurposeComponent,
    IdentifyPurposeComponent,
    UseOfColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
