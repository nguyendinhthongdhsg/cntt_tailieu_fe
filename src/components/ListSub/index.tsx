'use client';

import classNames from 'classnames/bind';
import styles from './ListSub.module.scss';
import { TypeSubject } from '@/Types';
import { URL_BACKEND } from '@/config';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../Loading';
import { AiFillCaretDown } from 'react-icons/ai';

interface ListSubProps {
    genre: string;
    headerGen: string;
}

const cx = classNames.bind(styles);

const ListSub: React.FC<ListSubProps> = ({ genre, headerGen }) => {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        axios
            .get(URL_BACKEND + `/subject/${genre}`)
            .then((res) => res.data)
            .then((res) => {
                setSubjects(res);
                console.log('list-sub');
            })
            .catch(() => toast.error('Lỗi server backend!'));
    }, [genre]);

    function showList() {
        document.getElementById(`list-${genre}`)?.classList.toggle(cx('open'));
    }

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('heading-list')} onClick={showList}>
                {headerGen}
                <AiFillCaretDown />
            </h3>
            <ul id={`list-${genre}`} className={cx('list-subject')}>
                {subjects && subjects[0] ? (
                    subjects.map((item: TypeSubject, index: number) => {
                        return (
                            <li key={index} style={{ order: item.index }}>
                                <Link href={`/subject?s=${item.id}`} passHref>
                                    <h3>
                                        ({item.id}) {item.name}
                                    </h3>
                                </Link>
                            </li>
                        );
                    })
                ) : (
                    <li className={cx('item-loading')}>
                        <Loading />
                    </li>
                )}
            </ul>
        </div>
    );
};

export default ListSub;
