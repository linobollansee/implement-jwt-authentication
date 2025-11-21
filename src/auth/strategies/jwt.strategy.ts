// Import Injectable from NestJS
// Injectable von NestJS importieren
import { Injectable } from "@nestjs/common";

// Import PassportStrategy to create authentication strategy
// PassportStrategy importieren, um Authentifizierungsstrategie zu erstellen
import { PassportStrategy } from "@nestjs/passport";

// Import Strategy and ExtractJwt from passport-jwt
// Strategy und ExtractJwt von passport-jwt importieren
import { ExtractJwt, Strategy } from "passport-jwt";

// @Injectable - marks this class as a service that can be dependency-injected
// @Injectable - markiert diese Klasse als Service, der dependency-injected werden kann
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  // Constructor - configure JWT strategy
  // Konstruktor - JWT-Strategie konfigurieren
  constructor() {
    super({
      // Extract JWT from Authorization header as Bearer token
      // JWT aus Authorization-Header als Bearer-Token extrahieren
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // Don't ignore token expiration
      // Token-Ablauf nicht ignorieren
      ignoreExpiration: false,
      // Secret key for verifying JWT signature (should match auth.module.ts)
      // Geheimer Schlüssel zur Überprüfung der JWT-Signatur (sollte mit auth.module.ts übereinstimmen)
      secretOrKey: "your-secret-key-change-in-production", // TODO: Move to environment variable
    });
  }

  // validate - called by Passport after JWT is verified
  // validate - wird von Passport aufgerufen, nachdem JWT verifiziert wurde
  async validate(payload: any) {
    // Return user information from JWT payload including role
    // Benutzerinformationen aus JWT-Payload einschließlich Rolle zurückgeben
    // This will be attached to request.user
    // Dies wird an request.user angehängt
    return { userId: payload.sub, email: payload.email, role: payload.role };
  }
}
