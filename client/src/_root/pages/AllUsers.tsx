import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { users } from "@/data/users";

const AllUsers = () => {

  const isLoading=false;

  const creators = users

  return (
    <div className="common-container">
      <div className="user-container">
        <h2 className="h3-bold md:h2-bold text-left w-full">All Users</h2>
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="user-grid">
            {creators?.map((creator) => (
              <li key={creator?.userId} className="flex-1 min-w-[200px] w-full  ">
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllUsers;