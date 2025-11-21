// Import Module decorator - marks this class as a NestJS module
// Module-Dekorator importieren - markiert diese Klasse als NestJS-Modul
import { Module } from "@nestjs/common";

// Import JwtModule for JWT token generation and verification
// JwtModule für JWT-Token-Generierung und -Verifizierung importieren
import { JwtModule } from "@nestjs/jwt";

// Import PassportModule for authentication strategies
// PassportModule für Authentifizierungsstrategien importieren
import { PassportModule } from "@nestjs/passport";

// Import UsersModule to access user service
// UsersModule importieren, um auf Benutzerservice zuzugreifen
import { UsersModule } from "../users/users.module";

// Import Auth components
// Auth-Komponenten importieren
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { LocalStrategy } from "./strategies/local.strategy";
import { JwtStrategy } from "./strategies/jwt.strategy";

// @Module decorator - defines a NestJS module with its dependencies
// @Module-Dekorator - definiert ein NestJS-Modul mit seinen Abhängigkeiten
@Module({
  // imports: Array of modules this module depends on
  // imports: Array von Modulen, von denen dieses Modul abhängt
  imports: [
    // Import UsersModule to access UsersService
    // UsersModule importieren, um auf UsersService zuzugreifen
    UsersModule,

    // Import PassportModule with default strategy
    // PassportModule mit Standard-Strategie importieren
    PassportModule,

    // Configure JwtModule with secret and expiration
    // JwtModule mit Secret und Ablauf konfigurieren
    JwtModule.register({
      // Secret key for signing JWT tokens
      // Geheimer Schlüssel zum Signieren von JWT-Tokens
      secret: "your-secret-key-change-in-production", // TODO: Move to environment variable
      // Token expiration time
      // Token-Ablaufzeit
      signOptions: { expiresIn: "1d" }, // Token expires in 1 day
    }),
  ],

  // providers: Services and strategies available in this module
  // providers: Services und Strategien, die in diesem Modul verfügbar sind
  providers: [AuthService, LocalStrategy, JwtStrategy],

  // controllers: Controllers that handle HTTP requests
  // controllers: Controller, die HTTP-Anfragen behandeln
  controllers: [AuthController],

  // exports: Services available to other modules that import AuthModule
  // exports: Services, die für andere Module verfügbar sind, die AuthModule importieren
  exports: [AuthService],
})
export class AuthModule {}
