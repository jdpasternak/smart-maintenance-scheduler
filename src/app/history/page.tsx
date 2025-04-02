import withAuth from '@/lib/withAuth';

const HistoryPage = async () => {
  return await withAuth({ children: <>History Page</> });
};

export default HistoryPage;
