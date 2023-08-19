import type { NextAuthOptions } from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';
import { URL_BACKEND } from '@/config';

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Vui lòng nhập đầy đủ thông tin');
                }

                const res = await axios.put(`${URL_BACKEND}/login/`, {
                    data: credentials,
                });

                const user = await res.data;

                if (!user || !user?.email || user?.error) {
                    throw new Error('Tài khoản hoặc mật khẩu không đúng');
                }
                return user;
            },
        }),
    ],
    pages: {
        signIn: '/',
    },
    debug: process.env.NODE_ENV === 'development',
    secret: process.env.NEXTAUTH_SECRET,
};
