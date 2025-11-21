// Import Injectable and UnauthorizedException from NestJS
// Injectable und UnauthorizedException von NestJS importieren
import { Injectable, UnauthorizedException } from "@nestjs/common";

// Import PassportStrategy to create authentication strategy
// PassportStrategy importieren, um Authentifizierungsstrategie zu erstellen
import { PassportStrategy } from "@nestjs/passport";

// Import Strategy from passport-local for username/password authentication
// Strategy von passport-local für Benutzername/Passwort-Authentifizierung importieren
import { Strategy } from "passport-local";

// Import AuthService for user validation
// AuthService für Benutzervalidierung importieren
import { AuthService } from "../auth.service";

// Import User entity
// User-Entity importieren
import { User } from "../../users/entities/user.entity";

// @Injectable - marks this class as a service that can be dependency-injected
// @Injectable - markiert diese Klasse als Service, der dependency-injected werden kann
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  // Constructor - inject AuthService dependency
  // Konstruktor - AuthService-Abhängigkeit injizieren
  constructor(private authService: AuthService) {
    // Configure strategy to use 'email' field instead of 'username'
    // Strategie konfigurieren, um 'email'-Feld anstelle von 'username' zu verwenden
    super({
      usernameField: "email", // Use 'email' field from request body
      passwordField: "password", // Use 'password' field from request body
    });
  }

  // validate - called by Passport to validate user credentials
  // validate - wird von Passport aufgerufen, um Benutzeranmeldeinformationen zu validieren
  async validate(email: string, password: string): Promise<User> {
    // Validate user credentials using AuthService
    // Benutzeranmeldeinformationen mit AuthService validieren
    const user = await this.authService.validateUser(email, password);

    // If validation fails, throw UnauthorizedException
    // Wenn Validierung fehlschlägt, UnauthorizedException werfen
    if (!user) {
      throw new UnauthorizedException("Invalid email or password");
    }

    // If validation succeeds, return user (will be attached to request object)
    // Wenn Validierung erfolgreich, Benutzer zurückgeben (wird an Request-Objekt angehängt)
    return user;
  }
}
