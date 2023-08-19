'use client';

import classNames from 'classnames/bind';
import styles from './ListDoc.module.scss';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { URL_BACKEND } from '@/config';
import { toast } from 'react-hot-toast';
import Loading from '../Loading';
import { TypeDocument } from '@/Types';
import ItemDoc from '../ItemDoc';

const cx = classNames.bind(styles);

const ListDoc = () => {
    const searchParams = useSearchParams();
    const sub = searchParams.get('s');
    const [docList, setDocList] = useState([]);
    const [subName, setSubName] = useState({
        name: '',
    });
    const [checkCallAPI, setCheckCallAPI] = useState(false);

    useEffect(() => {
        axios
            .get(URL_BACKEND + `/subject/byId/${sub}`)
            .then((res) => res.data)
            .then((res) => setSubName(res))
            .catch(() => toast.error('Lỗi máy chủ!'));
        axios
            .get(URL_BACKEND + `/document/${sub}`)
            .then((res) => res.data)
            .then((res) => {
                setDocList(res);
                setCheckCallAPI(true);
            })
            .catch(() => toast.error('Lỗi máy chủ!'));
    }, [sub]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h2 className={cx('heading')}>{subName?.name ? subName.name : 'Đang tải...'}</h2>
                <ul className={cx('list')}>
                    {docList && docList[0] ? (
                        docList.map((item: TypeDocument, index: number) => {
                            return (
                                <li key={index}>
                                    <ItemDoc doc={item} />
                                </li>
                            );
                        })
                    ) : checkCallAPI ? (
                        <li className={cx('null-data')}>{'Môn học này chưa có tài liệu!'}</li>
                    ) : (
                        <Loading />
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ListDoc;
