import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import NavMenu from './NavMenu';
import NavUser from './NavUser';
import { TypeUser } from '@/Types';

const cx = classNames.bind(styles);

interface NavbarProps {
    user: TypeUser;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
    return (
        <nav className={cx('wrapper')}>
            <div className={cx('content')}>
                <NavUser user={user} />
                <NavMenu />
            </div>
        </nav>
    );
};

export default Navbar;
