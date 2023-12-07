# Movie Watchlist Web App

This Angular project is a web application designed for movie enthusiasts to explore and manage their movie preferences. The application provides features for finding movies, adding them to a watchlist, and viewing detailed information about each movie.

## Features

1. **Movie Search and Filtering:**
   - Users can search for movies by title.
   - The application offers a custom pipe for filtering movies by title and release date.

2. **Movie Details:**
   - Clicking on a movie thumbnail navigates users to a detailed view.
   - The detailed view showcases information such as title, description, rating, duration, genre, and release date.

3. **Watchlist Management:**
   - Users can add movies to their watchlist.
   - The watchlist is stored in the local storage, providing a persistent user experience.

4. **Star Rating System:**
   - A custom pipe converts numerical movie ratings into a visual star rating.
   - For example, a rating of 3.5 will be displayed as ⭐⭐⭐½.

## Custom Pipes

1. **FilterPipe:**
   - Enables users to search for movies by title or release date.

2. **StarRatingPipe:**
   - Transforms numerical ratings into a visual star rating for a more engaging user interface.

## How to Use

1. **Search for Movies:**
   - Use the search bar to find movies by title.

2. **Explore Movie Details:**
   - Click on a movie thumbnail to view detailed information.

3. **Manage Watchlist:**
   - Add movies to the watchlist for future reference.
   - Remove movies from the watchlist as preferences change.

4. **Visual Ratings:**
   - Ratings are visually represented using star icons for a quick and intuitive understanding.

## Additional Notes

- The project incorporates Angular best practices for project structure and component architecture.
- Custom pipes enhance user interactions by providing efficient search and visually appealing ratings.
- The watchlist functionality ensures that users can save and revisit their favorite movies.

Feel free to explore, discover new movies, and curate your personal watchlist with this Movie Watchlist Web App!
