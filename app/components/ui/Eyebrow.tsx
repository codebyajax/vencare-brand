interface EyebrowProps {
    children: React.ReactNode;
}

export default function Eyebrow({
    children,
}: EyebrowProps) {
    return (
        <p className="eyebrow">
            {children}
        </p>
    );
  }