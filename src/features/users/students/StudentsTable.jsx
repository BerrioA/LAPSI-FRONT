import { useEffect } from "react";
import { Error, Loading, UserTable } from "../../../components";
import { userStore } from "../../../stores";

export const StudentsTable = () => {
  const { fetchUsers, users, loading, error } = userStore();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {error && <Error textError={error} />}
      <UserTable users={users} />
    </div>
  );
};
