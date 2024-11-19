import { ForbiddenException, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (req.headers['x-myheader'] !== process.env.MY_SECRET_KEY) {
      throw new ForbiddenException();
    }
    next();
  }
}
