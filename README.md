# Frontend Application

This is a sample Angular frontend application with authentication, dashboard, and user management features.

## Features

- Login authentication
- Protected routes using Angular guards
- Dashboard with user list (fetched from public API)
- HTTP interceptor for token management
- Responsive UI with Bootstrap

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm (v8+ recommended)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. Open the folder in code editor and run:

   ```
   git clone <your-repo-url>
   cd frontend-application
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

Start the development server:

```
npm start
```

or

```
ng serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

### Project Structure

- `src/app/core` - services, guards, interceptors, constants
- `src/app/modules/auth` - Authentication module (login)
- `src/app/modules/home` - Home module (dashboard)
- `src/app/shared` - Shared models and enums

### Environment

- Public API: [dummyjson.com](https://dummyjson.com)
- Token stored in `localStorage` as `auth_token`

## Screenshots
  <img width="1600" height="785" alt="image" src="https://github.com/user-attachments/assets/9a593b60-6b78-4e8c-9ca1-964a0461a02a" />
  <img width="1600" height="769" alt="image" src="https://github.com/user-attachments/assets/fb5fee35-14d9-430c-a8fc-929c20e3cf54" />
  <img width="1600" height="580" alt="image" src="https://github.com/user-attachments/assets/f4cf5f58-f6d0-49df-bc56-c3433ecb44f8" />
  <img width="1600" height="527" alt="image" src="https://github.com/user-attachments/assets/1bba0e9a-19ad-47ba-b878-2186f6afe0ed" />
  <img width="1600" height="757" alt="image" src="https://github.com/user-attachments/assets/0211d614-519e-435c-b672-557ffef00e4b" />






## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
