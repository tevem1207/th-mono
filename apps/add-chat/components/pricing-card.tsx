import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui";
import { CheckCircle } from "@repo/ui/icons";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant?: "default" | "outline";
  highlighted?: boolean;
}

export const PricingCard = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonVariant = "default",
  highlighted = false,
}: PricingCardProps) => {
  return (
    <Card
      className={`flex flex-col ${highlighted ? "border-primary shadow-lg scale-105" : ""}`}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="mt-4 flex items-baseline text-5xl font-extrabold">
          {price}
          {period && (
            <span className="ml-1 text-xl font-medium text-muted-foreground">
              {period}
            </span>
          )}
        </div>
        <CardDescription className="mt-4">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full rounded-full" variant={buttonVariant}>
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};
