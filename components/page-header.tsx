import {
    SignInButton,
    // SignOutButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    // UserButton
} from '@clerk/nextjs'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import HeaderMenu from "@/components/header-menu"
import Link from 'next/link'
// import { auth } from '@clerk/nextjs/server'

const PageHeader = () => {

    // const user = auth()

    return (
        <header className="sticky inset-x-0 top-0 z-30 w-full transition-all bg-white/20 backdrop-blur-md">
            <div className="w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto border-b">
                <div className="flex h-14 items-center justify-between">
                    <Link href="/">
                        <Image src="/logo.png" alt="Logo" width={120} height={200} />
                    </Link>
                    <div>
                        <SignedOut>
                            <SignInButton>
                                <Button className="bg-black">Log In</Button>
                            </SignInButton>
                            <SignUpButton>
                                <Button className="bg-black ml-2">Get Started</Button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <HeaderMenu />

                        </SignedIn>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default PageHeader;