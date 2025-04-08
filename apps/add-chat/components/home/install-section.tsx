import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui";

import { CopyButton } from "../copy-button";

export const InstallSection = () => {
  return (
    <section id="install" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Easy Installation
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Add AddChat to your website in just one line of code
            </p>
          </div>
        </div>
        <div className="mt-16 max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Add this to your HTML</CardTitle>
              <CardDescription>
                Copy and paste this script tag into the{" "}
                <code>&lt;head&gt;</code> section of your website.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto">
                  <code>{`<script src="https://cdn.addchat.com/widget.js" data-ollama-url="http://your-ollama-server:11434" data-theme="light"></script>`}</code>
                </pre>
                <CopyButton text='<script src="https://cdn.addchat.com/widget.js" data-ollama-url="http://your-ollama-server:11434" data-theme="light"></script>' />
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                You can customize the widget by adding additional data
                attributes. See our{" "}
                <a href="#" className="text-primary underline">
                  documentation
                </a>{" "}
                for more options.
              </p>
            </CardFooter>
          </Card>
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-bold">Configuration Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">data-ollama-url</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    URL to your Ollama server
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">data-theme</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Widget theme (light or dark)
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">data-position</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Widget position (bottom-right, bottom-left, etc.)
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">data-model</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ollama model to use (default: llama3)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
