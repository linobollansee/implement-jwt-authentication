// Import necessary decorators and interfaces from NestJS
// Notwendige Dekoratoren und Schnittstellen von NestJS importieren
import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";

// Import Reflector to read metadata from routes
// Reflector importieren, um Metadaten von Routen zu lesen
import { Reflector } from "@nestjs/core";

// Import the ROLES_KEY constant
// ROLES_KEY-Konstante importieren
import { ROLES_KEY } from "../decorators/roles.decorator";

// @Injectable - marks this class as a service that can be dependency-injected
// @Injectable - markiert diese Klasse als Service, der dependency-injected werden kann
@Injectable()
export class RolesGuard implements CanActivate {
  // Constructor - inject Reflector dependency
  // Konstruktor - Reflector-Abhängigkeit injizieren
  constructor(private reflector: Reflector) {}

  // canActivate - determines if a request should be allowed
  // canActivate - bestimmt, ob eine Anfrage erlaubt werden soll
  canActivate(context: ExecutionContext): boolean {
    // Get required roles from route metadata
    // Erforderliche Rollen aus Route-Metadaten abrufen
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()]
    );

    // If no roles are required, allow access
    // Wenn keine Rollen erforderlich sind, Zugriff erlauben
    if (!requiredRoles) {
      return true;
    }

    // Get user from request (attached by JwtAuthGuard)
    // Benutzer aus Anfrage abrufen (von JwtAuthGuard angehängt)
    const { user } = context.switchToHttp().getRequest();

    // Check if user has one of the required roles
    // Prüfen, ob Benutzer eine der erforderlichen Rollen hat
    return requiredRoles.some((role) => user.role === role);
  }
}
