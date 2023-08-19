import classNames from 'classnames/bind';
import styles from './NavMenu.module.scss';
import ListSub from '@/components/ListSub';

const cx = classNames.bind(styles);

export default function NavMenu() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('heading')}>Tài liệu công nghệ thông tin</h1>
            <ListSub genre="dai_cuong" headerGen="Đại cương" />
            <ListSub genre="co_so_nganh" headerGen="Cơ sở ngành" />
            <ListSub genre="kien_thuc_nganh" headerGen="Kiến thức ngành" />
            <ListSub genre="chuyen_nganh" headerGen="Chuyên ngành" />
        </div>
    );
}
