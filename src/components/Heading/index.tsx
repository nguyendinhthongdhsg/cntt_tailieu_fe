import classNames from 'classnames/bind';
import styles from './Heading.module.scss';

const cx = classNames.bind(styles);

interface HeadingProps {
    heading: string | undefined;
}

const Heading: React.FC<HeadingProps> = ({ heading }) => {
    return <h1 className={cx('wrapper')}>{heading ? heading : 'TÀI LIỆU CÔNG NGHỆ THÔNG TIN'}</h1>;
};

export default Heading;
