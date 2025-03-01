import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariants = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
type ButtonSizes = "default" | "sm" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariants;
    size?: ButtonSizes;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, variant = "default", size = "default", ...props }, ref) => {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
                    variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
                    variant === "destructive" && "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    variant === "outline" && "bg-transparent border border-input hover:bg-accent hover:text-accent-foreground",
                    variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
                    variant === "link" && "underline-offset-4 hover:underline",
                    size === "default" && "h-9 px-4 py-2",
                    size === "sm" && "h-8 px-3 rounded-md",
                    size === "lg" && "h-10 px-8 rounded-md",
                    size === "icon" && "w-9 h-9",
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
