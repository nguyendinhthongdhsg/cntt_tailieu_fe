'use client';
import classNames from 'classnames/bind';
import styles from './DashboardNav.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const cx = classNames.bind(styles);

export default function DashboardNav() {
    const pathName = usePathname();

    return (
        <nav className={cx('wrapper')}>
            <ul className={cx('list')}>
                <li>
                    <Link
                        href="/"
                        passHref
                        className={cx(pathName === '/dashboard/create' && 'active')}
                    >
                        Thêm mới
                    </Link>
                </li>
                <li>
                    <Link
                        href="/"
                        passHref
                        className={cx(pathName === '/dashboard/update' && 'active')}
                    >
                        Chỉnh sửa
                    </Link>
                </li>
                <li>
                    <Link
                        href="/"
                        passHref
                        className={cx(pathName === '/dashboard/delete' && 'active')}
                    >
                        Xóa hihi
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
