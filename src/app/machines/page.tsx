import { NewMachineForm } from '@/components/new-machine-form';
import withAuth from '@/lib/withAuth';

const MachinesPage = async () => {
  return await withAuth({
    children: (
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-3xl font-bold underline">Machines</h1>
        <NewMachineForm />
      </div>
    ),
  });
};

export default MachinesPage;
