# JWT Authentication Implementation / JWT-Authentifizierungs-Implementierung

This project implements a complete JWT authentication system with role-based authorization for the Quote API, as specified in CHALLENGE.md.

Dieses Projekt implementiert ein vollständiges JWT-Authentifizierungssystem mit rollenbasierter Autorisierung für die Quote API, wie in CHALLENGE.md spezifiziert.

## ✅ Challenge Requirements Completed / Challenge-Anforderungen Erfüllt

### Core Requirements / Kernanforderungen

- ✅ **JWT Authentication / JWT-Authentifizierung**: Implemented using @nestjs/jwt and passport-jwt / Implementiert mit @nestjs/jwt und passport-jwt
- ✅ **Guards / Wächter**: Created JwtAuthGuard, LocalAuthGuard, and RolesGuard / JwtAuthGuard, LocalAuthGuard und RolesGuard erstellt
- ✅ **Password Security / Passwortsicherheit**: Added password field to User entity with bcrypt hashing / Passwortfeld zur User-Entity mit bcrypt-Hashing hinzugefügt
- ✅ **Login Logic / Login-Logik**: Implemented POST /auth/login endpoint with credential validation / POST /auth/login Endpunkt mit Credential-Validierung implementiert
- ✅ **Protected Routes / Geschützte Routen**:
  - Public / Öffentlich: GET /quotes, GET /quotes/:id, POST /auth/login, POST /users (registration / Registrierung)
  - Authenticated / Authentifiziert: All /users routes, POST /quotes / Alle /users Routen, POST /quotes
  - Admin Only / Nur Admin: PUT/DELETE for quotes and users / für Quotes und Benutzer

### Additional Requirements / Zusätzliche Anforderungen

- ✅ **User Interface / Benutzeroberfläche**: HTML interface at http://localhost:3000 for managing users and quotes / HTML-Oberfläche unter http://localhost:3000 zur Verwaltung von Benutzern und Quotes
- ✅ **Authorization Layer / Autorisierungsschicht**: Role-based authorization with 'admin' and 'user' roles / Rollenbasierte Autorisierung mit 'admin'- und 'user'-Rollen
  - Users can create quotes / Benutzer können Quotes erstellen
  - Only admins can update/delete quotes and manage users / Nur Admins können Quotes aktualisieren/löschen und Benutzer verwalten

## 🚀 Getting Started / Erste Schritte

### Prerequisites / Voraussetzungen

- Node.js (v14 or higher / v14 oder höher)
- npm

### Installation / Installation

1. Install dependencies / Abhängigkeiten installieren:

```bash
npm install
```

2. Start the development server / Entwicklungsserver starten:

```bash
npm run start:dev
```

3. The API will be available at http://localhost:3000 / Die API ist verfügbar unter http://localhost:3000
4. The Web UI will be available at http://localhost:3000 / Die Web-UI ist verfügbar unter http://localhost:3000

### Building for Production / Build für Produktion

```bash
npm run build
npm start
```

## 📚 API Documentation / API-Dokumentation

See [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) for complete API reference.

Siehe [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) für vollständige API-Referenz.

## 🧪 Testing the API / API testen

### Method 1: Using api-tests.http (Recommended) / Methode 1: Verwendung von api-tests.http (Empfohlen)

The project includes a pre-configured `api-tests.http` file for easy API testing using VS Code's REST Client extension.

Das Projekt enthält eine vorkonfigurierte `api-tests.http` Datei zum einfachen Testen der API mit der REST Client Extension von VS Code.

#### Setup / Einrichtung:

1. **Install REST Client Extension / REST Client Extension installieren**:

   - Open VS Code Extensions (Ctrl+Shift+X) / VS Code Extensions öffnen (Strg+Umschalt+X)
   - Search for "REST Client" by Huachao Mao / Nach "REST Client" von Huachao Mao suchen
   - Click Install / Auf Installieren klicken

2. **Open api-tests.http / api-tests.http öffnen**:

   - The file contains all pre-configured API requests / Die Datei enthält alle vorkonfigurierten API-Anfragen
   - Variables are defined at the top (baseUrl, token, userId, quoteId) / Variablen sind oben definiert (baseUrl, token, userId, quoteId)

3. **Execute Requests / Anfragen ausführen**:
   - Click "Send Request" above any HTTP request / Klicken Sie auf "Send Request" über jeder HTTP-Anfrage
   - The response will appear in a new panel / Die Antwort erscheint in einem neuen Panel

#### Workflow Example / Workflow-Beispiel:

**Step 1 / Schritt 1**: Register an admin user / Admin-Benutzer registrieren

```http
### Register an admin user (Public)
POST {{baseUrl}}/users
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "admin123",
  "role": "admin"
}
```

Click "Send Request" / Klicken Sie auf "Send Request"

