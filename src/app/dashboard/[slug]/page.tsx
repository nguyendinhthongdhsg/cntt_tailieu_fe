import DashboardCont from '@/components/DashboardCont';
import { DefaultLayout } from '@/components/Layouts';
import Login from '@/components/Login';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export default async function Dashboard() {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    if (!user?.name || user?.image !== 'admin') {
        return (
            <main>
                <Login />
            </main>
        );
    }
    return (
        <main>
            <DefaultLayout user={user} heading="DASHBOARD">
                <DashboardCont />
            </DefaultLayout>
        </main>
    );
}
