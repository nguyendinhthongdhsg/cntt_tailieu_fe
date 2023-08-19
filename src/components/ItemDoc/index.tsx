import { TypeDocument } from '@/Types';
import classNames from 'classnames/bind';
import styles from './ItemDoc.module.scss';
import { MdDownloadForOffline } from 'react-icons/md';
import { URL_BACKEND } from '@/config';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const cx = classNames.bind(styles);

interface ItemDocProps {
    doc: TypeDocument;
}

const ItemDoc: React.FC<ItemDocProps> = ({ doc }) => {
    function download() {
        axios({
            url: URL_BACKEND + `/fileDoc?q=${doc.fileId}`,
            method: 'GET',
            responseType: 'blob',
        })
            .then((res) => res.data)
            .then((res) => {
                const url = URL.createObjectURL(res);
                const link = document.createElement('a');
                link.href = url;
                link.target = '_blank';
                link.setAttribute('download', doc.fileId);

                // Append to html link element page
                document.body.appendChild(link);

                // Start download
                link.click();

                // Clean up and remove the link
                link.parentNode?.removeChild(link);
            })
            .catch(() => toast.error('Lỗi máy chủ!'));
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('download')} onClick={download}>
                    <MdDownloadForOffline className={cx('download-icon')} size={50} />
                </div>
                <div className={cx('author')}>
                    <h4 className={cx('author-name')}>{doc.name}</h4>
                    <h4 className={cx('author-au')}>{doc.author}</h4>
                </div>
            </div>
        </div>
    );
};

export default ItemDoc;
