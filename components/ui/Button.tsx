import Link from "next/link";

interface ButtonProps {
    href: string;
    target:string;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
}

export default function Button({
    href,
    target,
    children,
    variant = "primary",
}: ButtonProps) {
    return (
        <Link
            href={href}
            target={target}
            className={`button ${variant === "primary"
                ? "button-primary"
                : "button-secondary"
                }`}
        >
            {children}
        </Link>
    );
}