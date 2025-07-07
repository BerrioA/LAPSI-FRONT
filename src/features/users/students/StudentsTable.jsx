import { useEffect } from "react";
import { Error, Loading, UserTable } from "../../../components";
import { userStore } from "../../../stores";

export const StudentsTable = () => {
  const { fetchUsers, users, loading, error } = userStore();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-full overflow-x-auto rounded-lg shadow-md">
        {loading && <Loading />}
        {error && <Error textError={error} />}
        <UserTable users={users} />
      </div>
    </div>
  );
};
