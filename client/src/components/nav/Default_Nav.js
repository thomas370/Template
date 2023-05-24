import './default_nav.scss';
import {Link} from "react-router-dom";

const Default_Nav = () => {
    return (
        <div>
            <div className="nav">
                <div className="nav__logo">
                    <Link to='/admin'>Logo</Link>
                </div>
                <div className="nav__links">
                    <ul>

                        <li>Logout</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Default_Nav;