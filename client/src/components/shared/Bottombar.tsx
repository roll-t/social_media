
import { bottombarLinks } from '@/constants';
import { Link, useLocation, NavLink } from 'react-router-dom'

const Bottombar = () => {

    const { pathname } = useLocation();

    return (
        <section className="bottom-bar">
            {
                bottombarLinks.map((link) => {
                    const isActive = pathname === link.route
                    return (
                        <Link key={link.label} to={link.route} className={`${isActive && 'bg-primary-500'} rounded-[10px] flex-center flex-col gap-2 p-2 transition `}>
                            <img width={25} height={25} src={link.imgURL} alt={link.label} className={`group-hover:invert-white ${isActive && 'invert-white'}`} />
                            <p className='tiny-medium text-light-1'>{link.label}</p>
                        </Link>
                    )
                })
            }
        </section>
    );
}

export default Bottombar;