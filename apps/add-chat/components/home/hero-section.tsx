import { Badge, Button } from "@repo/ui";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="px-3 py-1 text-sm" variant="secondary">
              Just launched
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Add AI Chat to Your Website <br className="hidden sm:inline" />
              in Seconds
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A lightweight AI chatbot widget that can be embedded into any
              website with just one line of script. No backend or infrastructure
              required.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full px-8">
              Try Demo
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
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
  );
};
