import { UseCaseCard } from "../use-case-card";

export const UseCasesSection = () => {
  return (
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
  );
};
