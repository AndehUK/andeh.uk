import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExternalLink } from "lucide-react";

type Props = {
  name: string;
  description: string;
  href: string;
};

export const ProjectCard = ({ name, description }: Props) => {
  return (
    <Card className="flex h-full flex-col hover:bg-card/80">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter className="flex h-full items-end">
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild className="hover:cursor-not-allowed">
              <Button variant="disabledDefault">
                <ExternalLink />
                Go to project
              </Button>
              {/* TODO: Add next/link to project */}
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={10}>
              Coming Soon!
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};
