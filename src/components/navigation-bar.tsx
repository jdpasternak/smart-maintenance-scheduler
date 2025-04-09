'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuButton } from '@/components/ui/menu-button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function NavigationBar() {
  const { data, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  return (
    <header className="w-full bg-gray-100 dark:bg-gray-900 border-b px-4 py-3">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Smart Maintenance
        </Link>
        <MenuButton menuOpen={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} />
        <NavigationMenu
          className={cn(
            'md:flex md:items-center md:space-x-4',
            menuOpen ? 'block' : 'hidden',
            'absolute md:static top-13 right-0 w-full md:w-auto bg-gray-100 dark:bg-gray-900 md:bg-transparent z-10',
          )}
        >
          <NavigationMenuList className="flex flex-col md:flex-row md:items-center">
            {status === 'authenticated' && (
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/machines"
                    className={cn(
                      'px-4 py-2 hover:bg-muted rounded-md text-sm font-medium transition-colors',
                      pathname.includes('machines') ? 'bg-gradient-to-t from-gray-200' : '',
                    )}
                  >
                    Machines
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}

            {status === 'authenticated' && (
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/schedule"
                    className={cn(
                      'px-4 py-2 hover:bg-muted rounded-md text-sm font-medium transition-colors',
                      pathname.includes('schedule') ? 'bg-gradient-to-t from-gray-200' : '',
                    )}
                  >
                    Schedule
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}

            {status === 'authenticated' && (
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/history"
                    className={cn(
                      'px-4 py-2 hover:bg-muted rounded-md text-sm font-medium transition-colors',
                      pathname.includes('history') ? 'bg-gradient-to-t from-gray-200' : '',
                    )}
                  >
                    History
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}

            {status === 'loading' ? (
              <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            ) : status === 'authenticated' ? (
              <NavigationMenuItem>
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
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem>
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
              </NavigationMenuItem>
            )}
            <NavigationMenuItem>
              {status === 'loading' ? (
                ''
              ) : status === 'authenticated' ? (
                <NavigationMenuLink asChild>
                  <Link
                    href="/profile"
                    className={cn('flex items-center justify-center rounded-full pb-2 md:py-0')}
                  >
                    <Avatar>
                      <AvatarImage src={data?.user?.image || ''} />
                      <AvatarFallback>
                        {data.user?.name?.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Link>
                </NavigationMenuLink>
              ) : (
                ''
              )}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
