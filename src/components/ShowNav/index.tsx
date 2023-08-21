'use client';
import classNames from 'classnames/bind';
import styles from './ShowNav.module.scss';
import { AiOutlineDoubleRight } from 'react-icons/ai';

const cx = classNames.bind(styles);

export default function ShowNav() {
    function showNavBar() {
        const navbar = document.getElementById('navigation-bar') as HTMLDivElement;
        navbar.style.left = '0';
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('icon-show')} onClick={showNavBar}>
                    <AiOutlineDoubleRight size={20} />
                </div>
            </div>
        </div>
    );
}
