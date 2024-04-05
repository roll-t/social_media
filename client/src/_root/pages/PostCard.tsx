import { Link } from "react-router-dom";
import PostStarts from "../../components/shared/PostStarts";

interface Props{
    name:string;
    date:string;
    description:string;
    location:string;
    tags:string[];
    imageURL:string;
}

const PostCard:React.FC<Props> = ({name,date,description, location, tags,imageURL}) => {
    return (
         <>
         <div className="post-card mt-5">
            <div className="flex-between">
                <div className="flex-items-center gap-3">
                    <Link to='/profile'>
                        <img src="/assets/images/profile.png" alt="creator" className="w-12 h-12 lg:h-12 rounded-full" />
                    </Link>
                    <div className="flex flex-col">
                        <p className="base-medium lg:body text-light-1">
                            {name}
                        </p>
                        <div className="flex-center gap-2 text-light-3">
                            <p className="subtle-semibold lg:small-regular">
                                {date}
                            </p> . 
                            <p className="subtle-semibold lg:small-regular">
                                {location}
                            </p>
                        </div>
                    </div>
                </div>
                <Link to ="/update-post/1">
                    <img src="/assets/icons/edit.svg" alt="edit" width={20} height={20}  />
                </Link>
            </div>

            <Link to='post/1'>
                <div className="small-medium lg:base-medium py-5">
                    <p>{description}</p> 
                    <ul className="flex gap-1 mt-2">
                        <li className="text-light-3 small-regular">
                            #{tags.join(', #')}
                        </li>
                    </ul>
                </div>
                <img src={`/assets/images/${imageURL}`} alt="post image" className="post-card_img" />
            </Link>
            <PostStarts/>
         </div>
         </> 
    );
}

export default PostCard;