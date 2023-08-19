import { DefaultLayout } from '@/components/Layouts';
import ListDoc from '@/components/ListDoc';
import Login from '@/components/Login';
import SearchDir from '@/components/SearchDir';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export default async function Subject() {
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
                <ListDoc />
            </DefaultLayout>
        </main>
    );
}
