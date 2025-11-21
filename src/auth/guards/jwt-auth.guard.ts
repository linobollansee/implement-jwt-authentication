// Import Injectable from NestJS
// Injectable von NestJS importieren
import { Injectable, ExecutionContext } from "@nestjs/common";

// Import AuthGuard from @nestjs/passport
// AuthGuard von @nestjs/passport importieren
import { AuthGuard } from "@nestjs/passport";

// Import Reflector to read metadata from routes
// Reflector importieren, um Metadaten von Routen zu lesen
import { Reflector } from "@nestjs/core";

// Import IS_PUBLIC_KEY constant
// IS_PUBLIC_KEY-Konstante importieren
import { IS_PUBLIC_KEY } from "../decorators/public.decorator";

// @Injectable - marks this class as a service that can be dependency-injected
// @Injectable - markiert diese Klasse als Service, der dependency-injected werden kann
@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  // Constructor - inject Reflector dependency
  // Konstruktor - Reflector-Abhängigkeit injizieren
  constructor(private reflector: Reflector) {
    super();
  }

  // canActivate - determines if a request should be allowed
  // canActivate - bestimmt, ob eine Anfrage erlaubt werden soll
  canActivate(context: ExecutionContext) {
    // Check if route is marked as public
    // Prüfen, ob Route als öffentlich markiert ist
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // If route is public, allow access without authentication
    // Wenn Route öffentlich ist, Zugriff ohne Authentifizierung erlauben
    if (isPublic) {
      return true;
    }

    // Otherwise, proceed with JWT authentication
    // Andernfalls mit JWT-Authentifizierung fortfahren
    return super.canActivate(context);
  }
}
