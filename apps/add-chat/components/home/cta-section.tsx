import { Button } from "@repo/ui";

export const CTASection = () => {
  return (
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
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
