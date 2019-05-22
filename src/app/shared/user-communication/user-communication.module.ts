import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BroadcastNotificationComponent } from './broadcast-notification/broadcast-notification.component';
import { ManualDocumentsComponent } from './manual-documents/manual-documents.component';
import { SendManualComponent } from './send-manual/send-manual.component';
// import { BroadcastnotificatioroadcastnotificationnComponent } from './broadcastnotificatioroadcastnotificationn/broadcastnotificatioroadcastnotificationn.component';

@NgModule({
  declarations: [BroadcastNotificationComponent, ManualDocumentsComponent, SendManualComponent],
  imports: [
    CommonModule,
    BroadcastNotificationComponent
  ]
})
export class UserCommunicationModule { }
