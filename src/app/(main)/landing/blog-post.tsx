import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  date: string;
  href: string;
};

export const BlogPost = ({ title, description, date, href }: Props) => {
  return (
    <Link href={href}>
      <Card className="flex h-full flex-col border-b-0 border-l-4 border-r-0 border-t-0 border-purple-500 bg-transparent shadow-none hover:bg-card/80">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{description}</CardContent>
        <CardFooter className="flex h-full items-end">
          <span className="text-sm text-purple-400">{date}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};
