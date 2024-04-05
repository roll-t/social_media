import {useLocation} from 'react-router-dom'

const PostStarts = () => {
    const location = useLocation()
    
    const containerStyles= location.pathname.startsWith("/profile")
    ? 'w-full'
    :"";

    return (
         <div className={`flex justify-between items-center z-20 ${containerStyles}`}>
            <div className="flex gap-2 mr-5">
                <img src="/assets/icons/liked.svg" alt="like" width={20} height={20} className='cursor-pointer'/>
                <p className='small-medium lg:base-medium'>1000</p>
            </div>
            <div className="flex gap-2">
                <img src="/assets/icons/saved.svg" alt="share" width={20} height={20} className='cursor-pointer' />
            </div>
         </div> 
    );
}

export default PostStarts;