**Step 2 / Schritt 2**: Login to get JWT token / Anmelden um JWT-Token zu erhalten

```http
### Login (Public)
POST {{baseUrl}}/auth/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "admin123"
}
```

Click "Send Request" and copy the `access_token` from response / Klicken Sie auf "Send Request" und kopieren Sie den `access_token` aus der Antwort

**Step 3 / Schritt 3**: Update token variable / Token-Variable aktualisieren

```http
@token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Replace `YOUR_JWT_TOKEN_HERE` at line 6 with your actual token / Ersetzen Sie `YOUR_JWT_TOKEN_HERE` in Zeile 6 mit Ihrem echten Token

**Step 4 / Schritt 4**: Use authenticated endpoints / Authentifizierte Endpunkte verwenden

```http
### Get all users (Requires Admin)
GET {{baseUrl}}/users
Authorization: Bearer {{token}}
```

Click "Send Request" / Klicken Sie auf "Send Request"

#### Available Request Categories in api-tests.http / Verfügbare Anfrage-Kategorien in api-tests.http:

1. **Authentication Endpoints / Authentifizierungs-Endpunkte**:

   - Register new user (Public) / Neuen Benutzer registrieren (Öffentlich)
   - Register admin user (Public) / Admin-Benutzer registrieren (Öffentlich)
   - Login as admin / Als Admin anmelden
   - Login as regular user / Als normaler Benutzer anmelden

2. **User Endpoints / Benutzer-Endpunkte**:

   - Get all users (Admin) / Alle Benutzer abrufen (Admin)
   - Get all users with limit (Admin) / Alle Benutzer mit Limit abrufen (Admin)
   - Get user by ID (Authenticated) / Benutzer nach ID abrufen (Authentifiziert)
   - Update user (Admin) / Benutzer aktualisieren (Admin)
   - Update user role (Admin) / Benutzerrolle aktualisieren (Admin)
   - Delete user (Admin) / Benutzer löschen (Admin)

3. **Quote Endpoints / Quote-Endpunkte**:

   - Get all quotes (Public) / Alle Quotes abrufen (Öffentlich)
   - Get quotes with limit (Public) / Quotes mit Limit abrufen (Öffentlich)
   - Get quotes by author (Public) / Quotes nach Autor abrufen (Öffentlich)
   - Get quote by ID (Public) / Quote nach ID abrufen (Öffentlich)
   - Create quote (User/Admin) / Quote erstellen (Benutzer/Admin)
   - Update quote (Admin) / Quote aktualisieren (Admin)
   - Delete quote (Admin) / Quote löschen (Admin)

4. **Error Test Cases / Fehler-Testfälle**:
   - Unauthorized - No token / Nicht autorisiert - Kein Token
   - Unauthorized - Invalid token / Nicht autorisiert - Ungültiger Token
   - Forbidden - User trying admin endpoint / Verboten - Benutzer versucht Admin-Endpunkt
   - Conflict - Duplicate email / Konflikt - Doppelte E-Mail

### Method 2: Using cURL / Methode 2: Verwendung von cURL

You can also test the API using command-line tools like cURL.

Sie können die API auch mit Kommandozeilen-Tools wie cURL testen.

## 🔑 Authentication Flow / Authentifizierungs-Ablauf

1. **Register / Registrieren**: POST /users with email and password (public) / mit E-Mail und Passwort (öffentlich)
2. **Login / Anmelden**: POST /auth/login to get JWT token / um JWT-Token zu erhalten
3. **Use Token / Token verwenden**: Include token in Authorization header: `Bearer <token>` / Token im Authorization-Header einfügen: `Bearer <token>`
4. **Access Protected Routes / Auf geschützte Routen zugreifen**: Token is validated and role is checked / Token wird validiert und Rolle wird geprüft

## 👥 User Roles / Benutzerrollen

### User Role (default) / Benutzerrolle (Standard)

- Can create quotes / Kann Quotes erstellen
- Can view their own user details / Kann eigene Benutzerdetails anzeigen
- Cannot manage other users or delete/update quotes / Kann keine anderen Benutzer verwalten oder Quotes löschen/aktualisieren

### Admin Role / Admin-Rolle

- Full access to all endpoints / Vollzugriff auf alle Endpunkte
- Can manage all users (create, read, update, delete) / Kann alle Benutzer verwalten (erstellen, lesen, aktualisieren, löschen)
- Can manage all quotes (create, read, update, delete) / Kann alle Quotes verwalten (erstellen, lesen, aktualisieren, löschen)

## 🗂️ Project Structure / Projektstruktur

```
src/
├── auth/                       # Authentication module / Authentifizierungs-Modul
│   ├── decorators/
│   │   ├── public.decorator.ts    # @Public() decorator / @Public() Dekorator
│   │   └── roles.decorator.ts     # @Roles() decorator / @Roles() Dekorator
│   ├── guards/
│   │   ├── jwt-auth.guard.ts      # JWT token validation / JWT-Token-Validierung
│   │   ├── local-auth.guard.ts    # Login credential validation / Login-Credential-Validierung
│   │   └── roles.guard.ts         # Role-based authorization / Rollenbasierte Autorisierung
│   ├── strategies/
│   │   ├── jwt.strategy.ts        # JWT strategy configuration / JWT-Strategie-Konfiguration
│   │   └── local.strategy.ts      # Local strategy for login / Lokale Strategie für Login
│   ├── auth.controller.ts      # Login endpoint / Login-Endpunkt
│   ├── auth.service.ts         # Authentication logic / Authentifizierungs-Logik
│   └── auth.module.ts          # Auth module configuration / Auth-Modul-Konfiguration
├── users/                      # Users module / Benutzer-Modul
│   ├── dto/
│   │   ├── create-user.dto.ts     # Create user DTO / Benutzer-Erstellungs-DTO
│   │   └── update-user.dto.ts     # Update user DTO / Benutzer-Aktualisierungs-DTO
│   ├── entities/
│   │   └── user.entity.ts      # User entity with role field / Benutzer-Entity mit Rollenfeld
│   ├── users.controller.ts     # User endpoints / Benutzer-Endpunkte
│   ├── users.service.ts        # Password hashing with bcrypt / Passwort-Hashing mit bcrypt
│   └── users.module.ts         # Users module / Benutzer-Modul
├── quotes/                     # Quotes module / Quotes-Modul
│   ├── dto/
│   │   ├── create-quote.dto.ts    # Create quote DTO / Quote-Erstellungs-DTO
│   │   └── update-quote.dto.ts    # Update quote DTO / Quote-Aktualisierungs-DTO
│   ├── entities/
│   │   └── quote.entity.ts     # Quote entity / Quote-Entity
│   ├── quotes.controller.ts    # Protected with guards / Mit Guards geschützt
│   ├── quotes.service.ts       # Quote business logic / Quote-Geschäftslogik
│   └── quotes.module.ts        # Quotes module / Quotes-Modul
├── app.module.ts               # Root module / Root-Modul
└── main.ts                     # Entry point with CORS and static files / Einstiegspunkt mit CORS und statischen Dateien
public/
└── index.html                  # Web UI for managing users and quotes / Web-UI zur Verwaltung von Benutzern und Quotes
api-tests.http                  # REST Client test file / REST Client Test-Datei
```

## 🔒 Security Features / Sicherheitsmerkmale

1. **Password Hashing / Passwort-Hashing**: All passwords are hashed using bcrypt (salt rounds: 10) / Alle Passwörter werden mit bcrypt gehasht (Salt-Runden: 10)
2. **JWT Tokens / JWT-Token**: Tokens expire after 1 day / Token laufen nach 1 Tag ab
3. **Role-Based Access Control / Rollenbasierte Zugriffskontrolle**: Different permissions for admin and user roles / Unterschiedliche Berechtigungen für Admin- und Benutzerrollen
4. **Public/Private Routes / Öffentliche/Private Routen**: Clear separation using @Public() decorator / Klare Trennung mit @Public() Dekorator
5. **CORS Enabled / CORS Aktiviert**: For frontend access / Für Frontend-Zugriff
6. **Input Validation / Eingabevalidierung**: Using class-validator for DTO validation / Verwendung von class-validator für DTO-Validierung
7. **Guard Composition / Guard-Komposition**: Multiple guards (JWT, Local, Roles) work together / Mehrere Guards (JWT, Local, Roles) arbeiten zusammen

## 🌐 Web Interface Features / Web-Interface-Funktionen

The web interface (http://localhost:3000) provides:

Die Web-Oberfläche (http://localhost:3000) bietet:

- User registration and login / Benutzerregistrierung und Anmeldung
- JWT token management (stored in localStorage) / JWT-Token-Verwaltung (gespeichert in localStorage)
- Quote browsing (public access) / Quote-Durchsuchen (öffentlicher Zugriff)
- Quote creation (requires authentication) / Quote-Erstellung (erfordert Authentifizierung)
- Quote deletion (requires authentication) / Quote-Löschung (erfordert Authentifizierung)
- User list management (requires authentication) / Benutzerlisten-Verwaltung (erfordert Authentifizierung)
- Visual feedback for authentication status / Visuelles Feedback für Authentifizierungsstatus
- Role-based UI (shows/hides features based on authentication) / Rollenbasierte UI (zeigt/versteckt Funktionen basierend auf Authentifizierung)
- Responsive design for mobile and desktop / Responsives Design für Mobil und Desktop
- Real-time success/error notifications / Echtzeit-Erfolgs-/Fehlermeldungen
- Automatic token persistence / Automatische Token-Persistenz

## 🧪 cURL Examples / cURL-Beispiele

### Create a User (Registration) / Benutzer erstellen (Registrierung)

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"admin123","role":"admin"}'
```

