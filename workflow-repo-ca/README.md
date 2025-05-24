# Holidaze Venue Booking App

A static frontend application for browsing and booking venues, built with vanilla JavaScript, Tailwind CSS, and HTML.

## Features

- Browse list of venues
- View detailed information for each venue
- User login and registration flows
- Display friendly success and error messages
- Responsive design for mobile and desktop

## Tech Stack

- **HTML5 & CSS3** (Tailwind CSS)
- **JavaScript** (ES6+)
- **Vitest** for unit testing
- **Playwright** for end-to-end testing

## Installation

```bash
npm install
```

## Development

Build and watch Tailwind CSS for changes:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Scripts

- `npm run dev` — build and watch Tailwind CSS
- `npm test` — run unit tests (Vitest)
- `npm run e2e` — run Playwright end-to-end tests

## Environment Variables

Create a `.env` file at the project root with the following:

```dotenv
# Required for Playwright tests
LOGIN_EMAIL=your-login-email@example.com
LOGIN_PASSWORD=your-login-password

# Optional: override default base URL (default: http://localhost:3000)
BASE_URL=http://localhost:3000
```

> `.env` is listed in `.gitignore`. Do not commit your real credentials.

## Testing

### Unit Tests

Run Vitest suite:

```bash
npm test
```

### End-to-End Tests

Start the local server and run Playwright:

```bash
npm run e2e
```

