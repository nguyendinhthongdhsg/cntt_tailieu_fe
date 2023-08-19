import './globals.css';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import ToasterProvider from '@/providers/ToasterProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Tài liệu khoa CNTT - SGU',
    description:
        'Trang web tài liệu khoa công nghệ thông tin trường đại học sài gòn, được tạo nên bởi BCH Khoa Công Nghệ Thông Tin Trường Đại Học Sài Gòn',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ToasterProvider />
                <NextTopLoader
                    color="#000"
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    crawl={true}
                    showSpinner={false}
                    easing="ease"
                    speed={200}
                    shadow="0 0 10px #2299DD,0 0 5px #2299DD"
                />
                {children}
            </body>
        </html>
    );
}
