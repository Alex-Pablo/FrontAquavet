import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./public/public.routes').then( m => m.PUBLIC_ROUTES),
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then( m => m.AUTH_ROUTES),
    },
    {
        path:'catalogo',
        loadChildren: () => import('./private/private.routes').then( m => m.PUBLIC_ROUTES),
        canActivate:[authGuard]
    }
];
