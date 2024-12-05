import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
	return (
		<Fragment>
			<div className="navigation">
				{/* Logo, also a link to the home page */}
				<Link className="logo-container" to="/">
					<CrwnLogo className="logo" />
				</Link>

				{/* Links container */}
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

/* 
const Navigation = () => {
    return (
        <div>
            <div className='navigation'>
                <h1>Menu Item</h1>
            </div>
            <Outlet/>
        </div>
    )
}; */
export default Navigation;
