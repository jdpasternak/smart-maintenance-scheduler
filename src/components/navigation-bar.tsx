'use client';

import Link from 'next/link';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

export function NavigationBar() {
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
                                        'px-4 py-2 hover:bg-muted rounded-md text-sm font-medium transition-colors'
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
                                        'px-4 py-2 hover:bg-muted rounded-md text-sm font-medium transition-colors'
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
                                        'px-4 py-2 hover:bg-muted rounded-md text-sm font-medium transition-colors'
                                    )}
                                >
                                    History
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
}
