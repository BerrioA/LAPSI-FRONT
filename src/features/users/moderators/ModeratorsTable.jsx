import { UserTable } from "../../../components";
import { moderators } from "../../../const/usersTest";

export const ModeratorsTable = () => {
  return (
    <>
      <UserTable users={moderators} />
    </>
  );
};
