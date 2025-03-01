"use client"

import * as React from "react";
import { cn } from "@/lib/utils";
import { JSX } from "react";

interface DockProps {
    className?: string;
    items: {
        icon: () => JSX.Element;
        label: string;
        onClick?: () => void;
    }[];
    autoHideDelay?: number; // Time in ms before dock auto-hides
}

interface DockIconButtonProps {
    icon: () => JSX.Element;
    label: string;
    onClick?: () => void;
    className?: string;
    isFirst?: boolean;
    isLast?: boolean;
}

const DockIconButton = React.memo(
    React.forwardRef<HTMLButtonElement, DockIconButtonProps>(
        ({ icon: Icon, label, onClick, className }, ref) => (
            <button
                ref={ref}
                onClick={onClick}
                className={cn(
                    "relative group p-[10px] rounded-lg transition-all duration-300",
                    "hover:bg-secondary hover:scale-110",
                    className
                )}
                aria-label={label}
            >
                <Icon />
                <span
                    className={cn(
                        "absolute -top-8 left-1/2 -translate-x-1/2",
                        "px-2 py-1 rounded text-xs",
                        "bg-popover text-popover-foreground shadow-md",
                        "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                        "whitespace-nowrap pointer-events-none transform scale-0 group-hover:scale-100"
                    )}
                >
                    {label}
                </span>
            </button>
        )
    )
);
DockIconButton.displayName = "DockIconButton";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="rounded-[10px] border border-[#D9D9D9] bg-white flex justify-center items-center shadow-md">
        {children}
    </div>
);

const Dock: React.FC<DockProps> = React.memo(({ items, className, autoHideDelay = 3000 }) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [showDock, setShowDock] = React.useState(false);
    const lastScrollY = React.useRef(0);
    const hideTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
        // Show dock on initial render after a short delay
        const initialTimer = setTimeout(() => {
            setShowDock(true);

            // Auto-hide after specified delay
            hideTimeoutRef.current = setTimeout(() => {
                setShowDock(false);
            }, autoHideDelay);
        }, 1000);

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            lastScrollY.current = currentScrollY;

            // Clear any existing timeout
            if (hideTimeoutRef.current) {
                clearTimeout(hideTimeoutRef.current);
            }

            if (currentScrollY > 100) {
                setIsVisible(true);
                setShowDock(true);

                // Auto-hide after scrolling stops
                hideTimeoutRef.current = setTimeout(() => {
                    setShowDock(false);
                }, autoHideDelay);
            } else {
                // If at top of page, hide dock
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(initialTimer);
            if (hideTimeoutRef.current) {
                clearTimeout(hideTimeoutRef.current);
            }
        };
    }, [autoHideDelay]);

    return (
        <div
            className={cn(
                "fixed bottom-6 left-0 right-0 z-50 flex items-center justify-center",
                "transition-all duration-500 ease-in-out",
                {
                    "opacity-0 translate-y-16": !isVisible || !showDock,
                    "opacity-100 translate-y-0": isVisible && showDock
                },
                className
            )}
            onMouseEnter={() => {
                if (hideTimeoutRef.current) {
                    clearTimeout(hideTimeoutRef.current);
                }
                setShowDock(true);
            }}
            onMouseLeave={() => {
                hideTimeoutRef.current = setTimeout(() => {
                    setShowDock(false);
                }, autoHideDelay);
            }}
        >
            <div className="w-full max-w-4xl justify-center flex items-center relative">
                {items.length > 0 && (
                    <div className="flex justify-center">
                        <div className="flex transform transition-transform hover:scale-105">
                            <Wrapper><DockIconButton {...items[0]} isFirst /></Wrapper>
                        </div>

                        <div className="flex items-center px-4 gap-1">
                            <Wrapper>
                                {items.slice(1, -1).map((item) => (
                                    <DockIconButton
                                        key={item.label}
                                        {...item}
                                        className={cn("transition-transform", {
                                            "hover:scale-110": true,
                                        })}
                                    />
                                ))}
                            </Wrapper>
                        </div>

                        <div className="flex transform transition-transform hover:scale-105">
                            {items.length > 1 && <Wrapper><DockIconButton {...items[items.length - 1]} isLast /></Wrapper>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
});
Dock.displayName = "Dock";

export { Dock };