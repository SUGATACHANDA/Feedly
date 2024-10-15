"use client";
import { Copy, CopyCheck } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useState } from "react";


const CopyBtn = ({ text }: {
    text: string
}) => {
    const [copied, setCopied] = useState(false)
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Copied to clipboard');
            setCopied(true)
        })
    }



    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button onClick={() => copyToClipboard(text)} className="text-slate-50 absolute p-2 right-0 top-0">{!copied ? <Copy /> : <CopyCheck />}</button>
                </TooltipTrigger>
                {!copied ? <TooltipContent>
                    <p>Copy code</p>
                </TooltipContent> :

                    <TooltipContent>
                        <p>Copied!</p>
                    </TooltipContent>
                }
            </Tooltip>
        </TooltipProvider>

    )
}

export default CopyBtn;