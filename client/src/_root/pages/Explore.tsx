import GridPostList from "@/components/shared/GridPostList";
import { Input } from "@/components/ui/input";
import { Posts } from "@/data/posts";

const Explore = () => {
    const posts = Posts
    return (
        <div className="explore-container">
            <div className="explore-inner_container">
                <h2 className="h3-bold md:h2-bold w-full">Search Posts</h2>
                <div className="flex gap-1 px-4 w-full rounded-lg bg-dark-4">
                    <img src="/assets/icons/search.svg" alt="search" width={24} height={24} />
                    <Input type="text" className="explore-search" placeholder="search..." />
                </div>
            </div>
            <div className="flex-between w-full max-w-5xl mt-10 mb-7">
                <div className="body-bold md:h3-bold">Popular Today</div>
                <div className="flex-center gap-3 bg-dark-3 rounded-xl px-4 py-3 cursor-pointer">
                    <p className="small-medium md:base-medium text-light-2">
                        All
                    </p>
                    <img src="/assets/icons/filter.svg" alt="filter" width={20} height={20} />
                </div>
            </div>
            <div className="flex flex-wrap gap-9 w-full max-w-5xl">
                {
                      <GridPostList posts={posts}/>
                }
            </div>
        </div>
    );
}

export default Explore;