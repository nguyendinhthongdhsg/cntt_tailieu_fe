'use client';
import classNames from 'classnames/bind';
import styles from './NavUser.module.scss';
import Image from 'next/image';
import { logoBCHkhoa } from '@/assets/images';
import { signOut } from 'next-auth/react';
import { RiLockPasswordFill, RiLogoutBoxRFill } from 'react-icons/ri';
import { BiSolidDashboard } from 'react-icons/bi';
import { IoLibrary } from 'react-icons/io5';
import Link from 'next/link';
import { TypeUser } from '@/Types';
import { GrClose } from 'react-icons/gr';
import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

interface NavUserProps {
    user: TypeUser;
}

const NavUser: React.FC<NavUserProps> = ({ user }) => {
    // tab and mobile
    function closeNavMobile() {
        const navDef = document.getElementById('navigation-bar') as HTMLDivElement;
        navDef.style.left = '-100%';
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('user-info')}>
                <Image
                    className={cx('user-img')}
                    width={50}
                    height={50}
                    src={logoBCHkhoa.src}
                    alt="logo BCH"
                    priority={true}
                />
                <p className={cx('user-name')}>{user.name}</p>
                <GrClose onClick={closeNavMobile} className={cx('user-close-nav')} size={16} />
            </div>
            <ul className={cx('user-menu')}>
                <li>
                    <IoLibrary size={16} className={cx('item-icon')} />
                    <Link href="/" passHref>
                        Tài liệu của bạn
                    </Link>
                </li>
                {user.image === 'admin' && (
                    <li>
                        <BiSolidDashboard size={16} className={cx('item-icon')} />
                        <Link href="/dashboard/create" passHref>
                            Dashboard
                        </Link>
                    </li>
                )}
                <li>
                    <RiLogoutBoxRFill size={16} className={cx('item-icon')} />
                    <div onClick={() => signOut()}>Đăng xuất</div>
                </li>
            </ul>
        </div>
    );
};

export default NavUser;
