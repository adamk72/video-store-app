# Video Store Application

A single page React/TypeScript application which displays a list of movie titles.

## Frontend

- Displays a list of cards, where each card shows the title of a movie and has a "like" button
- The like button increments a counter for the particular move and is persistent between app instances.
- An "Add Movie" button displays a form that the visitor can add the movie title, saving the new item to persistent storage.

## Backend

The backend uses Firestore with a simple data schema:

```javascript
type Movies = { movies: Movie[] };

type Movie = {
  id: string, // created by Firestore upon add
  title: string,
  created: string,
  likes?: number | null,
  slug: string, // for future use; may use as simple criteria for title validation
};
```

Connecting to Firestore requires credential that are generated from the Firebase project (Project Overview -> Service Accounts). For deployment purposes, the resulting JSON file is base64 encoded and assigned to a environmental variable `SERVICE_ACCOUNT_KEY`. For `localhost` this would be put in `.env.local` so NextJS can pick it up.

The database can be initialized using the [bootstrapFirebase.js](src/utils/db/bootstrapFirebase.js) script from the command line (`node src/utils/db/bootstrapFirebase.js`).

## Todos

To make this a bit more complete (as far as a sample app might go) the following effort could be applied:

- Add pagintation to the movie list. Put left/right chevrons to click direction instead of drag-and-scroll.
- Style it a lot better.
- Validation of the movie name before posting.
- Abstract out the Firestore APIs so that another backend could be used.
- Add scripts to [package.json](package.json) for deployment and bootstrapping.
