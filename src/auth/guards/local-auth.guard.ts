// Import Injectable from NestJS
// Injectable von NestJS importieren
import { Injectable } from "@nestjs/common";

// Import AuthGuard from @nestjs/passport
// AuthGuard von @nestjs/passport importieren
import { AuthGuard } from "@nestjs/passport";

// @Injectable - marks this class as a service that can be dependency-injected
// @Injectable - markiert diese Klasse als Service, der dependency-injected werden kann
@Injectable()
export class LocalAuthGuard extends AuthGuard("local") {
  // This guard uses the 'local' strategy defined in local.strategy.ts
  // Dieser Guard verwendet die 'local'-Strategie, die in local.strategy.ts definiert ist
  // When applied to a route (typically /login), it will:
  // Wenn auf eine Route angewendet (normalerweise /login), wird er:
  // 1. Extract email and password from request body
  // 1. E-Mail und Passwort aus Request-Body extrahieren
  // 2. Call LocalStrategy.validate() to verify credentials
  // 2. LocalStrategy.validate() aufrufen, um Anmeldeinformationen zu überprüfen
  // 3. Attach user to request.user if valid
  // 3. Benutzer an request.user anhängen, wenn gültig
  // 4. Throw UnauthorizedException if invalid
  // 4. UnauthorizedException werfen, wenn ungültig
}
