import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { environment } from './../../../environments/environment';

export class ApiPrefixInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log(environment.api + request.url);
    const modifiedRequest = request.clone({
      url: environment.api + request.url
    });
    console.log(modifiedRequest);

    return next.handle(modifiedRequest);
  }
}
