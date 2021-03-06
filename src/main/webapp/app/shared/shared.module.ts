import { NgModule } from '@angular/core';
import { WorkfosterSampleApplicationSharedLibsModule } from './shared-libs.module';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

@NgModule({
  imports: [WorkfosterSampleApplicationSharedLibsModule],
  declarations: [AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective],
  exports: [WorkfosterSampleApplicationSharedLibsModule, AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective]
})
export class WorkfosterSampleApplicationSharedModule {}
