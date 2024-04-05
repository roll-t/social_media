import { Link } from "react-router-dom";
import PostStats from '@/components/shared/PostStarts';
import { IPost } from "@/types";

type GridPostListProps = {
  posts: IPost[];
  showUser?: boolean;
  showStats?: boolean;
};

const GridPostList = ({
  posts,
  showUser = true,
  showStats = true,
}: GridPostListProps) => {
  return (
    <ul className="grid-container">
      {posts.map((post) => (
        <li key={post.id} className="relative min-w-80 h-80">
          <Link to={`/post/${post.id}`} className="grid-post_link">
            <img
              src={`/assets/images/${post.imageURL}`}
              alt="post"
              className="h-full w-full object-cover"
            />
          </Link>

          <div className="grid-post_user">
            {showUser && (
              <div className="flex items-center justify-start gap-2 flex-1">
                <img
                  src={"/assets/icons/profile-placeholder.svg"}
                  alt="creator"
                  className="w-8 h-8 rounded-full"
                />
                <p className="line-clamp-1">{'phuoc truong'}</p>
              </div>
            )}
            {showStats && <PostStats />}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GridPostList;
