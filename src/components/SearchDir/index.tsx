'use client';
import classNames from 'classnames/bind';
import styles from './SearchDir.module.scss';
import { HiOutlineSearch } from 'react-icons/hi';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

const cx = classNames.bind(styles);

export default function SearchDir() {
    const router = useRouter();
    function onSearch(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const search = document.getElementById('search') as HTMLInputElement;
        if (search.value.trim()) {
            router.push(`/subject?s=${search.value.trim()}`);
            search.value = '';
        }
    }

    return (
        <div className={cx('wrapper')}>
            <form className={cx('content')} onSubmit={(e) => onSearch(e)}>
                <input id="search" type="search" name="search" placeholder="Nhập mã môn học" />
                <button type="submit">
                    <HiOutlineSearch className={cx('search-icon')} size={16} />
                </button>
            </form>
        </div>
    );
}
