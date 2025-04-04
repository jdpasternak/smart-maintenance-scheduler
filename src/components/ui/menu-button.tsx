import React from 'react';
import { Button } from '@/components/ui/button';

interface MenuButtonProps {
    menuOpen: boolean;
    onToggle: () => void;
}

export function MenuButton({ menuOpen, onToggle }: MenuButtonProps) {
    return (
        <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
            onClick={onToggle}
            aria-label="Toggle Menu"
        >
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
            </svg>
        </Button>
    );
}