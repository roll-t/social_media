import GridPostList from "@/components/shared/GridPostList";
import { Posts } from "@/data/posts";

const LikedPosts = () => {

const posts = Posts;
  return (
    <>
      {false && (
        <p className="text-light-4">No liked posts</p>
      )}

      <GridPostList posts={posts} showStats={false} />
    </>
  );
};

export default LikedPosts;