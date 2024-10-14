"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    //   DropdownMenuLabel,
    //   DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu, X, Folder, CreditCard, LockIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";

const HeaderMenu = () => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <DropdownMenu open={open} onOpenChange={toggleMenu}>
            <DropdownMenuTrigger asChild>
                <Button onClick={toggleMenu} className="mr-4" variant="secondary">
                    {open ? <X className="h-6 w-6 cursor-pointer" /> : <Menu className="h-6 w-6 cursor-pointer" />}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="flex cursor-pointer">
                        <Folder className="mr-2 h-4 w-4" />
                        <span>Projects</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/payments" className="flex cursor-pointer">
                        <CreditCard className="mr-2 h-4 w-4" />
                        <span>Billing</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <span>
                        <LockIcon className="mr-2 h-4 w-4" />
                        <SignOutButton redirectUrl="/">Sign out</SignOutButton>
                    </span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default HeaderMenu;
