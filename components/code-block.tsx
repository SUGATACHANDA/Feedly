"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Copy } from "lucide-react";
import { useState } from "react";
// import { useState } from "react";

interface CodeHighlighterProps {
    fileName: string;
    language?: string;
    code: string;
}

const CodeHighlighter = ({ fileName, code }: CodeHighlighterProps) => {
    const [copied, setCopied] = useState(false)
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            alert("Copied to clipboard");
            setCopied(true)
        });
    };
    return (
        <div className="">
            <div className="max-w-2xl min-w-[60rem] bg-[#3a404d] rounded-md overflow-x-auto">
                <div className="flex justify-between px-4 bg-black text-white text-xs items-center">
                    <code className="text-sm p-1">{fileName}</code>
                    <button onClick={() => copyToClipboard(code)}>
                        <div className="flex items-center justify-between">
                            {!copied ? <>
                                <p className="p-2">Copy Code</p>
                                <Copy size={20} />
                            </> : <p className="p-2">Copied to Clipboard</p>}
                        </div>
                    </button>
                </div>
                <SyntaxHighlighter
                    style={atomOneDark}
                    customStyle={{ background: "transparent" }}
                    wrapLongLines={true}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeHighlighter;
