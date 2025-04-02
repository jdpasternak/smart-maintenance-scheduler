import withAuth from '@/lib/withAuth';

const ProfilePage = async () => {
  return await withAuth({ children: <>Profile Page</> });
};

export default ProfilePage;
