import useSWR from "swr";
import { getUsersUrl, fetcher } from "./api/http";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";

function App() {
  const { data, error } = useSWR(getUsersUrl, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="flex justify-center flex-col">
      <Navbar />
      <UserList />
    </div>
  );
}

export default App;
