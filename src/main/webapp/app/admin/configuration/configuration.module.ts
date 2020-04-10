import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorkfosterSampleApplicationSharedModule } from 'app/shared/shared.module';

import { ConfigurationComponent } from './configuration.component';

import { configurationRoute } from './configuration.route';

@NgModule({
  imports: [WorkfosterSampleApplicationSharedModule, RouterModule.forChild([configurationRoute])],
  declarations: [ConfigurationComponent]
})
export class ConfigurationModule {}
