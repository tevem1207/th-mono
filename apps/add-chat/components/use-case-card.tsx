import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui";
import Image from "next/image";

interface UseCaseCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export const UseCaseCard = ({
  title,
  description,
  imageSrc,
}: UseCaseCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={500}
          height={500}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View Example
        </Button>
      </CardFooter>
    </Card>
  );
};
