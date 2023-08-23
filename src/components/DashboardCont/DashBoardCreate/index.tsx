'use client';
import { usePathname } from 'next/navigation';
import classNames from 'classnames/bind';
import styles from './DashBoardCreate.module.scss';
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { URL_BACKEND } from '@/config';
import { toast } from 'react-hot-toast';
import { TypeSubject } from '@/Types';

const cx = classNames.bind(styles);

export default function DashboardCreate() {
    const pathName = usePathname();
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        axios
            .get(URL_BACKEND + '/subject')
            .then((res) => res.data)
            .then((res) => setSubjects(res))
            .catch(() => toast.error('Lỗi server backend!'));
    }, []);
    if (pathName !== '/dashboard/create') {
        return null;
    }

    const onSubmitSub = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const subName = document.getElementById('subName') as HTMLInputElement;
        const subId = document.getElementById('subId') as HTMLInputElement;
        const subIndex = document.getElementById('subIndex') as HTMLInputElement;
        const subGenre = document.getElementById('subGenre') as HTMLInputElement;

        if (
            validatorFormSub(subName) &&
            validatorFormSub(subId) &&
            validatorFormSub(subIndex) &&
            validatorFormSub(subGenre)
        ) {
            axios
                .post(URL_BACKEND + '/subject', {
                    sub: {
                        name: subName.value.trim(),
                        id: subId.value.trim(),
                        index: subIndex.value.trim(),
                        genre: subGenre.value.trim(),
                    },
                })
                .then((res) => res.data)
                .then((res) => {
                    if (!res.error) {
                        toast.success(`Thêm '${subName.value.trim()}' thành công`);
                        subName.value = '';
                        subId.value = '';
                        subIndex.value = '';
                        subGenre.value = '';
                    } else {
                        toast.error(res.error);
                    }
                })
                .catch(() => toast.error('Thêm thất bại'));
        }
    };

    function validatorFormSub(input: HTMLInputElement) {
        if (!input.value.trim()) {
            input.style.borderColor = 'red';
            return false;
        }
        input.style.borderColor = 'var(--border-color)';
        return true;
    }

    const onSubmitDoc = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const docSub = document.getElementById('docSub') as HTMLInputElement;
        const docName = document.getElementById('docName') as HTMLInputElement;
        const docAuthor = document.getElementById('docAuthor') as HTMLInputElement;
        const docFile = document.getElementById('docFile') as HTMLInputElement;

        if (
            validatorFormSub(docSub) &&
            validatorFormSub(docName) &&
            validatorFormSub(docAuthor) &&
            validatorFormSub(docFile)
        ) {
            const form = e.target as HTMLFormElement;
            axios
                .post(
                    URL_BACKEND + '/document',
                    form,
                    // doc: {
                    //     subId: docSub.value,
                    //     name: docName.value,
                    //     author: docAuthor.value,
                    //     fileId: docFile.value,
                    // },
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }
                )
                .then((res) => res.data)
                .then((res) => {
                    if (!res.error) {
                        toast.success(`Thêm '${docName.value.trim()}' thành công`);
                        docName.value = '';
                        docSub.value = '';
                        docAuthor.value = '';
                        docFile.value = '';
                        inputFile(docFile);
                    } else {
                        toast.error(res.error);
                    }
                })
                .catch(() => toast.error('Thêm thất bại'));
        }
    };

    function inputFile(event: HTMLInputElement) {
        const label = document.getElementById('labelDocFile') as HTMLLabelElement;
        if (event.value) {
            label.innerText = event.value;
            label.style.color = 'var(--black-color)';
        } else {
            label.innerText = '+ Thêm file tài liệu';
            label.style.color = '#909090';
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('create-subject')}>
                    <h2 className={cx('sub-heading')}>Thêm môn học</h2>
                    <form id="formSub" className={cx('form-sub')} onSubmit={(e) => onSubmitSub(e)}>
                        <div className={cx('form-sub-item')}>
                            <select
                                name="subGenre"
                                id="subGenre"
                                placeholder="Chọn môn học"
                                spellCheck={false}
                                title="Chọn môn học"
                            >
                                <option value="">Chọn loại môn học</option>
                                <option value="dai_cuong">Đại cương</option>
                                <option value="co_so_nganh">Cơ sở ngành</option>
                                <option value="kien_thuc_nganh">Kiến thức ngành</option>
                                <option value="he_thong_thong_tin">Hệ thống thông tin</option>
                                <option value="ky_thuat_may_tinh">Kỹ thuật máy tính</option>
                                <option value="khoa_hoc_may_tinh">Khoa học máy tính</option>
                                <option value="ky_thuat_phan_mem">Kỹ thuật phần mềm</option>
                            </select>
                        </div>
                        <div className={cx('form-sub-item')}>
                            <input
                                type="text"
                                name="subName"
                                id="subName"
                                placeholder="Tên môn học"
                                spellCheck={false}
                                autoComplete="off"
                            />
                        </div>
                        <div className={cx('form-sub-item')}>
                            <input
                                type="text"
                                name="subId"
                                id="subId"
                                placeholder="Mã môn học"
                                spellCheck={false}
                                autoComplete="off"
                            />
                        </div>
                        <div className={cx('form-sub-item')}>
                            <input
                                type="number"
                                name="subIndex"
                                id="subIndex"
                                placeholder="Thứ tự trong danh sách"
                                spellCheck={false}
                                min={1}
                                autoComplete="off"
                            />
                        </div>
                        <div className={cx('form-sub-item')}>
                            <button type="submit">Thêm</button>
                        </div>
                    </form>
                </div>
                <div className={cx('create-document')}>
                    <h2 className={cx('document-heading')}>Thêm tài liệu</h2>
                    <form
                        className={cx('form-doc')}
                        method="POST"
                        encType="multipart/form-data"
                        onSubmit={(e) => onSubmitDoc(e)}
                    >
                        <div className={cx('form-doc-item')}>
                            <select
                                name="docSub"
                                id="docSub"
                                placeholder="Chọn môn học"
                                spellCheck={false}
                                title="Chọn môn học"
                            >
                                <option value="">Chọn môn học</option>
                                {subjects &&
                                    subjects[0] &&
                                    subjects.map((item: TypeSubject, index: number) => {
                                        return (
                                            <option
                                                value={item.id}
                                                key={index}
                                                style={{ order: item.index }}
                                            >
                                                {item.name}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>
                        <div className={cx('form-doc-item')}>
                            <input
                                type="text"
                                name="docName"
                                id="docName"
                                placeholder="Tên tài liệu"
                                spellCheck={false}
                                autoComplete="off"
                            />
                        </div>
                        <div className={cx('form-doc-item')}>
                            <input
                                type="text"
                                name="docAuthor"
                                id="docAuthor"
                                placeholder="Nguồn tác giả"
                                spellCheck={false}
                                autoComplete="off"
                            />
                        </div>
                        <div className={cx('form-doc-item', 'form-doc-file')}>
                            <label id="labelDocFile" htmlFor="docFile" className={cx('files-area')}>
                                + Thêm file tài liệu
                            </label>
                            <input
                                type="file"
                                name="file"
                                id="docFile"
                                onChange={(e) => inputFile(e.target as HTMLInputElement)}
                            />
                        </div>
                        <div className={cx('form-doc-item')}>
                            <button type="submit">Thêm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
