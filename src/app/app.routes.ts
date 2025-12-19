import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { TreedropComponent } from './treedrop/treedrop.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'dashboard'
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'treedrop',
                component: TreedropComponent,
                title: 'TreeDrop'
            }
        ]
    }
];
