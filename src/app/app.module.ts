import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from '@components/header/header.component';
import { UserSelectionComponent } from '@components/user-selection/user-selection.component';
import { MessageSelectionComponent } from '@components/message-selection/message-selection.component';
import { ThreadSelectionComponent } from '@components/thread-selection/thread-selection.component';
import { ThreadListComponent } from '@components/thread-list/thread-list.component';
import { MessageListComponent } from '@components/message-list/message-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserSelectionComponent,
    MessageSelectionComponent,
    ThreadSelectionComponent,
    ThreadListComponent,
    MessageListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
