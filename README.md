# Video Store Application

A single page React/TypeScript application which displays a list of movie titles.

## Quick Start

You'll need to open two terminals; one will be at the project root for the frontend application and the other will be in the `backend` folder.

1. From frontend terminal: `yarn && yarn dev`; the client UI will be served at [localhost:3000](http://localhost:3000)
2. From backend terminal: `yarn && yarn develop`; the CMS UI will be served at [localhost:1337/admin](http://localhost:1337/admin)

## Frontend

- Displays a list of cards, where each card shows the title of a movie and has a "like" button.
- The list of cards can be shifted by using drag and scroll or through the scroll wheel on a mouse or using via a trackpad (not tested on mobile).
- The like button increments a counter for the particular move and is persistent between app instances.
- The icon will change as more likes are added; starts as a thumbs-up, then a heart, and finally a fire icon.
- An "Add Movie" button displays a form that the visitor can add the movie title, saving the new item to persistent storage.

## Backend

This backend uses Strapi with the default sqlLite3 serving as the DB; this makes a localhost version of the app easier to run.

## Todos

To make this a bit more complete (as far as a sample app might go) the following effort could be applied:

- Add bootstrap util for Strapi (one exists for the Firestore version).
- Add pagintation to the movie list. Put left/right chevrons to click direction instead of drag-and-scroll.
- Highlight the new movie entry, maybe by scrolling to it or by adding to the front of the list.
- Style it a lot better.
- Validation of the movie name before posting.
- Abstract out the DB APIs so that another backend could be used (the UI works under Firestore and Strapi, but requires a bit of work to swap out).
- Add scripts to [package.json](package.json) for deployment and bootstrapping.
- Handle network errors (better).
