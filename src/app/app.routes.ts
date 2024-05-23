import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./public/public.routes').then( m => m.PUBLIC_ROUTES)
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then( m => m.AUTH_ROUTES)
    }
];
