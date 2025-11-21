// Import decorators from NestJS
// Dekoratoren von NestJS importieren
import { Controller, Post, UseGuards, Request } from "@nestjs/common";

// Import AuthService for authentication logic
// AuthService für Authentifizierungslogik importieren
import { AuthService } from "./auth.service";

// Import LocalAuthGuard for login route protection
// LocalAuthGuard für Login-Route-Schutz importieren
import { LocalAuthGuard } from "./guards/local-auth.guard";

// @Controller decorator - defines the base route "/auth"
// @Controller-Dekorator - definiert die Basis-Route "/auth"
@Controller("auth")
export class AuthController {
  // Constructor - inject AuthService dependency
  // Konstruktor - AuthService-Abhängigkeit injizieren
  constructor(private authService: AuthService) {}

  // @Post("login") - handles POST requests to /auth/login
  // @Post("login") - behandelt POST-Anfragen an /auth/login
  // @UseGuards - applies LocalAuthGuard to validate credentials
  // @UseGuards - wendet LocalAuthGuard an, um Anmeldeinformationen zu validieren
  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@Request() req) {
    // LocalAuthGuard has already validated credentials and attached user to req.user
    // LocalAuthGuard hat bereits Anmeldeinformationen validiert und Benutzer an req.user angehängt
    // Now generate and return JWT token
    // Jetzt JWT-Token generieren und zurückgeben
    return this.authService.login(req.user);
  }
}
