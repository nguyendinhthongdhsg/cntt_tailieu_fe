import classNames from 'classnames/bind';
import styles from './DashboardCont.module.scss';
import DashboardNav from './DashboardNav';
import DashboardCreate from './DashBoardCreate';

const cx = classNames.bind(styles);

export default function DashboardCont() {
    return (
        <div className={cx('wrapper')}>
            <DashboardNav />
            <DashboardCreate />
        </div>
    );
}
