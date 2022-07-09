/**
 * @remarks
 * This is substitue for using a full localiation library.
 * Keeping text together like this makes it easier to edit and review, plus changing this file will not conflict with work other files. If the site needs to be localized, this becomes the starting point for that (usually using i18next)
 */
export const txt = {
  copyright: "Copyright",
  nav: {
    title: "Welcome to Movie Central!",
  },
  buttons: {
    addNewMovie: "Add New Movie",
  },
  modals: {
    addNewMovie: {
      title: "Add New Movie",
      label: "Movie Title",
      placeholder: "Name of movie",
      submit: "Add",
    },
  },
};
