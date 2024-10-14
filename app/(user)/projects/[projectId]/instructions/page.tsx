import CopyBtn from "@/components/copy-btn";

const page = ({
    params,
}: {
    params: {
        projectId: string;
    };
}) => {
    if (!params.projectId) return <div>Invalid Project ID</div>;
    if (!process.env.WIDGET_URL) return <div>Missing WIDGET_URL</div>;

    return (
        <div>
            <h1 className="text-xl font-bold mb-2">Start Collecting Feedback</h1>

            <p className="text-lg text-secondary-foreground">
                Embeded code in for the widget
            </p>
            <div className="bg-blue-950 p-6 rounded-md mt-6 relative mb-6">
                <code className=" text-white">
                    {`<my-widget project-id="${params.projectId}"></my-widget>`}
                    <br />
                    {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
                </code>
                <CopyBtn
                    text={`<my-widget project-id="${params.projectId}"></my-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
                />
            </div>

            <p className="text-lg text-secondary-foreground">
                Step 1: Edit the <code>layout.tsx </code>file by adding this snippet.
            </p>
            <div className="bg-blue-950 p-6 rounded-md mt-6 relative mb-6">
                <code className=" text-white">
                    {`import "./globals.css";`}
                    <br />
                    {`declare global { `}
                    <br />
                    &ensp;
                    {`
                            namespace JSX { `}
                    <br />
                    &ensp;&ensp;
                    {`
                                interface IntrinsicElements { `}
                    <br />
                    &ensp;&ensp;&ensp;
                    {`
                                        ['my-widget']: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;`}
                    <br />
                    &ensp;&ensp;
                    {`
                                }`}
                    <br />
                    &ensp;
                    {`
                            } `}
                    <br />
                    {`
                        }`
                    }
                </code>
                <CopyBtn
                    text={`<my-widget project-id="${params.projectId}"></my-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
                />
            </div>
            <p className="text-lg text-secondary-foreground">
                Step 2: Add the snippet in <code>layout.tsx </code>file.
            </p>
            <div className="bg-blue-950 p-6 rounded-md mt-6 relative mb-6">
                <code className=" text-white">
                    {`<html lang="en">`}
                    <br />
                    {`<Script src="https://feedback-widget-lyart.vercel.app//widget.umd.js"></Script>`}
                    <br />
                    {`<body> `}
                    <br />
                    {`...`}
                    <br />
                    {`<Script src="https://feedback-widget-lyart.vercel.app//widget.umd.js"></Script>\n`}
                    <br />
                    {`<my-widget project-id="${params.projectId}"></my-widget>`}
                    <br />
                    {`</body>`}                </code>
                <CopyBtn
                    text={`<my-widget project-id="${params.projectId}"></my-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
                />
            </div>
        </div>
    );
};

export default page;
