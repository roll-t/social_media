import { Posts } from "@/data/posts"
import PostCard from "./PostCard";
import { users } from "@/data/users";
import UserCard from "@/components/shared/UserCard";

export default function Home() {
  const Post = Posts;

  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();

  const creators= users;

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <h2 className="w-full text-left h2-bold">Feed Home</h2>
        <div className="home-post">
          <ul>
            {
              Post.map((items, index) => (
                <PostCard
                  key={index}
                  name={items.name}
                  description={items.description}
                  imageURL={items.imageURL}
                  tags={items.tags}
                  location="Cần Thơ"
                  date={`${day}/${month}/${year}`}
                />
              ))
            }
          </ul>
        </div>
      </div>
      <div className="home-creators">
        <h3 className="h3-bold text-light-1">Top Creators</h3>
        <ul className="grid 2xl:grid-cols-2 gap-6">
          {creators?.map((creator) => (
            <li key={creator?.userId}>
              <UserCard user={creator} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
