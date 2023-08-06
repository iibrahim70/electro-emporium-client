import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "py-2.5 px-6 rounded-lg duration-300 ease-in-out inline-block",
  {
    variants: {
      color: {
        default: "bg-dark text-light hover:bg-dark/90",
        ghost: "bg-transparent text-dark hover:bg-dark/10",
        danger: "bg-red text-light hover:bg-red/90",
        success: "bg-green text-light hover:bg-green/90",
        orange: "bg-orange text-light hover:bg-orange/90",
        purple: "bg-purple text-light hover:bg-purple/90",
      },
    },
    defaultVariants: {
      color: "success",
    },
  }
);

interface NewLinkProps extends VariantProps<typeof buttonVariants> {
  href: string;
  target?: string;
  children: React.ReactNode;
}

const NewLink: React.FC<NewLinkProps> = ({ href, target, children, color }) => {
  return (
    <Link href={href} target={target} className={cn(buttonVariants({ color }))}>
      {children}
    </Link>
  );
};

export default NewLink;