### Login / Anmelden

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"admin123"}'
```

Response / Antwort:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "admin@example.com",
    "role": "admin"
  }
}
```

### Create a Quote (Authenticated) / Quote erstellen (Authentifiziert)

```bash
curl -X POST http://localhost:3000/quotes \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{"text":"Your quote here","author":"Author Name"}'
```

### Get All Quotes (Public) / Alle Quotes abrufen (Öffentlich)

```bash
curl http://localhost:3000/quotes
```

### Get All Users (Admin) / Alle Benutzer abrufen (Admin)

```bash
curl -X GET http://localhost:3000/users \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Update Quote (Admin) / Quote aktualisieren (Admin)

```bash
curl -X PUT http://localhost:3000/quotes/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{"text":"Updated quote text","author":"Updated Author"}'
```

### Delete Quote (Admin) / Quote löschen (Admin)

```bash
curl -X DELETE http://localhost:3000/quotes/1 \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## 📝 Notes / Hinweise

### JWT Secret / JWT-Geheimnis

⚠️ **Important / Wichtig**: The JWT secret is currently hardcoded in the source code for development purposes. For production: / Der JWT-Schlüssel ist derzeit im Quellcode fest codiert für Entwicklungszwecke. Für Produktion:

1. Move the secret to environment variables / Verschieben Sie den Schlüssel in Umgebungsvariablen
2. Use a strong, randomly generated secret / Verwenden Sie einen starken, zufällig generierten Schlüssel
3. Update both `auth.module.ts` and `jwt.strategy.ts` / Aktualisieren Sie sowohl `auth.module.ts` als auch `jwt.strategy.ts`

