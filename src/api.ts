import axios from "axios";

// Get popular people
export const getPopularPeople = async (): Promise<any> => {
  const response: any = await axios
    .get(
      `https://api.themoviedb.org/3/person/popular?api_key=${
        import.meta.env.PUBLIC_API_KEY
      }&language=en-US&page=1`
    )
    .catch((error) => {
      console.log(error);
    });
  return response.data.results;
};

// Get the result of searching for a person by name
export const getSearchedPeople = async (input: string): Promise<any> => {
  const response: any = await axios
    .get(
      `https://api.themoviedb.org/3/search/person?query=${input}&api_key=${
        import.meta.env.PUBLIC_API_KEY
      }`
    )
    .catch((error) => {
      console.log(error);
    });
  return response.data.results;
};

// Get the credits of a single person's id
export const getCreditsPerPerson = async (id: string): Promise<any> => {
  const response: any = await axios
    .get(
      `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${
        import.meta.env.PUBLIC_API_KEY
      }&language=en-US`
    )
    .catch((error) => {
      console.log(error);
    });
  return response.data;
};
