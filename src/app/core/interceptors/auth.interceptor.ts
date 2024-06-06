import {  HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  if (sessionStorage.getItem('CurrentUser')) {
    const authToken = JSON.parse(sessionStorage.getItem('CurrentUser') || '');
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return next(authReq);
  }
  return next(req);
};
