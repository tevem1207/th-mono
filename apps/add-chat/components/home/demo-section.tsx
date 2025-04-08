import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui";
import { MessageSquare } from "@repo/ui/icons";

export const DemoSection = () => {
  return (
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
                    This is how AddChat would appear on your website. Click the
                    chat icon in the bottom right to start a conversation.
                  </p>
                  <div className="relative h-[300px] border rounded">
                    <div className="p-4">
                      <h4 className="text-lg font-semibold">Website Content</h4>
                      <p className="text-sm text-muted-foreground">
                        This is example content that AddChat will use to provide
                        relevant answers.
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
                  <h4 className="font-semibold">Add a single line of code</h4>
                  <p className="text-muted-foreground">
                    {"Just add our script to your website's HTML."}
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
  );
};
