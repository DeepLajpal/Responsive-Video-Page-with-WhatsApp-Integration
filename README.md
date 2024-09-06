# Responsive Video Page with WhatsApp Integration

## A fully responsive web page featuring a video section and a form that collects user details. The form submission sends data to WhatsApp and redirects users to a thank you page. Includes client-side validation and deployed on Vercel.

### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [License](#license)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/responsive-video-page-with-whatsapp-integration.git
    ```
2. Navigate to the project directory:
    ```sh
    cd responsive-video-page-with-whatsapp-integration
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Usage

To start the development server, run:
```sh
npm run dev
```

To build the project for production, run:
```sh
npm run build
```

To preview the production build, run:
```sh
npm run preview
```

To lint the code, run:
```sh
npm run lint
```

### Project Structure

```
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── public/
├── README.md
├── src/
│   ├── App.jsx
│   ├── App.module.scss
│   ├── assets/
│   ├── components/
│   │   └── UserForm.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── pages/
│   │   ├── AcknowledgmentPage.jsx
│   │   ├── ErrorPage.jsx
│   │   └── HomePage.jsx
├── tailwind.config.js
├── vite.config.js
```

### Scripts

- `dev`: Starts the development server.
- `build`: Builds the project for production.
- `lint`: Lints the codebase.
- `preview`: Previews the production build.

### Technologies Used

- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework.
- Vite: A build tool that provides a faster and leaner development experience.
- PostCSS: A tool for transforming CSS with JavaScript plugins.
- ESLint: A tool for identifying and fixing problems in JavaScript code.
- Prettier: An opinionated code formatter.

