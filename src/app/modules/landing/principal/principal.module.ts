import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { PrincipalComponent } from 'app/modules/landing/principal/principal.component';
import { PrincipalRoutes } from 'app/modules/landing/principal/principal.routing';

@NgModule({
    declarations: [
        PrincipalComponent
    ],
    imports     : [
        RouterModule.forChild(PrincipalRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule
    ]
})
export class LandingHomeModule
{
}
