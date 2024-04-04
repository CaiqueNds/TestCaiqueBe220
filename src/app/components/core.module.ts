import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditionalContentListComponent } from './additional-content-list/additional-content-list.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgramListComponent } from './program-list/program-list.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AdditionalContentListComponent,
    ContentListComponent,
    ProfileComponent,
    ProgramListComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    AdditionalContentListComponent,
    ContentListComponent,
    ProfileComponent,
    ProgramListComponent,
  ],
})
export class CoreModule {}
