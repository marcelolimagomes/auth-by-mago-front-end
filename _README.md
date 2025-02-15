# Auth by Mago - Front-End

## Introduction

Hello, my name is Marcelo. Welcome to my Git repository, which I use to share my learning journey in Data Science, Machine Learning, and Artificial Intelligence. 

### I welcome suggestions!
#### I invite you to connect with me on LinkedIn:
[LinkedIn: Marcelo Lima Gomes](https://www.linkedin.com/in/marcelolimagomes)
[E-mail: marcelolimagomes@gmail.com](mailto:marcelolimagomes@gmail.com)

---

This is the front-end Angular application for the Auth by Mago project. It integrates with the back-end Spring Security application (auth-by-mago-back-end) to provide a user-friendly interface for authentication, user management, and profile management.

## Features

- **Login**: Authenticate users using JWT (JSON Web Token).
- **User Management**: Perform CRUD operations for users.
- **Profile Management**: Perform CRUD operations for user profiles.

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (v16 or higher)
- Angular CLI (v15 or higher)
- Git

## Setup Instructions

### 1. Clone the Repository

Clone the auth-by-mago-front-end repository from GitHub:

```bash
git clone https://github.com/your-username/auth-by-mago-front-end.git
cd auth-by-mago-front-end
```

### 2. Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

### 3. Configure the Back-End URL

Ensure the back-end Spring Security application (auth-by-mago-back-end) is running. Update the API URLs in the Angular services if necessary:

- `src/app/services/auth.service.ts`
- `src/app/services/user.service.ts`
- `src/app/services/profile.service.ts`

For example:

```typescript
private apiUrl = 'http://localhost:8080/authenticate'; // Update if your back-end runs on a different port or host
```

### 4. Run the Application

Start the Angular development server:

```bash
ng serve
```

The application will be available at:

```plaintext
http://localhost:4200
```

### 5. Access the Application

Open your browser and navigate to `http://localhost:4200`.

- Use the login page to authenticate.
- Navigate to the User Management and Profile Management sections to perform CRUD operations.

## Project Structure

```plaintext
auth-by-mago-front-end/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── login/               # Login component
│   │   │   ├── user-crud/           # User CRUD component
│   │   │   ├── profile-crud/        # Profile CRUD component
│   │   │   ├── navbar/              # Navigation bar component
│   │   │   └── home/                # Home component
│   │   ├── services/
│   │   │   ├── auth.service.ts      # Authentication service
│   │   │   ├── user.service.ts      # User management service
│   │   │   └── profile.service.ts   # Profile management service
│   │   ├── guards/
│   │   │   └── auth.guard.ts        # Authentication guard
│   │   ├── app-routing.module.ts    # Routing configuration
│   │   └── app.component.*          # Root component
│   ├── assets/                      # Static assets (images, styles, etc.)
│   └── environments/                # Environment configuration
├── angular.json                     # Angular CLI configuration
├── package.json                     # Project dependencies
└── README.md                        # This file
```

## Back-End Integration

This front-end application is designed to work with the auth-by-mago-back-end Spring Security application. Ensure the back-end is running and accessible at `http://localhost:8080` (or update the API URLs in the Angular services accordingly).

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push to your fork.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- **Angular**: Front-end framework.
- **Spring Security**: Back-end authentication and authorization.
- **JWT**: JSON Web Tokens for secure authentication.

## Contact

For questions or feedback, please contact:

**Marcelo Lima Gomes**  
Email: marcelolimagomes@gmail.com
GitHub: [your-username](https://github.com/marcelolimagomes)
---
Enjoy using Auth by Mago! 🚀
---

