import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Login from '@/components/Login';
import { DefaultLayout } from '@/components/Layouts';
import Warning from '@/components/Warning';
import SearchDir from '@/components/SearchDir';

export default async function Home() {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    if (!user?.name) {
        return (
            <main>
                <Login />
            </main>
        );
    }
    return (
        <main>
            <DefaultLayout user={user} heading="">
                <SearchDir />
                <Warning />
            </DefaultLayout>
        </main>
    );
}
