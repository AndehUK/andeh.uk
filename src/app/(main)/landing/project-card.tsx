import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

type Props = {
  name: string;
  description: string;
  href: string;
};

export const ProjectCard = ({ name, description, href }: Props) => {
  return (
    <Card className="flex h-full flex-col hover:bg-card/80">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter className="flex h-full items-end">
        <Button asChild>
          <Link href={href}>
            <ExternalLink />
            Go to project
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
