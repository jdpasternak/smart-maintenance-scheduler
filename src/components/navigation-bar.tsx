'use client';

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import { Avatar, AvatarImage } from './ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';

export function NavigationBar() {

  const { data, status } = useSession();

  return (
    <header className="w-full bg-gray-100 dark:bg-gray-900 border-b px-4 py-3">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Smart Maintenance
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/machines"
                  className={cn(
                    'px-4 py-2 hover:bg-muted rounded-md text-sm font-medium transition-colors',
                  )}
                >
                  Machines
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/schedule"
                  className={cn(
                    'px-4 py-2 hover:bg-muted rounded-md text-sm font-medium transition-colors',
                  )}
                >
                  Schedule
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/history"
                  className={cn(
                    'px-4 py-2 hover:bg-muted rounded-md text-sm font-medium transition-colors',
                  )}
                >
                  History
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {status === 'loading'
              ? <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              : status === 'authenticated'
                ? (<NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/api/auth/signout"
                      className={cn(
                        'px-4 py-2 hover:bg-muted rounded-md text-sm font-medium transition-colors',
                      )}
                    >
                      Sign Out
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>)
                : (<NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/api/auth/signin"
                      className={cn(
                        'px-4 py-2 hover:bg-muted rounded-md text-sm font-medium transition-colors',
                      )}
                    >
                      Sign In
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>)}
            <NavigationMenuItem>
              {status === 'loading'
                ? ''
                : status === 'authenticated'
                  ? <NavigationMenuLink asChild>
                    <Link
                      href="/profile"
                      className={cn("flex items-center justify-center rounded-full py-0")}
                    >
                      <Avatar>
                        <AvatarImage src={data?.user?.image || ''} />
                        <AvatarFallback>{data.user?.name?.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                    </Link>
                  </NavigationMenuLink>
                  : ''}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header >
  );
}
