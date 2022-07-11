import { CmsMovie, Movie, StrapiRestError } from "@utils/types";
import qs from "qs";

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
}

export const serverSideFetchMovies = async () => {
  const data = await fetchAPI("/movies");
  const movies: CmsMovie[] = data.data;
  return movies;
};

export const updateLikes = async (id: number, likes: number) => {
  const path = `${getStrapiURL(`/api/movies/${id}`)}`;
  await fetch(path, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: { likes } }),
  });
};

export const addMovie = async (movie: { title: string; slug: string }) => {
  const path = `${getStrapiURL(`/api/movies`)}`;
  const res = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: { ...movie } }),
  });
  if (res.status === 200) {
    const data: { data: { id: number; attributes: Movie } } = await res.json();
    return data.data.id;
  } else {
    const error: StrapiRestError = await res.json();
    throw error.error.name;
  }
};

export const getMovie = async (id: number) => {
  const data = await fetchAPI(`/movies/${id}`);
  const movies: CmsMovie = data.data;
  return movies;
};
