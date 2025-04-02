import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { auth } from '@/lib/auth';
import withAuth from '@/lib/withAuth';

const ProfilePage = async () => {
  const session = await auth();
  console.log(session);

  return await withAuth({
    children: (
      <>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center gap-4 w-fit">
            <h1 className="text-6xl">Profile</h1>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={session?.user?.image || ''} alt="" width="50" height="50" />
            <p>Name: {session?.user?.name}</p>
            <p>Email: {session?.user?.email}</p>
            <Card className="w-full">
              <CardHeader>
                <p className="font-semibold text-xl">Settings</p>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3 items-center">
                  <p>Enable email notifications?</p>
                  <Switch></Switch>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    ),
  });
};

export default ProfilePage;
