import useSWR from "swr";
import Player from "./Player";
import { getUsersUrl, fetcher } from "../api/http";
import Heading from "./Heading";
import { useState } from "react";
import EditAudio from "./EditAudio";

function UserList() {
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    setIsEditing((prevState) => !prevState);
  };

  const { data, error } = useSWR(getUsersUrl, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="md:w-auto sm:w-11/12 m-auto mt-20 bg-gray-50 p-20 rounded-xl shadow-lg shadow-gray-200/50">
      <Heading />
      <ol class="mt-10 relative border-l border-gray-200 dark:border-gray-700">
        {data.map((user) => (
          <li key={user?.id} class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {user?.company}
            </time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {user?.name}
            </h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Age: {user?.age} | Gender: {user?.gender?.toUpperCase()} |
              Balance: {user?.balance}
            </p>
            <div className="flex align-center">
              {!isEditing && (
                <Player handleClick={handleEdit} audio={user?.audio} />
              )}
              {isEditing && (
                <EditAudio closeEditing={handleEdit} userId={user?.id} />
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default UserList;
