# Technologies & Concepts Explained / Technologien & Konzepte Erklärt

This document provides an in-depth explanation of all technologies, patterns, and concepts used in this JWT authentication project.

Dieses Dokument bietet eine ausführliche Erklärung aller Technologien, Muster und Konzepte, die in diesem JWT-Authentifizierungsprojekt verwendet werden.

---

## Table of Contents / Inhaltsverzeichnis

1. [Core Technologies / Kerntechnologien](#core-technologies--kerntechnologien)
2. [Web Framework & Architecture / Web-Framework & Architektur](#web-framework--architecture--web-framework--architektur)
3. [Database & ORM / Datenbank & ORM](#database--orm--datenbank--orm)
4. [Authentication & Security / Authentifizierung & Sicherheit](#authentication--security--authentifizierung--sicherheit)
5. [Validation & Transformation / Validierung & Transformation](#validation--transformation--validierung--transformation)
6. [Advanced Concepts / Fortgeschrittene Konzepte](#advanced-concepts--fortgeschrittene-konzepte)

---

## Core Technologies / Kerntechnologien

### Node.js

**English:**
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side, enabling full-stack JavaScript development. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications.

**Why we use it:** Node.js powers our entire backend application, handling HTTP requests, database operations, and authentication logic.

**Deutsch:**
Node.js ist eine JavaScript-Laufzeitumgebung, die auf der V8 JavaScript-Engine von Chrome basiert. Sie ermöglicht Entwicklern, JavaScript auf der Serverseite auszuführen und damit Full-Stack-JavaScript-Entwicklung zu betreiben. Node.js verwendet ein ereignisgesteuertes, nicht-blockierendes I/O-Modell, das es leichtgewichtig und effizient macht – perfekt für datenintensive Echtzeit-Anwendungen.

**Warum wir es verwenden:** Node.js betreibt unsere gesamte Backend-Anwendung und verarbeitet HTTP-Anfragen, Datenbankoperationen und Authentifizierungslogik.

---

### TypeScript

**English:**
TypeScript is a strongly-typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing, classes, interfaces, and other features that make large-scale JavaScript applications more maintainable and less error-prone. TypeScript catches errors at compile-time rather than runtime.

**Why we use it:** TypeScript provides type safety, better IDE support with autocomplete and refactoring tools, and makes our codebase more maintainable as it grows.

**Key features in our project:**

- Interface definitions for User and Quote entities
- Type-safe DTOs (Data Transfer Objects)
- Compile-time error checking
- Better code documentation through types

**Deutsch:**
TypeScript ist eine stark typisierte Obermenge von JavaScript, die zu normalem JavaScript kompiliert wird. Es fügt optional statische Typisierung, Klassen, Interfaces und andere Features hinzu, die große JavaScript-Anwendungen wartbarer und weniger fehleranfällig machen. TypeScript erkennt Fehler zur Kompilierzeit statt zur Laufzeit.

**Warum wir es verwenden:** TypeScript bietet Typsicherheit, bessere IDE-Unterstützung mit Autovervollständigung und Refactoring-Tools und macht unsere Codebasis wartbarer, während sie wächst.

**Hauptmerkmale in unserem Projekt:**

- Interface-Definitionen für User- und Quote-Entities
- Typsichere DTOs (Data Transfer Objects)
- Fehlerprüfung zur Kompilierzeit
- Bessere Code-Dokumentation durch Typen

---

## Web Framework & Architecture / Web-Framework & Architektur

### NestJS

**English:**
NestJS is a progressive Node.js framework for building efficient, scalable server-side applications. It uses modern JavaScript and TypeScript, combining elements of Object-Oriented Programming (OOP), Functional Programming (FP), and Functional Reactive Programming (FRP). NestJS is heavily inspired by Angular and uses a similar modular architecture.

**Core Concepts:**

1. **Modules:** Organize application components into cohesive blocks. Each module encapsulates related functionality (e.g., AuthModule, UsersModule, QuotesModule).

2. **Controllers:** Handle incoming HTTP requests and return responses. They define routes and delegate business logic to services.

3. **Services (Providers):** Contain the business logic and are injectable via Dependency Injection. They can be shared across multiple controllers.

4. **Dependency Injection (DI):** NestJS has a built-in DI container that manages the creation and lifecycle of services. Classes declare their dependencies in the constructor, and NestJS automatically provides them.

**Why we use it:** NestJS provides a solid architectural foundation with built-in support for TypeScript, decorators, modules, and middleware. It's enterprise-ready and follows best practices for large applications.

**Deutsch:**
NestJS ist ein progressives Node.js-Framework zum Erstellen effizienter, skalierbarer serverseitiger Anwendungen. Es verwendet modernes JavaScript und TypeScript und kombiniert Elemente der objektorientierten Programmierung (OOP), funktionalen Programmierung (FP) und funktional-reaktiven Programmierung (FRP). NestJS ist stark von Angular inspiriert und verwendet eine ähnliche modulare Architektur.

**Kernkonzepte:**

1. **Module:** Organisieren Anwendungskomponenten in zusammenhängende Blöcke. Jedes Modul kapselt verwandte Funktionalität (z.B. AuthModule, UsersModule, QuotesModule).

2. **Controller:** Verarbeiten eingehende HTTP-Anfragen und geben Antworten zurück. Sie definieren Routen und delegieren Geschäftslogik an Services.

3. **Services (Provider):** Enthalten die Geschäftslogik und sind über Dependency Injection injizierbar. Sie können über mehrere Controller hinweg geteilt werden.

4. **Dependency Injection (DI):** NestJS hat einen eingebauten DI-Container, der die Erstellung und den Lebenszyklus von Services verwaltet. Klassen deklarieren ihre Abhängigkeiten im Konstruktor, und NestJS stellt sie automatisch bereit.

**Warum wir es verwenden:** NestJS bietet eine solide architektonische Grundlage mit eingebauter Unterstützung für TypeScript, Decorators, Module und Middleware. Es ist unternehmensfertig und folgt Best Practices für große Anwendungen.

---

### Decorators / Dekoratoren

**English:**
Decorators are a TypeScript/JavaScript feature that allows you to add metadata and modify classes, methods, and properties. They use the `@` syntax and are extensively used in NestJS for routing, dependency injection, validation, and more.

**Examples in our project:**

```typescript
@Controller('users')          // Defines a controller with '/users' base route
@Injectable()                 // Marks a class as injectable via DI
@Get()                        // HTTP GET method decorator
@Post()                       // HTTP POST method decorator
@UseGuards(JwtAuthGuard)     // Applies guard to route
@Public()                     // Custom decorator for public routes
@Roles('admin', 'user')      // Custom decorator for role-based access
```

**Deutsch:**
Dekoratoren sind ein TypeScript/JavaScript-Feature, das es ermöglicht, Metadaten hinzuzufügen und Klassen, Methoden und Eigenschaften zu modifizieren. Sie verwenden die `@`-Syntax und werden in NestJS extensiv für Routing, Dependency Injection, Validierung und mehr verwendet.

**Beispiele in unserem Projekt:**

```typescript
@Controller('users')          // Definiert einen Controller mit '/users' Basis-Route
@Injectable()                 // Markiert eine Klasse als injizierbar via DI
@Get()                        // HTTP GET Methoden-Dekorator
@Post()                       // HTTP POST Methoden-Dekorator
@UseGuards(JwtAuthGuard)     // Wendet Guard auf Route an
@Public()                     // Benutzerdefinierter Dekorator für öffentliche Routen
@Roles('admin', 'user')      // Benutzerdefinierter Dekorator für rollenbasierten Zugriff
```

---

### Express.js

**English:**
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. NestJS uses Express under the hood (by default) to handle HTTP requests and responses.

**Key features:**

- Routing
- Middleware support
- HTTP utility methods
- Static file serving

**Why NestJS uses it:** Express is battle-tested, has a large ecosystem, and provides the low-level HTTP handling that NestJS builds upon.

**Deutsch:**
Express ist ein minimales und flexibles Node.js-Webanwendungs-Framework, das einen robusten Satz von Features für Web- und Mobile-Anwendungen bietet. NestJS verwendet Express unter der Haube (standardmäßig), um HTTP-Anfragen und -Antworten zu verarbeiten.

**Hauptmerkmale:**

- Routing
- Middleware-Unterstützung
- HTTP-Utility-Methoden
- Bereitstellung statischer Dateien

**Warum NestJS es verwendet:** Express ist kampferprobt, hat ein großes Ökosystem und bietet die Low-Level-HTTP-Verarbeitung, auf der NestJS aufbaut.

---

## Database & ORM / Datenbank & ORM

### TypeORM

**English:**
TypeORM is an Object-Relational Mapping (ORM) library for TypeScript and JavaScript. It allows you to interact with databases using TypeScript classes and decorators instead of writing raw SQL queries. TypeORM supports multiple database systems including PostgreSQL, MySQL, SQLite, and more.

**Core Concepts:**

1. **Entities:** Classes decorated with `@Entity()` that map to database tables. Properties become columns.

2. **Repositories:** Provide methods to interact with entities (find, save, update, delete). Auto-generated by TypeORM.

3. **Relations:** Define relationships between entities (@OneToMany, @ManyToOne, @ManyToMany).

4. **Migrations:** Version control for database schema changes (recommended for production).

5. **Synchronization:** Automatically creates database tables from entities (only for development).

**Example from our project:**

```typescript
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: "user" })
  role: string;
}
```

**Why we use it:** TypeORM provides type-safe database operations, reduces boilerplate code, and makes database interactions more maintainable.

**Deutsch:**
TypeORM ist eine Object-Relational Mapping (ORM) Bibliothek für TypeScript und JavaScript. Sie ermöglicht die Interaktion mit Datenbanken über TypeScript-Klassen und Dekoratoren anstatt rohe SQL-Queries zu schreiben. TypeORM unterstützt mehrere Datenbanksysteme einschließlich PostgreSQL, MySQL, SQLite und mehr.

**Kernkonzepte:**

1. **Entities:** Mit `@Entity()` dekorierte Klassen, die auf Datenbanktabellen gemappt werden. Eigenschaften werden zu Spalten.

2. **Repositories:** Bieten Methoden zur Interaktion mit Entities (find, save, update, delete). Werden automatisch von TypeORM generiert.

3. **Relationen:** Definieren Beziehungen zwischen Entities (@OneToMany, @ManyToOne, @ManyToMany).

4. **Migrationen:** Versionskontrolle für Datenbank-Schema-Änderungen (empfohlen für Produktion).

5. **Synchronisierung:** Erstellt automatisch Datenbanktabellen aus Entities (nur für Entwicklung).

**Beispiel aus unserem Projekt:**

```typescript
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: "user" })
  role: string;
}
```

**Warum wir es verwenden:** TypeORM bietet typsichere Datenbankoperationen, reduziert Boilerplate-Code und macht Datenbankinteraktionen wartbarer.

---

### SQLite (better-sqlite3)

**English:**
SQLite is a lightweight, file-based relational database. Unlike client-server databases (PostgreSQL, MySQL), SQLite stores the entire database in a single file. The `better-sqlite3` package is a fast, synchronous SQLite3 binding for Node.js.

**Advantages:**

- No separate database server needed
- Zero configuration
- Perfect for development and small applications
- Fast for read-heavy workloads
- Portable (single file)

**Limitations:**

- Not ideal for high-concurrency write operations
- Single-writer limitation
- Less suitable for large-scale production applications

**Why we use it:** SQLite is perfect for development and learning. It requires no setup and creates a database file automatically. For production, you would typically switch to PostgreSQL or MySQL.

**Deutsch:**
SQLite ist eine leichtgewichtige, dateibasierte relationale Datenbank. Im Gegensatz zu Client-Server-Datenbanken (PostgreSQL, MySQL) speichert SQLite die gesamte Datenbank in einer einzigen Datei. Das `better-sqlite3` Paket ist ein schnelles, synchrones SQLite3-Binding für Node.js.

**Vorteile:**

- Kein separater Datenbankserver erforderlich
- Null Konfiguration
- Perfekt für Entwicklung und kleine Anwendungen
- Schnell für leseintensive Workloads
- Portabel (einzelne Datei)

**Einschränkungen:**

- Nicht ideal für hohe Konkurrenz bei Schreiboperationen
- Single-Writer-Einschränkung
- Weniger geeignet für große Produktionsanwendungen

**Warum wir es verwenden:** SQLite ist perfekt für Entwicklung und Lernen. Es erfordert keine Einrichtung und erstellt automatisch eine Datenbankdatei. Für Produktion würde man typischerweise auf PostgreSQL oder MySQL umsteigen.

---

## Authentication & Security / Authentifizierung & Sicherheit

### JWT (JSON Web Tokens)

**English:**
JWT is an open standard (RFC 7519) for securely transmitting information between parties as a JSON object. JWTs are digitally signed and can be verified and trusted. They are commonly used for authentication and information exchange.

**Structure of a JWT:**

```
Header.Payload.Signature
```

1. **Header:** Contains the token type (JWT) and hashing algorithm (HS256, RS256)
2. **Payload:** Contains claims (data) - user ID, email, role, expiration time
3. **Signature:** Created by encoding the header and payload with a secret key

**Example JWT:**

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

**How it works in our project:**

1. User logs in with email/password
2. Server validates credentials
3. Server creates JWT with user info (ID, email, role)
4. Server signs JWT with secret key and returns it
5. Client stores JWT (localStorage)
6. Client includes JWT in Authorization header for subsequent requests
7. Server validates JWT signature and extracts user info

**Advantages:**

- Stateless (no server-side session storage needed)
- Scalable (works across multiple servers)
- Self-contained (carries user information)
- Secure (signed and optionally encrypted)

**Security considerations:**

- Store secret key securely (environment variables)
- Set appropriate expiration time
- Use HTTPS to prevent token interception
- Validate token on every request
- Consider refresh tokens for better security

**Deutsch:**
JWT ist ein offener Standard (RFC 7519) zur sicheren Übertragung von Informationen zwischen Parteien als JSON-Objekt. JWTs sind digital signiert und können verifiziert und vertraut werden. Sie werden häufig für Authentifizierung und Informationsaustausch verwendet.

**Struktur eines JWT:**

```
Header.Payload.Signature
```

1. **Header:** Enthält den Token-Typ (JWT) und Hash-Algorithmus (HS256, RS256)
2. **Payload:** Enthält Claims (Daten) - Benutzer-ID, E-Mail, Rolle, Ablaufzeit
3. **Signature:** Erstellt durch Kodierung von Header und Payload mit einem geheimen Schlüssel

**Wie es in unserem Projekt funktioniert:**

1. Benutzer meldet sich mit E-Mail/Passwort an
2. Server validiert Anmeldedaten
3. Server erstellt JWT mit Benutzerinfo (ID, E-Mail, Rolle)
4. Server signiert JWT mit geheimem Schlüssel und gibt es zurück
5. Client speichert JWT (localStorage)
6. Client fügt JWT im Authorization-Header für nachfolgende Anfragen ein
7. Server validiert JWT-Signatur und extrahiert Benutzerinfo

**Vorteile:**

- Zustandslos (keine serverseitige Session-Speicherung erforderlich)
- Skalierbar (funktioniert über mehrere Server hinweg)
- Selbst-enthaltend (trägt Benutzerinformationen)
- Sicher (signiert und optional verschlüsselt)

**Sicherheitsüberlegungen:**

- Geheimen Schlüssel sicher speichern (Umgebungsvariablen)
- Angemessene Ablaufzeit festlegen
- HTTPS verwenden, um Token-Abfangen zu verhindern
- Token bei jeder Anfrage validieren
- Refresh-Token für bessere Sicherheit in Betracht ziehen

---

### Passport.js

**English:**
Passport is authentication middleware for Node.js. It's extremely flexible and modular, with over 500+ authentication strategies available (local, JWT, OAuth, etc.). Passport provides a clean API for authentication without imposing specific requirements on your application.

**Key Concepts:**

1. **Strategies:** Pluggable authentication methods. Each strategy implements specific authentication logic.

2. **Serialization:** Converting user objects to/from session storage (not used in JWT auth).

3. **Middleware:** Passport integrates as Express middleware in the request pipeline.

**Strategies used in our project:**

1. **Local Strategy (passport-local):**

   - Validates username/email and password
   - Used for login endpoint
   - Extracts credentials from request body

2. **JWT Strategy (passport-jwt):**
   - Validates JWT tokens
   - Extracts token from Authorization header
   - Verifies signature and expiration
   - Decodes payload and attaches user to request

**Implementation example:**

```typescript
// Local Strategy
constructor(private authService: AuthService) {
  super({ usernameField: 'email' });
}

async validate(email: string, password: string) {
  const user = await this.authService.validateUser(email, password);
  if (!user) {
    throw new UnauthorizedException();
  }
  return user;
}

// JWT Strategy
constructor() {
  super({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your-secret-key',
  });
}

async validate(payload: any) {
  return { userId: payload.sub, email: payload.email, role: payload.role };
}
```

**Why we use it:** Passport provides a standardized way to implement authentication, has excellent NestJS integration (@nestjs/passport), and supports multiple strategies that can be easily switched or combined.

**Deutsch:**
Passport ist Authentifizierungs-Middleware für Node.js. Es ist extrem flexibel und modular, mit über 500+ verfügbaren Authentifizierungsstrategien (local, JWT, OAuth, etc.). Passport bietet eine saubere API für Authentifizierung ohne spezifische Anforderungen an Ihre Anwendung aufzuerlegen.

**Kernkonzepte:**

1. **Strategien:** Einsteckbare Authentifizierungsmethoden. Jede Strategie implementiert spezifische Authentifizierungslogik.

2. **Serialisierung:** Konvertierung von Benutzerobjekten zu/von Session-Speicher (nicht bei JWT-Auth verwendet).

3. **Middleware:** Passport integriert sich als Express-Middleware in die Request-Pipeline.

**In unserem Projekt verwendete Strategien:**

1. **Local Strategy (passport-local):**

   - Validiert Benutzername/E-Mail und Passwort
   - Verwendet für Login-Endpunkt
   - Extrahiert Anmeldedaten aus Request-Body

2. **JWT Strategy (passport-jwt):**
   - Validiert JWT-Token
   - Extrahiert Token aus Authorization-Header
   - Verifiziert Signatur und Ablauf
   - Dekodiert Payload und hängt Benutzer an Request an

**Warum wir es verwenden:** Passport bietet eine standardisierte Möglichkeit zur Implementierung von Authentifizierung, hat exzellente NestJS-Integration (@nestjs/passport) und unterstützt mehrere Strategien, die einfach gewechselt oder kombiniert werden können.

---

### bcrypt

**English:**
bcrypt is a password hashing function designed specifically for password storage. It's based on the Blowfish cipher and incorporates a salt to protect against rainbow table attacks. bcrypt is intentionally slow, making brute-force attacks computationally expensive.

**Key Features:**

1. **Salting:** Automatically generates a random salt for each password, preventing rainbow table attacks.

2. **Work Factor (Cost Factor):** Configurable number of hashing rounds. Higher = slower but more secure. Our project uses 10 rounds.

3. **Adaptive:** Can increase work factor over time as computers get faster.

**How it works:**

```typescript
// Hashing a password
const password = "mySecretPassword123";
const saltRounds = 10;
const hashedPassword = await bcrypt.hash(password, saltRounds);
// Result: $2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy

// Comparing passwords
const isMatch = await bcrypt.compare(password, hashedPassword);
// Result: true or false
```

**Security benefits:**

- Passwords are never stored in plain text
- Each password has a unique salt
- Slow enough to deter brute-force attacks
- Fast enough for legitimate use

**Why we use it:** bcrypt is the industry standard for password hashing. It's battle-tested, secure, and specifically designed for this purpose. Never use simple hashing algorithms (MD5, SHA1) for passwords.

**Deutsch:**
bcrypt ist eine Passwort-Hashing-Funktion, die speziell für die Passwortspeicherung entwickelt wurde. Sie basiert auf der Blowfish-Verschlüsselung und integriert ein Salt zum Schutz vor Rainbow-Table-Angriffen. bcrypt ist absichtlich langsam, was Brute-Force-Angriffe rechnerisch teuer macht.

**Hauptmerkmale:**

1. **Salting:** Generiert automatisch ein zufälliges Salt für jedes Passwort und verhindert Rainbow-Table-Angriffe.

2. **Work Factor (Cost Factor):** Konfigurierbare Anzahl von Hashing-Runden. Höher = langsamer aber sicherer. Unser Projekt verwendet 10 Runden.

3. **Adaptiv:** Kann Work Factor im Laufe der Zeit erhöhen, wenn Computer schneller werden.

**Wie es funktioniert:**

```typescript
// Passwort hashen
const password = "meinGeheimesPasswort123";
const saltRounds = 10;
const hashedPassword = await bcrypt.hash(password, saltRounds);
// Ergebnis: $2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy

// Passwörter vergleichen
const isMatch = await bcrypt.compare(password, hashedPassword);
// Ergebnis: true oder false
```

**Sicherheitsvorteile:**

- Passwörter werden nie im Klartext gespeichert
- Jedes Passwort hat ein einzigartiges Salt
- Langsam genug, um Brute-Force-Angriffe abzuschrecken
- Schnell genug für legitime Nutzung

**Warum wir es verwenden:** bcrypt ist der Industriestandard für Passwort-Hashing. Es ist kampferprobt, sicher und speziell für diesen Zweck entwickelt. Verwenden Sie niemals einfache Hashing-Algorithmen (MD5, SHA1) für Passwörter.

---

### CORS (Cross-Origin Resource Sharing)

**English:**
CORS is a security feature implemented by browsers that controls how web pages from one origin can request resources from another origin. By default, browsers block cross-origin requests for security reasons (Same-Origin Policy).

**The Problem:**

- Frontend runs on: `http://localhost:3000` (or any other domain)
- Backend API runs on: `http://localhost:3000/api`
- Browser blocks frontend from accessing API

**The Solution:**
Enable CORS on the backend to allow specific origins to access the API.

**In our project:**

```typescript
// main.ts
app.enableCors(); // Allows all origins (development only)

// Production configuration
app.enableCors({
  origin: "https://your-frontend-domain.com",
  credentials: true,
});
```

**Security considerations:**

- Don't use `origin: '*'` in production
- Specify exact allowed origins
- Use credentials carefully
- Consider CSRF tokens

**Deutsch:**
CORS ist ein Sicherheitsfeature, das von Browsern implementiert wird und kontrolliert, wie Webseiten von einer Origin Ressourcen von einer anderen Origin anfordern können. Standardmäßig blockieren Browser Cross-Origin-Anfragen aus Sicherheitsgründen (Same-Origin Policy).

**Das Problem:**

- Frontend läuft auf: `http://localhost:3000` (oder eine andere Domain)
- Backend-API läuft auf: `http://localhost:3000/api`
- Browser blockiert Frontend vom Zugriff auf API

**Die Lösung:**
Aktivieren Sie CORS im Backend, um bestimmten Origins den Zugriff auf die API zu ermöglichen.

**In unserem Projekt:**

```typescript
// main.ts
app.enableCors(); // Erlaubt alle Origins (nur Entwicklung)

// Produktionskonfiguration
app.enableCors({
  origin: "https://ihre-frontend-domain.com",
  credentials: true,
});
```

**Sicherheitsüberlegungen:**

- Verwenden Sie nicht `origin: '*'` in Produktion
- Geben Sie exakte erlaubte Origins an
- Verwenden Sie Credentials sorgfältig
- Erwägen Sie CSRF-Token

---

## Validation & Transformation / Validierung & Transformation

### class-validator

**English:**
class-validator is a decorator-based validation library that works seamlessly with TypeScript classes. It allows you to define validation rules directly on class properties using decorators.

**Common validators used in our project:**

```typescript
import {
  IsEmail,
  IsString,
  MinLength,
  IsOptional,
  IsIn,
} from "class-validator";

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsIn(["user", "admin"])
  role?: string;
}
```

**Available validators:**

- `@IsString()` - Must be a string
- `@IsNumber()` - Must be a number
- `@IsEmail()` - Must be a valid email
- `@MinLength(n)` - Minimum string length
- `@MaxLength(n)` - Maximum string length
- `@IsOptional()` - Field is optional
- `@IsIn([...])` - Must be one of specified values
- `@Matches(regex)` - Must match regular expression
- And many more...

**How it works:**

1. Client sends data in request body
2. NestJS automatically validates data against DTO class
3. If validation fails, returns 400 Bad Request with error details
4. If validation passes, data reaches controller method

**Why we use it:** Ensures data integrity, prevents invalid data from entering the system, provides clear error messages, and reduces boilerplate validation code.

**Deutsch:**
class-validator ist eine dekorator-basierte Validierungsbibliothek, die nahtlos mit TypeScript-Klassen funktioniert. Sie ermöglicht es, Validierungsregeln direkt auf Klasseneigenschaften mit Dekoratoren zu definieren.

**Häufig verwendete Validatoren in unserem Projekt:**

```typescript
import {
  IsEmail,
  IsString,
  MinLength,
  IsOptional,
  IsIn,
} from "class-validator";

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsIn(["user", "admin"])
  role?: string;
}
```

**Verfügbare Validatoren:**

- `@IsString()` - Muss ein String sein
- `@IsNumber()` - Muss eine Zahl sein
- `@IsEmail()` - Muss eine gültige E-Mail sein
- `@MinLength(n)` - Minimale String-Länge
- `@MaxLength(n)` - Maximale String-Länge
- `@IsOptional()` - Feld ist optional
- `@IsIn([...])` - Muss einer der angegebenen Werte sein
- `@Matches(regex)` - Muss auf regulären Ausdruck passen
- Und viele mehr...

**Wie es funktioniert:**

1. Client sendet Daten im Request-Body
2. NestJS validiert automatisch Daten gegen DTO-Klasse
3. Bei Validierungsfehler wird 400 Bad Request mit Fehlerdetails zurückgegeben
4. Bei erfolgreicher Validierung erreichen Daten die Controller-Methode

**Warum wir es verwenden:** Stellt Datenintegrität sicher, verhindert ungültige Daten im System, bietet klare Fehlermeldungen und reduziert Boilerplate-Validierungscode.

---

### class-transformer

**English:**
class-transformer works hand-in-hand with class-validator to transform plain JavaScript objects into class instances. This is crucial for validation and type safety.

**What it does:**

- Converts plain JSON objects to class instances
- Enables validation decorators to work
- Allows transformation decorators
- Handles nested objects

**Example:**

```typescript
import { Exclude, Expose, Transform } from "class-transformer";

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  email: string;

  @Exclude() // Never include password in responses
  password: string;

  @Transform(({ value }) => value.toUpperCase())
  role: string;
}
```

**Common transformations:**

- `@Exclude()` - Exclude property from output
- `@Expose()` - Include only specified properties
- `@Transform()` - Transform value before serialization
- `@Type()` - Specify class type for nested objects

**Why we use it:** Ensures consistent data transformation, automatically removes sensitive fields (like passwords), and works seamlessly with validation.

**Deutsch:**
class-transformer arbeitet Hand in Hand mit class-validator, um einfache JavaScript-Objekte in Klasseninstanzen zu transformieren. Dies ist entscheidend für Validierung und Typsicherheit.

**Was es tut:**

- Konvertiert einfache JSON-Objekte zu Klasseninstanzen
- Ermöglicht Funktionieren von Validierungsdekoratoren
- Erlaubt Transformationsdekoratoren
- Verarbeitet verschachtelte Objekte

**Warum wir es verwenden:** Stellt konsistente Datentransformation sicher, entfernt automatisch sensible Felder (wie Passwörter) und funktioniert nahtlos mit Validierung.

---

## Advanced Concepts / Fortgeschrittene Konzepte

### Guards / Wächter

**English:**
Guards are a fundamental concept in NestJS that determine whether a request should be handled by the route handler or not. They implement the `CanActivate` interface and return a boolean (or Promise/Observable of boolean). Guards have access to the execution context and can make complex authorization decisions.

**When Guards Execute:**
Guards execute **after** middleware but **before** interceptors and pipes. This makes them perfect for authentication and authorization.

**Request Pipeline:**

```
Middleware → Guards → Interceptors (before) → Pipes → Route Handler → Interceptors (after)
```

**Types of Guards in our project:**

#### 1. JwtAuthGuard (Authentication Guard)

**Purpose:** Validates JWT tokens and ensures users are authenticated.

**How it works:**

```typescript
@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    // Check if route is marked as @Public()
    const isPublic = this.reflector.getAllAndOverride<boolean>("isPublic", [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true; // Skip authentication
    }

    // Validate JWT token using Passport JWT Strategy
    return super.canActivate(context);
  }
}
```

**What happens:**

1. Extracts JWT from Authorization header
2. Verifies signature and expiration
3. Decodes payload and attaches user to request
4. Returns true if valid, false otherwise

#### 2. LocalAuthGuard (Login Guard)

**Purpose:** Validates email and password during login.

**How it works:**

```typescript
@Injectable()
export class LocalAuthGuard extends AuthGuard("local") {}
```

**What happens:**

1. Extracts email and password from request body
2. Calls LocalStrategy.validate()
3. Validates credentials against database
4. Returns user object if valid
5. Throws UnauthorizedException if invalid

#### 3. RolesGuard (Authorization Guard)

**Purpose:** Enforces role-based access control.

**How it works:**

```typescript
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Get required roles from @Roles() decorator
    const requiredRoles = this.reflector.getAllAndOverride<string[]>("roles", [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true; // No roles required
    }

    // Get user from request (attached by JwtAuthGuard)
    const { user } = context.switchToHttp().getRequest();

    // Check if user has one of the required roles
    return requiredRoles.some((role) => user.role === role);
  }
}
```

**What happens:**

1. Reads required roles from @Roles() decorator
2. Gets user object from request (must run after JwtAuthGuard)
3. Checks if user's role matches any required role
4. Returns true if authorized, false otherwise

**Guard Composition:**

Guards can be combined for layered security:

```typescript
@Controller("users")
@UseGuards(JwtAuthGuard, RolesGuard) // Apply both guards
export class UsersController {
  @Get()
  @Roles("admin") // Only admins can access
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  @Public() // Skip authentication
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
```

**Execution order:**

1. JwtAuthGuard validates token
2. If valid, user is attached to request
3. RolesGuard checks user's role
4. If authorized, route handler executes

**Deutsch:**
Guards sind ein fundamentales Konzept in NestJS, das bestimmt, ob eine Anfrage vom Route-Handler behandelt werden soll oder nicht. Sie implementieren das `CanActivate`-Interface und geben einen Boolean (oder Promise/Observable von Boolean) zurück. Guards haben Zugriff auf den Execution-Context und können komplexe Autorisierungsentscheidungen treffen.

**Wann Guards ausgeführt werden:**
Guards werden **nach** Middleware aber **vor** Interceptors und Pipes ausgeführt. Dies macht sie perfekt für Authentifizierung und Autorisierung.

**Request-Pipeline:**

```
Middleware → Guards → Interceptors (vorher) → Pipes → Route Handler → Interceptors (nachher)
```

**Arten von Guards in unserem Projekt:**

#### 1. JwtAuthGuard (Authentifizierungs-Guard)

**Zweck:** Validiert JWT-Token und stellt sicher, dass Benutzer authentifiziert sind.

#### 2. LocalAuthGuard (Login-Guard)

**Zweck:** Validiert E-Mail und Passwort während des Logins.

#### 3. RolesGuard (Autorisierungs-Guard)

**Zweck:** Erzwingt rollenbasierte Zugriffskontrolle.

**Guard-Komposition:**

Guards können für mehrschichtige Sicherheit kombiniert werden:

```typescript
@Controller("users")
@UseGuards(JwtAuthGuard, RolesGuard) // Beide Guards anwenden
export class UsersController {
  @Get()
  @Roles("admin") // Nur Admins können zugreifen
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  @Public() // Authentifizierung überspringen
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
```

**Ausführungsreihenfolge:**

1. JwtAuthGuard validiert Token
2. Bei Gültigkeit wird Benutzer an Request angehängt
3. RolesGuard prüft Benutzerrolle
4. Bei Autorisierung wird Route-Handler ausgeführt

---

### Reflector & Metadata

**English:**
The Reflector is a NestJS utility class that allows you to retrieve metadata attached to classes and methods via decorators. Metadata is used extensively in our guards to make authorization decisions.

**How it works:**

1. **Setting Metadata (Custom Decorator):**

```typescript
// public.decorator.ts
import { SetMetadata } from "@nestjs/common";

export const IS_PUBLIC_KEY = "isPublic";
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
```

2. **Reading Metadata (In Guard):**

```typescript
// jwt-auth.guard.ts
const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
  context.getHandler(), // Method-level metadata
  context.getClass(), // Class-level metadata
]);
```

**getAllAndOverride vs getAllAndMerge:**

- `getAllAndOverride`: Method-level metadata overrides class-level
- `getAllAndMerge`: Combines both levels of metadata

**Example Usage:**

```typescript
@Controller("quotes")
@UseGuards(JwtAuthGuard) // Class-level: all routes protected
export class QuotesController {
  @Get()
  @Public() // Method-level: override class guard
  findAll() {
    // This route is now public despite class-level guard
  }
}
```

**Why it's important:** Reflector enables powerful metadata-driven patterns, allowing decorators to control application behavior declaratively rather than imperatively.

**Deutsch:**
Der Reflector ist eine NestJS-Utility-Klasse, die es ermöglicht, Metadaten abzurufen, die über Dekoratoren an Klassen und Methoden angehängt wurden. Metadaten werden in unseren Guards extensiv verwendet, um Autorisierungsentscheidungen zu treffen.

**Wie es funktioniert:**

1. **Metadaten setzen (Benutzerdefinierter Dekorator):**

```typescript
// public.decorator.ts
import { SetMetadata } from "@nestjs/common";

export const IS_PUBLIC_KEY = "isPublic";
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
```

2. **Metadaten lesen (In Guard):**

```typescript
// jwt-auth.guard.ts
const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
  context.getHandler(), // Methoden-Ebene Metadaten
  context.getClass(), // Klassen-Ebene Metadaten
]);
```

**Warum es wichtig ist:** Reflector ermöglicht mächtige metadaten-gesteuerte Muster und erlaubt Dekoratoren, Anwendungsverhalten deklarativ statt imperativ zu kontrollieren.

---

### DTOs (Data Transfer Objects)

**English:**
DTOs are objects that define how data should be sent over the network. They encapsulate data transfer logic, provide type safety, and enable validation. DTOs are plain TypeScript classes with validation decorators.

**Purpose:**

1. **Validation:** Define what data is acceptable
2. **Type Safety:** TypeScript typing for request/response data
3. **Documentation:** Self-documenting API contracts
4. **Transformation:** Control how data is serialized/deserialized
5. **Security:** Prevent mass-assignment vulnerabilities

**Example:**

```typescript
// create-user.dto.ts
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsIn(["user", "admin"])
  role?: string;
}

// update-user.dto.ts
export class UpdateUserDto extends PartialType(CreateUserDto) {}
// All fields from CreateUserDto become optional
```

**Best Practices:**

- One DTO per operation (CreateUserDto, UpdateUserDto)
- Use validation decorators
- Keep DTOs simple and focused
- Use PartialType() utility for update DTOs
- Never use entities as DTOs

**PartialType Utility:**

```typescript
import { PartialType } from "@nestjs/mapped-types";

export class UpdateUserDto extends PartialType(CreateUserDto) {}
// Equivalent to:
// {
//   email?: string;
//   password?: string;
//   role?: string;
// }
```

**Deutsch:**
DTOs sind Objekte, die definieren, wie Daten über das Netzwerk gesendet werden sollen. Sie kapseln Datenübertragungslogik, bieten Typsicherheit und ermöglichen Validierung. DTOs sind einfache TypeScript-Klassen mit Validierungsdekoratoren.

**Zweck:**

1. **Validierung:** Definieren, welche Daten akzeptabel sind
2. **Typsicherheit:** TypeScript-Typisierung für Request/Response-Daten
3. **Dokumentation:** Selbst-dokumentierende API-Verträge
4. **Transformation:** Kontrolle, wie Daten serialisiert/deserialisiert werden
5. **Sicherheit:** Verhindern von Mass-Assignment-Schwachstellen

**Best Practices:**

- Ein DTO pro Operation (CreateUserDto, UpdateUserDto)
- Validierungsdekoratoren verwenden
- DTOs einfach und fokussiert halten
- PartialType() Utility für Update-DTOs verwenden
- Niemals Entities als DTOs verwenden

---

### Execution Context

**English:**
ExecutionContext is an abstraction that provides details about the current request being processed. It's available in guards, interceptors, and exception filters. It works across different contexts (HTTP, WebSockets, Microservices).

**Methods:**

```typescript
// Get current execution context type
context.getType(); // 'http', 'ws', 'rpc'

// Switch to specific context
const http = context.switchToHttp();
const request = http.getRequest();
const response = http.getResponse();

// Get handler and class references
const handler = context.getHandler(); // Method reference
const controller = context.getClass(); // Controller class
```

**Example in Guard:**

```typescript
canActivate(context: ExecutionContext): boolean {
  const request = context.switchToHttp().getRequest();
  const user = request.user; // Attached by previous guard
  const token = request.headers.authorization;

  // Make authorization decision based on context
  return this.authService.validateToken(token);
}
```

**Why it's important:** ExecutionContext provides a consistent API for accessing request details across different transport layers, making guards and interceptors reusable.

**Deutsch:**
ExecutionContext ist eine Abstraktion, die Details über die aktuell verarbeitete Anfrage bereitstellt. Er ist in Guards, Interceptors und Exception-Filtern verfügbar. Er funktioniert über verschiedene Kontexte hinweg (HTTP, WebSockets, Microservices).

**Warum es wichtig ist:** ExecutionContext bietet eine konsistente API für den Zugriff auf Request-Details über verschiedene Transport-Layer hinweg und macht Guards und Interceptors wiederverwendbar.

---

### Authentication vs Authorization

**English:**

These are two distinct but related concepts that are often confused:

**Authentication (Who are you?):**

- Verifying the identity of a user
- Confirming credentials (email/password, token)
- Answering: "Are you who you claim to be?"
- Happens first in the security pipeline

**In our project:**

- JwtAuthGuard handles authentication
- LocalAuthGuard handles login authentication
- Validates JWT tokens and passwords

**Authorization (What can you do?):**

- Determining what an authenticated user can access
- Checking permissions and roles
- Answering: "Do you have permission to do this?"
- Happens after authentication

**In our project:**

- RolesGuard handles authorization
- Checks user roles (admin, user)
- Enforces access control policies

**Example Flow:**

```
1. User sends request with JWT token
   ↓
2. JwtAuthGuard (Authentication)
   - Validates token
   - Extracts user info
   - Attaches user to request
   ↓
3. RolesGuard (Authorization)
   - Checks user.role
   - Compares with required roles
   - Allows/denies access
   ↓
4. Route Handler
   - Executes business logic
```

**Real-world analogy:**

- **Authentication:** Showing your ID card at airport security (proving who you are)
- **Authorization:** Your boarding pass determining which gate/flight you can access (what you can do)

**Deutsch:**

Dies sind zwei unterschiedliche, aber verwandte Konzepte, die oft verwechselt werden:

**Authentifizierung (Wer bist du?):**

- Überprüfung der Identität eines Benutzers
- Bestätigung von Anmeldedaten (E-Mail/Passwort, Token)
- Beantwortung: "Bist du, wer du vorgibst zu sein?"
- Geschieht zuerst in der Sicherheits-Pipeline

**In unserem Projekt:**

- JwtAuthGuard behandelt Authentifizierung
- LocalAuthGuard behandelt Login-Authentifizierung
- Validiert JWT-Token und Passwörter

**Autorisierung (Was darfst du tun?):**

- Bestimmung, worauf ein authentifizierter Benutzer zugreifen kann
- Prüfung von Berechtigungen und Rollen
- Beantwortung: "Hast du die Erlaubnis, dies zu tun?"
- Geschieht nach Authentifizierung

**In unserem Projekt:**

- RolesGuard behandelt Autorisierung
- Prüft Benutzerrollen (admin, user)
- Erzwingt Zugriffskontroll-Richtlinien

**Real-world Analogie:**

- **Authentifizierung:** Ausweis bei Flughafen-Sicherheit zeigen (beweisen, wer du bist)
- **Autorisierung:** Boardingkarte bestimmt, zu welchem Gate/Flug du Zugang hast (was du tun darfst)

---

### Dependency Injection (DI)

**English:**
Dependency Injection is a design pattern where objects receive their dependencies from external sources rather than creating them internally. NestJS has a powerful built-in DI container that manages object lifecycles and dependencies.

**Without DI (Tight Coupling):**

```typescript
class AuthService {
  private usersService: UsersService;

  constructor() {
    this.usersService = new UsersService(); // Hard dependency
  }
}
```

**With DI (Loose Coupling):**

```typescript
@Injectable()
class AuthService {
  constructor(private usersService: UsersService) {}
  // NestJS automatically provides UsersService instance
}
```

**Benefits:**

1. **Testability:** Easy to mock dependencies in tests
2. **Flexibility:** Easy to swap implementations
3. **Maintainability:** Changes in one place don't break others
4. **Single Responsibility:** Classes focus on their logic, not dependency management

**How it works in NestJS:**

1. **Mark class as injectable:**

```typescript
@Injectable()
export class UsersService {}
```

2. **Provide in module:**

```typescript
@Module({
  providers: [UsersService], // Available for injection
  exports: [UsersService], // Available to other modules
})
export class UsersModule {}
```

3. **Inject into other classes:**

```typescript
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}
}
```

**Injection Scopes:**

- **DEFAULT:** Singleton - one instance shared across app (most common)
- **REQUEST:** New instance per request
- **TRANSIENT:** New instance every time injected

**Deutsch:**
Dependency Injection ist ein Design-Pattern, bei dem Objekte ihre Abhängigkeiten von externen Quellen erhalten, anstatt sie intern zu erstellen. NestJS hat einen leistungsstarken eingebauten DI-Container, der Objekt-Lebenszyklen und Abhängigkeiten verwaltet.

**Vorteile:**

1. **Testbarkeit:** Einfaches Mocken von Abhängigkeiten in Tests
2. **Flexibilität:** Einfacher Austausch von Implementierungen
3. **Wartbarkeit:** Änderungen an einer Stelle brechen andere nicht
4. **Single Responsibility:** Klassen fokussieren sich auf ihre Logik, nicht auf Dependency-Management

**Injection-Scopes:**

- **DEFAULT:** Singleton - eine Instanz für die ganze App (am häufigsten)
- **REQUEST:** Neue Instanz pro Request
- **TRANSIENT:** Neue Instanz bei jeder Injektion

---

### Modules / Module

**English:**
Modules are the fundamental building blocks of NestJS applications. Each module encapsulates a closely related set of capabilities. Modules organize code into cohesive, reusable units.

**Module Structure:**

```typescript
@Module({
  imports: [
    // Modules this module depends on
    TypeOrmModule.forFeature([User]),
    JwtModule.register({ secret: "secret" }),
  ],
  controllers: [
    // Controllers in this module
    UsersController,
  ],
  providers: [
    // Services and other providers
    UsersService,
  ],
  exports: [
    // What other modules can use
    UsersService,
  ],
})
export class UsersModule {}
```

**Module Properties:**

1. **imports:** Other modules needed by this module
2. **controllers:** Controllers defined in this module
3. **providers:** Services, repositories, factories available in this module
4. **exports:** Make providers available to other modules

**Module Types:**

**Feature Modules:**
Organize code by feature (UsersModule, AuthModule, QuotesModule)

**Shared Modules:**
Provide common functionality across features

**Global Modules:**
Available everywhere without importing

```typescript
@Global()
@Module({})
export class CommonModule {}
```

**Dynamic Modules:**
Modules with configuration

```typescript
JwtModule.register({
  secret: "secret",
  signOptions: { expiresIn: "1d" },
});
```

**Best Practices:**

- One module per feature
- Keep modules focused and cohesive
- Export only what's necessary
- Use barrel exports (index.ts)

**Deutsch:**
Module sind die fundamentalen Bausteine von NestJS-Anwendungen. Jedes Modul kapselt eine eng verwandte Gruppe von Fähigkeiten. Module organisieren Code in kohäsive, wiederverwendbare Einheiten.

**Modul-Eigenschaften:**

1. **imports:** Andere Module, die von diesem Modul benötigt werden
2. **controllers:** Controller in diesem Modul definiert
3. **providers:** Services, Repositories, Factories verfügbar in diesem Modul
4. **exports:** Stellt Provider anderen Modulen zur Verfügung

**Best Practices:**

- Ein Modul pro Feature
- Module fokussiert und kohäsiv halten
- Nur Notwendiges exportieren
- Barrel Exports verwenden (index.ts)

---

## Summary / Zusammenfassung

**English:**

This project demonstrates a complete, production-ready authentication system using industry-standard technologies and best practices:

**Technology Stack:**

- **Runtime:** Node.js + TypeScript for type-safe server-side development
- **Framework:** NestJS for scalable, maintainable architecture
- **Database:** TypeORM + SQLite for easy development, ready to switch to PostgreSQL/MySQL
- **Authentication:** JWT + Passport for stateless, secure authentication
- **Security:** bcrypt for password hashing, Guards for authorization
- **Validation:** class-validator + class-transformer for request validation

**Key Patterns:**

- **Dependency Injection:** Loose coupling, testability
- **Guard-Based Security:** Layered authentication and authorization
- **DTO Pattern:** Data validation and transformation
- **Modular Architecture:** Organized, scalable codebase
- **Metadata Reflection:** Declarative security with decorators

**Security Layers:**

1. Password hashing with bcrypt
2. JWT token-based authentication
3. Guard-based route protection
4. Role-based access control
5. Input validation with DTOs
6. CORS configuration

**Deutsch:**

Dieses Projekt demonstriert ein vollständiges, produktionsbereites Authentifizierungssystem unter Verwendung von Industriestandard-Technologien und Best Practices:

**Technologie-Stack:**

- **Laufzeit:** Node.js + TypeScript für typsichere serverseitige Entwicklung
- **Framework:** NestJS für skalierbare, wartbare Architektur
- **Datenbank:** TypeORM + SQLite für einfache Entwicklung, bereit zum Wechsel auf PostgreSQL/MySQL
- **Authentifizierung:** JWT + Passport für zustandslose, sichere Authentifizierung
- **Sicherheit:** bcrypt für Passwort-Hashing, Guards für Autorisierung
- **Validierung:** class-validator + class-transformer für Request-Validierung

**Schlüssel-Patterns:**

- **Dependency Injection:** Lose Kopplung, Testbarkeit
- **Guard-basierte Sicherheit:** Mehrschichtige Authentifizierung und Autorisierung
- **DTO-Pattern:** Datenvalidierung und -transformation
- **Modulare Architektur:** Organisierte, skalierbare Codebasis
- **Metadaten-Reflektion:** Deklarative Sicherheit mit Dekoratoren

**Sicherheits-Schichten:**

1. Passwort-Hashing mit bcrypt
2. JWT Token-basierte Authentifizierung
3. Guard-basierter Routenschutz
4. Rollenbasierte Zugriffskontrolle
5. Eingabevalidierung mit DTOs
6. CORS-Konfiguration

---

## Further Learning / Weiterführendes Lernen

**English:**

To deepen your understanding:

1. **NestJS Documentation:** https://docs.nestjs.com
2. **TypeORM Documentation:** https://typeorm.io
3. **JWT.io:** https://jwt.io - Decode and learn about JWTs
4. **Passport.js:** http://www.passportjs.org
5. **OWASP Security Guidelines:** https://owasp.org

**Topics to explore:**

- Refresh tokens
- OAuth2 and social login
- Two-factor authentication (2FA)
- Rate limiting and throttling
- API versioning
- GraphQL with NestJS
- Microservices architecture
- Testing (unit, integration, e2e)

**Deutsch:**

Um Ihr Verständnis zu vertiefen:

1. **NestJS Dokumentation:** https://docs.nestjs.com
2. **TypeORM Dokumentation:** https://typeorm.io
3. **JWT.io:** https://jwt.io - JWTs dekodieren und lernen
4. **Passport.js:** http://www.passportjs.org
5. **OWASP Sicherheits-Richtlinien:** https://owasp.org

**Zu erkundende Themen:**

- Refresh-Token
- OAuth2 und Social Login
- Zwei-Faktor-Authentifizierung (2FA)
- Rate-Limiting und Throttling
- API-Versionierung
- GraphQL mit NestJS
- Microservices-Architektur
- Testing (Unit, Integration, E2E)

---

**Last Updated / Zuletzt aktualisiert:** November 2025
