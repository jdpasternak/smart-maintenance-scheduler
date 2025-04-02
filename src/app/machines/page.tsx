import withAuth from '@/lib/withAuth';

const MachinesPage = async () => {
  return await withAuth({ children: <>Machines Page</> });
};

export default MachinesPage;
