export const addMovie = async (title: string) => {
  try {
    const res = await fetch("/api/movies", {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    const { id } = await res.json();
    return id;
  } catch (error) {
    console.error(error);
  }
};
