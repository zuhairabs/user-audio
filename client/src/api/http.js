export const getUsersUrl = "http://localhost:3000/users";
export const fetcher = (url) => fetch(url).then((res) => res.json());
