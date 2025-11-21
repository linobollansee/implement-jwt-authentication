// Import SetMetadata from NestJS to attach metadata to routes
// SetMetadata von NestJS importieren, um Metadaten an Routen anzuhängen
import { SetMetadata } from "@nestjs/common";

// Key used to store role metadata
// Schlüssel zum Speichern von Rollen-Metadaten
export const ROLES_KEY = "roles";

// Roles decorator - attaches required roles to a route handler
// Roles-Dekorator - fügt erforderliche Rollen einem Route-Handler hinzu
// Usage: @Roles('admin', 'user')
// Verwendung: @Roles('admin', 'user')
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
