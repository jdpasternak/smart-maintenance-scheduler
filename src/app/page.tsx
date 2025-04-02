import { DialogTitle } from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import SignIn from '@/components/sign-in';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-roboto-mono)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl">Welcome to Smart Maintenance Scheduler</h1>

        <div className="flex items-center flex-col w-full gap-5">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={'default'}>Login</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Login</DialogTitle>
              <SignIn />
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex items-center flex-col w-full gap-5">
          <Button variant={'default'}>Default</Button>
          <Button variant={'outline'}>Outline</Button>
          <Button variant={'ghost'}>Ghost</Button>
          <Button variant={'destructive'}>Destructive</Button>
        </div>

        <div className="flex items-center flex-col w-full gap-5">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
            </CardHeader>
            <CardContent>Welcome to your admin portal</CardContent>
          </Card>
        </div>

        <div className="flex items-center flex-col w-full gap-5">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Hi!</DialogTitle>
              <p>Hello from the dialog!</p>
            </DialogContent>
          </Dialog>
        </div>
      </main>
    </div>
  );
}
