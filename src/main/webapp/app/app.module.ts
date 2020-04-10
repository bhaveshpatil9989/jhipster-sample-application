import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { WorkfosterSampleApplicationSharedModule } from 'app/shared/shared.module';
import { WorkfosterSampleApplicationCoreModule } from 'app/core/core.module';
import { WorkfosterSampleApplicationAppRoutingModule } from './app-routing.module';
import { WorkfosterSampleApplicationHomeModule } from './home/home.module';
import { WorkfosterSampleApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    WorkfosterSampleApplicationSharedModule,
    WorkfosterSampleApplicationCoreModule,
    WorkfosterSampleApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    WorkfosterSampleApplicationEntityModule,
    WorkfosterSampleApplicationAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class WorkfosterSampleApplicationAppModule {}
