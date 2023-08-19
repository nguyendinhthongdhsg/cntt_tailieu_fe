import classNames from 'classnames/bind';
import styles from './Warning.module.scss';
import Image from 'next/image';
import { artBoardLogoBCH } from '@/assets/images';

const cx = classNames.bind(styles);

export default function Warning() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Image
                    src={artBoardLogoBCH.src}
                    width={400}
                    height={90}
                    alt="BCH khoa CNTT"
                    priority
                />

                <div className={cx('warning-message')}>
                    <p>
                        Lưu ý: Trang web được tạo ra để hỗ trợ việc học tập cho các bạn sinh viên
                        khoa Công nghệ Thông tin. Không có mục đích kiếm tiền, đạo nhái, sao chép,
                        quảng cáo, phạm pháp, các mục đích xấu...
                    </p>
                    <p className={cx('message-primary')}>
                        Tài liệu được đăng lên có ghi tên gốc, tác giả, nguồn.
                    </p>
                </div>
            </div>
        </div>
    );
}
