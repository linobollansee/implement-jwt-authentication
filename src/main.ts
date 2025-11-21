// Import NestFactory - creates the NestJS application instance
// NestFactory importieren - erstellt die NestJS-Anwendungsinstanz
import { NestFactory } from "@nestjs/core";

// Import ValidationPipe - validates incoming data automatically
// ValidationPipe importieren - validiert eingehende Daten automatisch
import { ValidationPipe } from "@nestjs/common";

// Import NestExpressApplication for serving static files
// NestExpressApplication für statische Dateien importieren
import { NestExpressApplication } from "@nestjs/platform-express";

// Import join for path resolution
// join für Pfadauflösung importieren
import { join } from "path";

// Import the root application module
// Das Hauptanwendungsmodul importieren
import { AppModule } from "./app.module";

// Bootstrap function - starts the application
// Bootstrap-Funktion - startet die Anwendung
async function bootstrap() {
  // Create NestJS application using AppModule with Express adapter
  // NestJS-Anwendung mit AppModule und Express-Adapter erstellen
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Enable CORS for frontend access
  // CORS für Frontend-Zugriff aktivieren
  app.enableCors();

  // Serve static files from the public directory
  // Statische Dateien aus dem public-Verzeichnis bereitstellen
  app.useStaticAssets(join(__dirname, "..", "public"));

  // Enable global validation pipe for all routes
  // Globale Validierungs-Pipe für alle Routen aktivieren
  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist: Remove properties that are not in the DTO
      // whitelist: Entferne Eigenschaften, die nicht im DTO sind
      whitelist: true,

      // forbidNonWhitelisted: Throw error if extra properties are sent
      // forbidNonWhitelisted: Fehler werfen, wenn zusätzliche Eigenschaften gesendet werden
      forbidNonWhitelisted: true,

      // transform: Automatically convert payloads to DTO instances
      // transform: Payloads automatisch in DTO-Instanzen umwandeln
      transform: true,
    })
  );

  // Start listening on port 3000
  // Auf Port 3000 lauschen
  await app.listen(3000);

  // Log message when server is ready
  // Nachricht ausgeben, wenn Server bereit ist
  console.log("Quote API is running on http://localhost:3000");
  console.log("Web UI is available at http://localhost:3000");
}

// Call bootstrap to start the application
// Bootstrap aufrufen, um die Anwendung zu starten
bootstrap();
