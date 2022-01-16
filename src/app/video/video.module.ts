import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { UploadComponent } from './upload/upload.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { SafeURLPipe } from './pipes/safe-url.pipe';

@NgModule({
  declarations: [
    UploadComponent,
    EditComponent,
    SafeURLPipe,

  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports:[
    EditComponent
  ]
})
export class VideoModule { }
