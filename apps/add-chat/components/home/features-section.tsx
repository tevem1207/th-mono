import { Card, CardDescription, CardHeader, CardTitle } from "@repo/ui";
import { Code, Globe, Layers, Lock, Settings, Zap } from "@repo/ui/icons";

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Powerful Features
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Everything you need to add intelligent chat to your website
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <Card className="border-none shadow-md">
            <CardHeader>
              <Code className="h-10 w-10 text-primary mb-2" />
              <CardTitle>One-line Installation</CardTitle>
              <CardDescription>
                {
                  "Add a single script tag to your website and you're ready to go. No complex setup required."
                }
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-none shadow-md">
            <CardHeader>
              <Globe className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Domain-customized AI</CardTitle>
              <CardDescription>
                Automatically trains on your website content to provide relevant
                and accurate responses.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-none shadow-md">
            <CardHeader>
              <Layers className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Zero Infrastructure</CardTitle>
              <CardDescription>
                Uses client-owned Ollama server. No need to manage any backend
                or infrastructure.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-none shadow-md">
            <CardHeader>
              <Settings className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Fully Customizable</CardTitle>
              <CardDescription>
                Customize the appearance and behavior of the widget to match
                your brand and requirements.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-none shadow-md">
            <CardHeader>
              <Zap className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Lightweight</CardTitle>
              <CardDescription>
                {
                  "Minimal impact on your website's performance with our optimized code."
                }
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-none shadow-md">
            <CardHeader>
              <Lock className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Privacy-friendly</CardTitle>
              <CardDescription>
                Your data stays with you. No data is sent to our servers unless
                you choose to.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};
