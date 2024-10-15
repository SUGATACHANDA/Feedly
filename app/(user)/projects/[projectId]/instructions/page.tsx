import CodeHighlighter from "@/components/code-block";


const page = ({
    params,
}: {
    params: {
        projectId: string;
    };
}) => {
    if (!params.projectId) return <div>Invalid Project ID</div>;
    if (!process.env.WIDGET_URL) return <div>Missing WIDGET_URL</div>;

    const code1 =
        `<my-widget project-id="${params.projectId}"></my-widget>
<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>
        `;
    const code2 =
        `import "./globals.css";
import Script from "next/script";
declare global { 
    namespace JSX { 
        interface IntrinsicElements {
            ['my-widget']: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}`;
    const code3 =
        `<html lang="en">
<Script src="${process.env.WIDGET_URL}/widget.umd.js"></Script>
<body>
...
<Script src="${process.env.WIDGET_URL}/widget.umd.js"></Script>
<my-widget project-id="${params.projectId}"></my-widget>
</body>`;

    return (
        <div>
            <h1 className="text-xl font-bold mb-2">Start Collecting Feedback</h1>

            <p className="text-lg text-secondary-foreground  mb-6">
                Embeded code in for the widget
            </p>
            <CodeHighlighter code={code1} fileName="Widget Code" language="jsx" />

            <p className="text-lg text-secondary-foreground mt-6 mb-6">
                Step 1: Edit the <code className="px-2 py-1 text-white bg-gray-500 rounded-xl">layout.tsx</code> file by adding this snippet.
            </p>
            <CodeHighlighter code={code2} fileName="layout.tsx" language="jsx" />

            <p className="text-lg text-secondary-foreground mt-6 mb-6">
                Step 2: Add the snippet in <code className="px-2 py-1 text-white bg-gray-500 rounded-xl">layout.tsx</code> file.
            </p>
            <CodeHighlighter code={code3} language="jsx" fileName="layout.tsx" />

        </div>
    );
};

export default page;
