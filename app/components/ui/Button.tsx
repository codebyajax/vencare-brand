import Link from "next/link";

interface ButtonProps {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
}

export default function Button({
    href,
    children,
    variant = "primary",
}: ButtonProps) {
    return (
        <Link
            href={href}
            className={`button ${variant === "primary"
                    ? "button-primary"
                    : "button-secondary"
                }`}
        >
            {children}
        </Link>
    );
}