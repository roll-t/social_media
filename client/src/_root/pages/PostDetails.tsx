import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PostStarts from "../../components/shared/PostStarts";
import { Posts } from "@/data/posts";
import GridPostList from "@/components/shared/GridPostList";


const PostDetails = () => {
  const isLoading = false;
  const posts = Posts
  const tags = ['javascript, c++, python, kotlin']
  return (

    <div className="post_details-container">
      <div className="hidden md:flex max-w-5xl w-full">
        <Button
          variant="ghost"
          className="shad-button_ghost">
          <img
            src={"/assets/icons/back.svg"}
            alt="back"
            width={24}
            height={24}
          />
          <p className="small-medium lg:base-medium">Back</p>
        </Button>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="post_details-card">
          <img
            src='/assets/images/post.png'
            alt="creator"
            className="post_details-img"
          />

          <div className="post_details-info">
            <div className="flex-between w-full">
              <Link
                to={`/profile/1`}
                className="flex items-center gap-3">
                <img
                  src={
                    "/assets/icons/profile-placeholder.svg"
                  }
                  alt="creator"
                  className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
                />
                <div className="flex gap-1 flex-col">
                  <p className="base-medium lg:body-bold text-light-1">
                    {"phuoc truong den day"}
                  </p>
                  <div className="flex-center gap-2 text-light-3">
                    <p className="subtle-semibold lg:small-regular ">
                      {'11/02/2024'}
                    </p>
                    •
                    <p className="subtle-semibold lg:small-regular">
                      {"cần thơ"}
                    </p>
                  </div>
                </div>
              </Link>

              <div className="flex-center gap-4">
                <Link
                  to={`/update-post/1`}>
                  <img
                    src={"/assets/icons/edit.svg"}
                    alt="edit"
                    width={24}
                    height={24}
                  />
                </Link>

                <Button
                  variant="ghost"
                  className={`ost_details-delete_btn`}>
                  <img
                    src={"/assets/icons/delete.svg"}
                    alt="delete"
                    width={24}
                    height={24}
                  />
                </Button>
              </div>
            </div>

            <hr className="border w-full border-dark-4/80" />

            <div className="flex flex-col flex-1 w-full small-medium lg:base-regular">
              <p>{"caption wrting this here"}</p>
              <ul className="flex gap-1 mt-2">
                {tags.map((items, index) => (
                  <li key={index} className="text-light-3 small-regular cursor-pointer">#{items}</li>
                ))}
              </ul>
            </div>

            <div className="w-full">
              <PostStarts />
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-5xl">
        <hr className="border w-full border-dark-4/80" />

        <h3 className="body-bold md:h3-bold w-full my-10">
          More Related Posts
        </h3>
        <GridPostList posts={posts} />
      </div>
    </div>
  );
};

export default PostDetails;