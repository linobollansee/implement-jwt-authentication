// Import Injectable decorator - marks this class as a service that can be injected
// Injectable-Dekorator importieren - markiert diese Klasse als injizierbaren Service
import { Injectable, UnauthorizedException } from "@nestjs/common";

// Import JwtService for token generation
// JwtService für Token-Generierung importieren
import { JwtService } from "@nestjs/jwt";

// Import bcrypt for password comparison
// bcrypt für Passwortvergleich importieren
import * as bcrypt from "bcrypt";

// Import UsersService to access user data
// UsersService importieren, um auf Benutzerdaten zuzugreifen
import { UsersService } from "../users/users.service";

// Import User entity
// User-Entity importieren
import { User } from "../users/entities/user.entity";

// @Injectable - marks this class as a service that can be dependency-injected
// @Injectable - markiert diese Klasse als Service, der dependency-injected werden kann
@Injectable()
export class AuthService {
  // Constructor - inject UsersService and JwtService dependencies
  // Konstruktor - UsersService und JwtService-Abhängigkeiten injizieren
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  // validateUser - validates user credentials (email and password)
  // validateUser - validiert Benutzeranmeldeinformationen (E-Mail und Passwort)
  async validateUser(email: string, password: string): Promise<User | null> {
    // Find user by email
    // Benutzer nach E-Mail finden
    const user = await this.usersService.findByEmail(email);

    // If user exists and password matches, return user
    // Wenn Benutzer existiert und Passwort übereinstimmt, Benutzer zurückgeben
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }

    // If credentials are invalid, return null
    // Wenn Anmeldeinformationen ungültig sind, null zurückgeben
    return null;
  }

  // login - generates JWT token for authenticated user
  // login - generiert JWT-Token für authentifizierten Benutzer
  async login(user: User) {
    // Create JWT payload with user information including role
    // JWT-Payload mit Benutzerinformationen einschließlich Rolle erstellen
    const payload = { email: user.email, sub: user.id, role: user.role };

    // Return access token
    // Access-Token zurückgeben
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    };
  }
}
