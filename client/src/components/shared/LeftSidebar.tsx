import { sidebarLinks } from "@/constants";
import { INavLink } from "@/types";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "../ui/button";

const LeftSidebar = () => {
    const { pathname } = useLocation();
    return (
        <nav className="leftsidebar">
            <div className="flex flex-col gap-10">
                <Link to="/" className="flex gap-3 items-center">
                    <img src="/assets/images/logo.svg" alt="" width={130} height={325} />
                </Link>
                <Link to="/profile" className="flex-center gap-3">
                    <img src="/assets/images/profile.png" alt="profile"
                        className="h-14 w-14 rounded-full"
                    />
                    <div className="flex flex-col">
                        <p className="body-bold">
                            Phuoc Truong
                        </p>
                        <p className="small-ragular text-light-3">@username</p>
                    </div>
                </Link>
                <ul className="flex flex-col gap-6">
                    {
                        sidebarLinks.map((link: INavLink) => {
                            const isActive = pathname === link.route

                            return (
                                <li key={link.label} className={`leftsidebar-link group ${isActive && 'bg-primary-500'} `}>
                                    <NavLink to={link.route} className="flex gap-4 items-center p-4">
                                        <img src={link.imgURL} alt={link.label} className={`group-hover:invert-white ${isActive && 'invert-white'}`} />
                                        {link.label}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
                <div>
                    <Button variant="ghost" className="shad-button_ghost">
                        <img src="/assets/icons/logout.svg" alt="logout" />
                        <p className="small-medium lg:base-medium">Logout</p>
                    </Button>
                </div>
        </nav>
    );
}

export default LeftSidebar;