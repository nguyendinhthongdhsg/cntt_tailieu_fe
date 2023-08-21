import classNames from 'classnames/bind';
import { TypeUser } from '@/Types';
import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';
import styles from './DefaultLayout.module.scss';
import Heading from '@/components/Heading';
import ShowNav from '@/components/ShowNav';

const cx = classNames.bind(styles);

interface DefaultLayoutProps {
    user: TypeUser;
    children: ReactNode;
    heading: string | undefined;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ user, children, heading }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <header className={cx('header')}>
                    <Heading heading={heading} />
                </header>
                <div id="navigation-bar" className={cx('nav')}>
                    <div className={cx('showNav')}>
                        <ShowNav />
                    </div>
                    <Navbar user={user} />
                </div>
                <div className={cx('content-main')}>{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
