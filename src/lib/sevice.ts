import axios from "axios";

const api_key =
  "live_S1lJoq0pONP3VNf88wMyamr5ZGILYlJmgJI6uF5uWfvzCnwb2tkGrgudlKA355Wf";

export const handleGetCat = async () => {
  const res = await axios.get(
    ` https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${api_key}`,
  );

  return res.data;
};
