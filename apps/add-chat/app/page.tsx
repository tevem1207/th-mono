import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui";
import {
  Code,
  Globe,
  Layers,
  Lock,
  MessageSquare,
  Settings,
  Zap,
} from "@repo/ui/icons";
import Image from "next/image";

import { CopyButton } from "@/components/copy-button";
import { UseCaseCard } from "@/components/use-case-card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">AddChat</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#use-cases"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Use Cases
            </a>
            <a
              href="#demo"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Demo
            </a>
            <a
              href="#install"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Install
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Pricing
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="px-3 py-1 text-sm" variant="secondary">
                  Just launched
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Add AI Chat to Your Website{" "}
                  <br className="hidden sm:inline" />
                  in Seconds
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A lightweight AI chatbot widget that can be embedded into any
                  website with just one line of script. No backend or
                  infrastructure required.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full px-8">
                  Try Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8"
                >
                  Install Now
                </Button>
              </div>
              <div className="w-full max-w-3xl pt-8 overflow-hidden rounded-lg border bg-background shadow-xl">
                <div className="p-0">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="AddChat widget preview"
                    className="w-full object-cover"
                    width={1200}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
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
                    Add a single script tag to your website and you're ready to
                    go. No complex setup required.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader>
                  <Globe className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Domain-customized AI</CardTitle>
                  <CardDescription>
                    Automatically trains on your website content to provide
                    relevant and accurate responses.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader>
                  <Layers className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Zero Infrastructure</CardTitle>
                  <CardDescription>
                    Uses client-owned Ollama server. No need to manage any
                    backend or infrastructure.
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
                    Minimal impact on your website's performance with our
                    optimized code.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader>
                  <Lock className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Privacy-friendly</CardTitle>
                  <CardDescription>
                    Your data stays with you. No data is sent to our servers
                    unless you choose to.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Perfect for Any Website
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  See how AddChat can enhance different types of websites
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <UseCaseCard
                title="Portfolio Sites"
                description="Help visitors learn about your work and experience without having to search through pages."
                imageSrc="/placeholder.svg?height=200&width=400"
              />
              <UseCaseCard
                title="Medical Clinics"
                description="Answer common patient questions about services, hours, and procedures."
                imageSrc="/placeholder.svg?height=200&width=400"
              />
              <UseCaseCard
                title="E-commerce Stores"
                description="Provide instant product recommendations and answer customer questions."
                imageSrc="/placeholder.svg?height=200&width=400"
              />
              <UseCaseCard
                title="Documentation Sites"
                description="Help users find the right information quickly without searching through docs."
                imageSrc="/placeholder.svg?height=200&width=400"
              />
              <UseCaseCard
                title="Educational Platforms"
                description="Answer student questions and provide additional learning resources."
                imageSrc="/placeholder.svg?height=200&width=400"
              />
              <UseCaseCard
                title="Real Estate"
                description="Answer questions about properties and help schedule viewings."
                imageSrc="/placeholder.svg?height=200&width=400"
              />
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-20 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Try It Yourself
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Experience how AddChat works on your website
                </p>
              </div>
            </div>
            <div className="mt-16 flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-1/2">
                <Tabs defaultValue="website" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="website">Website Preview</TabsTrigger>
                    <TabsTrigger value="widget">Widget Preview</TabsTrigger>
                  </TabsList>
                  <TabsContent
                    value="website"
                    className="border rounded-lg p-4 min-h-[400px] bg-white"
                  >
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Example Website</h3>
                      <p>
                        This is how AddChat would appear on your website. Click
                        the chat icon in the bottom right to start a
                        conversation.
                      </p>
                      <div className="relative h-[300px] border rounded">
                        <div className="p-4">
                          <h4 className="text-lg font-semibold">
                            Website Content
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            This is example content that AddChat will use to
                            provide relevant answers.
                          </p>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <Button
                            size="icon"
                            className="rounded-full h-12 w-12 shadow-lg"
                          >
                            <MessageSquare className="h-6 w-6" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent
                    value="widget"
                    className="border rounded-lg p-4 min-h-[400px] bg-white"
                  >
                    {/* <AddChat /> */}
                  </TabsContent>
                </Tabs>
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-2xl font-bold">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Add a single line of code
                      </h4>
                      <p className="text-muted-foreground">
                        Just add our script to your website's HTML.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <span className="font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Connect to your Ollama server
                      </h4>
                      <p className="text-muted-foreground">
                        Point to your own Ollama instance for complete control.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <span className="font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Customize to match your brand
                      </h4>
                      <p className="text-muted-foreground">
                        Change colors, position, and behavior to fit your needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <span className="font-bold text-primary">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Start chatting</h4>
                      <p className="text-muted-foreground">
                        Your visitors can now get instant, relevant answers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Install Section */}
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
                      <CardTitle className="text-base">
                        data-ollama-url
                      </CardTitle>
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

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Website?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Add intelligent chat capabilities to your website in seconds
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full px-8">
                  Get Started for Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8"
                >
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">AddChat</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Add AI chat to your website in seconds with no backend required.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#features"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 AddChat. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M12 2H2v10h10V2zM22 2h-8v10h8V2zM12 14H2v8h10v-8zM22 14h-8v8h8v-8z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
