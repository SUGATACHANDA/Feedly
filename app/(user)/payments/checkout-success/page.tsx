"use client"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { JSX, SVGProps, useEffect } from "react"

export default function Component() {
    useEffect(() => {
        window.history.forward()
    }, [1])

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
                <Card className="max-w-md w-full space-y-6 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="flex flex-col items-center">
                        <CircleCheckIcon className="text-green-500 h-16 w-16" />
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mt-4">Payment Successful</h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            Thank you for your payment. Invoice has been sent to your email address.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Link
                            href="/dashboard"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
                            prefetch={false}
                        >
                            Go to Dashboard
                        </Link>
                    </div>
                </Card>
            </div>
        </>
    )

}

function CircleCheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}