Example / Beispiel:

```typescript
// auth.module.ts
secret: process.env.JWT_SECRET || "your-secret-key-change-in-production";

// jwt.strategy.ts
secretOrKey: process.env.JWT_SECRET || "your-secret-key-change-in-production";
```

### Database / Datenbank

The application uses SQLite (better-sqlite3) with TypeORM. The database file `quote-api.db` is created automatically in the project root directory with schema synchronization enabled (only for development).

Die Anwendung verwendet SQLite (better-sqlite3) mit TypeORM. Die Datenbankdatei `quote-api.db` wird automatisch im Projekt-Root-Verzeichnis erstellt mit aktivierter Schema-Synchronisierung (nur für Entwicklung).

**Why is quote-api.db created? / Warum wird quote-api.db erstellt?**

- TypeORM configuration specifies `type: "better-sqlite3"` and `database: "quote-api.db"` / TypeORM-Konfiguration gibt `type: "better-sqlite3"` und `database: "quote-api.db"` an
- SQLite automatically creates the file on first run / SQLite erstellt die Datei automatisch beim ersten Start
- `synchronize: true` creates tables from entities automatically / `synchronize: true` erstellt Tabellen aus Entities automatisch
- ⚠️ Set `synchronize: false` in production and use migrations / Setzen Sie `synchronize: false` in Produktion und verwenden Sie Migrationen

## 🎯 Next Steps / Nächste Schritte

For production deployment, consider: / Für Produktionsbereitstellung beachten:

1. Move JWT secret to environment variables / JWT-Geheimnis in Umgebungsvariablen verschieben
2. Disable TypeORM synchronization and use migrations / TypeORM-Synchronisierung deaktivieren und Migrationen verwenden
3. Add rate limiting for API endpoints / Rate-Limiting für API-Endpunkte hinzufügen
4. Implement refresh tokens / Refresh-Token implementieren
5. Add email verification for user registration / E-Mail-Verifizierung für Benutzerregistrierung hinzufügen
6. Add password reset functionality / Passwort-Zurücksetzen-Funktionalität hinzufügen
7. Implement audit logging / Audit-Protokollierung implementieren
8. Add API documentation with Swagger / API-Dokumentation mit Swagger hinzufügen
9. Add unit and integration tests / Unit- und Integrationstests hinzufügen
10. Configure production database (PostgreSQL, MySQL) / Produktionsdatenbank konfigurieren (PostgreSQL, MySQL)
11. Set up CI/CD pipeline / CI/CD-Pipeline einrichten
12. Add monitoring and error tracking / Überwachung und Fehler-Tracking hinzufügen

## 📄 License / Lizenz

This is a learning project for implementing JWT authentication in NestJS.

Dies ist ein Lernprojekt zur Implementierung von JWT-Authentifizierung in NestJS.
