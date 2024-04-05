import GridPostList from "@/components/shared/GridPostList";
import { Button } from "@/components/ui/button";
import { Posts } from "@/data/posts";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import LikedPosts from "./LikePosts";

interface StabBlockProps {
    value: string | number;
    label: string;
}

const StatBlock = ({ value, label }: StabBlockProps) => (
    <div className="flex-center gap-2">
        <p className="small-semibold lg:body-bold text-primary-500">{value}</p>
        <p className="small-medium lg:base-medium text-light-2">{label}</p>
    </div>
);

const Profile = () => {
    const posts = Posts;
    return (
        <div className="profile-container">
            <div className="profile-inner_container">
                <div className="flex xl:flex-row flex-col max-xl:items-center flex-1 gap-7">
                    <img
                        src={"/assets/icons/profile-placeholder.svg"}
                        alt="profile"
                        className="w-28 h-28 lg:h-36 lg:w-36 rounded-full"
                    />
                    <div className="flex flex-col flex-1 justify-between md:mt-2">
                        <div className="flex flex-col w-full">
                            <h1 className="text-center xl:text-left h3-bold md:h1-semibold w-full">
                                phuoc truong
                            </h1>
                            <p className="small-regular md:body-medium text-light-3 text-center xl:text-left">
                                @truong
                            </p>
                        </div>

                        <div className="flex gap-8 mt-10 items-center justify-center xl:justify-start flex-wrap z-20">
                            <StatBlock value='100' label="Posts" />
                            <StatBlock value={20} label="Followers" />
                            <StatBlock value={20} label="Following" />
                        </div>

                        <p className="small-medium md:base-medium text-center xl:text-left mt-7 max-w-screen-sm">
                            {'bio'}
                        </p>
                    </div>

                    <div className="flex justify-center gap-4">
                        <div>
                            <Link
                                to={`/update-profile/id`}
                                className={`h-12 bg-dark-4 px-5 text-light-1 flex-center gap-2 rounded-lg`}>
                                <img
                                    src={"/assets/icons/edit.svg"}
                                    alt="edit"
                                    width={20}
                                    height={20}
                                />
                                <p className="flex whitespace-nowrap small-medium">
                                    Edit Profile
                                </p>
                            </Link>
                        </div>
                        <div>
                            <Button type="button" className="shad-button_primary px-8">
                                Follow
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex max-w-5xl w-full">
                <Link
                    to={`/profile/id`}
                    className={`profile-tab rounded-l-lg`}>
                    <img
                        src={"/assets/icons/posts.svg"}
                        alt="posts"
                        width={20}
                        height={20}
                    />
                    Posts
                </Link>
                <Link
                    to={`/profile/id/liked-posts`}
                    className={`profile-tab rounded-r-lg `}>
                    <img
                        src={"/assets/icons/like.svg"}
                        alt="like"
                        width={20}
                        height={20}
                    />
                    Liked Posts
                </Link>
            </div>
            <Routes>
                <Route
                    index
                    element={<GridPostList posts={posts} showUser={false} />}
                />
                <Route path="/liked-posts" element={<LikedPosts />} />
            </Routes>
            <Outlet />
        </div>
    )
}

export default Profile;
