import { MaterialModule } from './../shared/material.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainerComponent } from './container/dashboard-container/dashboard-container.component';
import { ProfileCardComponent } from './presenter/profile-card/profile-card.component';
import { DashboardOverviewComponent } from './presenter/tabs/dashboard-overview/dashboard-overview.component';
import { DashboardInventoryComponent } from './presenter/tabs/dashboard-inventory/dashboard-inventory.component';
import { DashboardServicesComponent } from './presenter/tabs/dashboard-services/dashboard-services.component';
import { DashboardContractorsComponent } from './presenter/tabs/dashboard-contractors/dashboard-contractors.component';


@NgModule({
  declarations: [DashboardContainerComponent, ProfileCardComponent, DashboardOverviewComponent, DashboardInventoryComponent, DashboardServicesComponent, DashboardContractorsComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
