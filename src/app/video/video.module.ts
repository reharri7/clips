import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { UploadComponent } from './upload/upload.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class VideoModule { }
