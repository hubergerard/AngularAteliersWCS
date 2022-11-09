import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KittenFormComponent } from './kitten-form/kitten-form.component';
import { KittenListComponent } from './kitten-list/kitten-list.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { KittenDisplayComponent } from './kitten-display/kitten-display.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    KittenFormComponent,
    KittenListComponent,
    UserKittenComponent,
    KittenDisplayComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
