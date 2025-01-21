# Cinequest Movie Search App

## About the Project
The Cinequest Movie Search App is a React-based web application that integrates with the [OMDB API](https://www.omdbapi.com/) to allow users to search for movies, view detailed information, and manage a list of favorites. The application is styled using Tailwind CSS and ensures a user-friendly experience for movie enthusiasts.

### Features
- **Search Movies:** Users can search for movies by title or keywords.
- **Filter by Type:** Includes a dropdown filter to sort movies by type (e.g., movie, series, episode) using the OMDB API endpoint.
- **Pagination:** Handles large sets of search results with pagination.
- **Detailed View:** Displays detailed information about each movie, including a larger poster, title, release year, genre, plot summary, ratings, and cast.
- **Error Handling:** Displays user-friendly messages in case of errors or no search results.
- **Navigation:** Uses React Router for seamless navigation between pages.

---

## Folder Structure

```
src
├── assets
├── components
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── MovieCard.jsx
│   ├── MovieDetails.jsx
│   ├── Pagination.jsx
│   ├── SearchBar.jsx
├── context
│   ├── MovieContext.jsx
├── pages
│   ├── Home.jsx
│   ├── MovieDetailsPage.jsx
├── services
│   ├── omdbService.js
├── App.css
├── App.jsx
├── index.css
├── main.jsx
├── router.jsx
.eslint.config.js
.gitignore
index.html
Logo.png
package-lock.json
package.json
postcss.config.cjs
README.md
```

---

## Getting Started

### Prerequisites
- Node.js and npm installed on your system.
- OMDB API Key (can be obtained from the [OMDB API website](https://www.omdbapi.com/apikey.aspx)).

### Installation
1. Clone the repository from GitHub:
   ```bash
   git clone https://github.com/Gokuljj/react-movie-search-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd cinequest-movie-search-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

The OMDB API key is handled in the services/omdbService.js file. Ensure the API key is added directly in this file as required.

### Running the Application
Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

---

## Deployment
The application is deployed on [Netlify](https://cinequest-movie-search-app.netlify.app/). For more details, refer to the live demo.

---

## Tech Stack
- **ReactJS**: For building the user interface.
- **React Router**: For navigation.
- **HTML/CSS and Tailwind CSS**: For styling.
- **JavaScript**: For functionality.

---

## Acknowledgments
- [OMDB API](https://www.omdbapi.com/)
- [Netlify](https://www.netlify.com/) for deployment.

---

## License
This project is open-source and is intended for educational purposes. Do not mention the company's name in the source code as per the provided terms and conditions.

---

## Live Demo
Check out the live application here: [Cinequest Movie Search App](https://cinequest-movie-search-app.netlify.app/)


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
