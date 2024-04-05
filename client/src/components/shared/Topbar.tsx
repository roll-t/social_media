import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';

const Topbar = () => {
    return (
         <section className="topbar">
            <div className="flex-between py-4 px-5">
                <Link to="/" className="flex gap-3 items-center">
                <img src="/assets/images/logo.svg" alt="" width={130} height={325} />
                </Link>
            <div className="flex gap-4">
                <Button variant="ghost" className="shad-button_ghost">
                    <img src="/assets/icons/logout.svg" alt="logout" />
                </Button>
                <Link to ="/profile" className="flex-center gap-3">
                    <img src="/assets/images/profile.png" alt="profile"
                    className="h-8 w-8 rounded-full"
                    />
                </Link>
            </div>

            </div>

         </section>
    );
}

export default Topbar;