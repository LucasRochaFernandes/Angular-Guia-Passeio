# Guia Passeio - Angular Showcase Project

[](https://angular.io/)
[](https://primeng.org/)
[](https://tailwindcss.com/)
[](https://www.google.com/search?q=LICENSE)

This project is a web application called "Guia Passeio" (Tour Guide), developed to showcase and practice key skills in Angular. The application allows users to register, manage, and discover tourist spots, serving as a practical demonstration of building a modern, feature-rich Single Page Application (SPA).

## Core Features

  - **Dynamic Feature Modules:** The application is structured with modules for different features like Categories and Spots.
  - **CRUD Operations:** Full Create, Read, Update, and Delete functionality for managing `Categories` and `Spots`.
  - **Reactive Forms:** Robust forms with custom validation for data entry.
  - **Component-Based UI:** A rich user interface built with the **PrimeNG** component library.
  - **Responsive Design:** A modern, mobile-first interface styled with **Tailwind CSS**.
  - **Mock Backend:** Uses **JSON Server** to simulate a full RESTful API for a complete development experience.

## Tech Stack

This project was built using a modern and powerful set of tools, demonstrating proficiency in the Angular ecosystem.

  - **Frontend Framework**: Angular 19, TypeScript, RxJS
  - **UI Component Library**: PrimeNG
  - **Styling**: Tailwind CSS
  - **Mock API Server**: JSON Server
  - **Code Formatting**: Prettier
  - **Core Dependencies**:
      - `@angular/common`, `@angular/core`, `@angular/forms`, `@angular/router`
      - `primeng` and `@primeng/themes`

## Getting Started

To get a local copy up and running, please follow these steps.

### Prerequisites

Make sure you have Node.js (v18 or higher) and the Angular CLI installed on your machine.

  - Node.js: `https://nodejs.org/`
  - Angular CLI: `npm install -g @angular/cli`

### Installation & Setup

1.  **Clone the repository**
    ```sh
    git clone https://github.com/your-username/passeio-app.git
    ```
2.  **Navigate to the project directory**
    ```sh
    cd passeio-app
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```

### Running the Application

This project requires **two terminals** running concurrently: one for the mock API and one for the Angular application.

1.  **Terminal 1: Start the Mock API Server**
    This command starts the JSON Server, which will serve data from the `api/db.json` file.

    ```sh
    npm run server
    ```

    The API will be available at `http://localhost:3000`.

2.  **Terminal 2: Start the Angular Development Server**
    This command compiles and serves the Angular application.

    ```sh
    npm run start
    ```

    Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Available Scripts

This project includes several useful scripts defined in `package.json`:

  - `npm run start`: Runs the Angular development server.
  - `npm run server`: Runs the JSON Server mock API.
  - `npm run build`: Builds the application for production.
  - `npm run test`: Runs the unit tests via Karma and Jasmine.
  - `npm run format`: Formats all source files using Prettier.