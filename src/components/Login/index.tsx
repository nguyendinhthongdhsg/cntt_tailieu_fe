'use client';
import classnames from 'classnames/bind';
import styles from './Login.module.scss';
import Image from 'next/image';
import { artBoardLogoBCH } from '@/assets/images';
import { FormEvent } from 'react';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const cx = classnames.bind(styles);

export default function Login() {
    const router = useRouter();

    function onLogin(e: FormEvent) {
        e.preventDefault();
        const data = {
            email: (document.getElementById('email') as HTMLInputElement)?.value,
            password: (document.getElementById('password') as HTMLInputElement)?.value,
        };
        signIn('credentials', {
            ...data,
            redirect: false,
        }).then((callback) => {
            if (!callback?.error) {
                toast.success('Đăng nhập thành công');
                router.refresh();
            } else {
                toast.error(callback.error);
            }
        });
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('validation')}>
                <form id="form-login" className={cx('form')} onSubmit={(e) => onLogin(e)}>
                    <div className={cx('item-header')}>
                        <Image
                            width={400}
                            height={80}
                            src={artBoardLogoBCH.src}
                            priority={true}
                            alt="Logo BCH"
                        />
                    </div>
                    <div className={cx('item-account')}>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Tài khoản"
                            autoFocus
                            autoComplete="off"
                        />
                    </div>
                    <div className={cx('item-password')}>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Mật khẩu"
                            autoComplete="off"
                        />
                    </div>
                    <div className={cx('item-login')}>
                        <button type="submit">Đăng nhập</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
