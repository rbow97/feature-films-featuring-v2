import axios, { type AxiosResponse } from "axios";

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
