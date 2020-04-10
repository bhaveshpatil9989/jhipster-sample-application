import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorkfosterSampleApplicationSharedModule } from 'app/shared/shared.module';

import { LogsComponent } from './logs.component';

import { logsRoute } from './logs.route';

@NgModule({
  imports: [WorkfosterSampleApplicationSharedModule, RouterModule.forChild([logsRoute])],
  declarations: [LogsComponent]
})
export class LogsModule {}
