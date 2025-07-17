# 🎬 Movify — React Movie Search App

Movify is a modern and responsive movie search app built with **React** using the **TMDB (The Movie Database) API**. It allows users to search for movies by name and view details like release date, rating, and overview. The app provides a smooth UX using features like skeleton loading, a "no results" fallback UI, and React best practices.

---

## 🌐 Demo

Check out the live demo on Netlify:  
[https://movifynitin.netlify.app/](https://movifynitin.netlify.app/)

## 🚀 Features

### 🔍 Search Functionality
- Real-time movie search using the **TMDB API**
- Handles user input dynamically through controlled components
- API query is triggered only on form submission for performance

### 🧠 React Concepts Practiced
- **Functional Components** and **Hooks**: `useState`, `useEffect`
- Controlled forms with React state
- Dynamic rendering of components using `.map()`
- API calls with `fetch` and async/await
- Error handling using try/catch

### 📦 Component Architecture
- `App.jsx`: Root container
- `SearchMovies.jsx`: Handles input, API fetch, and displays results
- `MovieCard.jsx`: Displays individual movie details
- `SkeletonCard.jsx`: Animated placeholder cards during loading
- `NoResultsFound.jsx`: Friendly UI for empty search results
- `Footer.jsx`: Consistent footer branding

### 💅 UX Enhancements
- **Skeleton Loading**: Beautiful shimmer cards while data is loading
- **No Results UI**: Graphic and message if no movies match the search
- **Responsive Layout**: CSS Grid and media queries for all screen sizes
- **Card Hover Animation**: Smooth scale and shadow effects
- **Custom Styling**: Handwritten CSS, scalable `rem`-based layout

---

## 🧑‍💻 What I Learned

### ✅ Core React Skills
- Creating **reusable components**
- Building and styling controlled forms
- Managing **component state and props**
- How to use **conditional rendering** for loading and empty states

### ✅ Practical UI Techniques
- Creating custom **skeleton components** to simulate loading
- Designing with **grid layouts** and **responsive media queries**
- Handling **form events** with controlled components
- Using **keyframes and transitions** for animations

---

## 🧪 Try It Yourself

Clone the repo and install dependencies:

```bash
git clone https://github.com/yourusername/movify.git
cd movify
npm install
npm run dev  