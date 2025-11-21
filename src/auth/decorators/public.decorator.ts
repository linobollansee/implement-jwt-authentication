// Import SetMetadata from NestJS to attach metadata to routes
// SetMetadata von NestJS importieren, um Metadaten an Routen anzuhängen
import { SetMetadata } from "@nestjs/common";

// Key used to mark routes as public
// Schlüssel zum Markieren von Routen als öffentlich
export const IS_PUBLIC_KEY = "isPublic";

// Public decorator - marks a route as public (skips authentication)
// Public-Dekorator - markiert eine Route als öffentlich (überspringt Authentifizierung)
// Usage: @Public()
// Verwendung: @Public()
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
