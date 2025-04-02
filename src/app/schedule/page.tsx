import withAuth from '@/lib/withAuth';

const SchedulePage = async () => {
  return await withAuth({ children: <>Schedule Page</> });
};

export default SchedulePage;
