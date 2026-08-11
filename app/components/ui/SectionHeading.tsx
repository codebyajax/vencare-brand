import Eyebrow from "./Eyebrow";

interface SectionHeadingProps {
    eyebrow: string;
    title: string;
}

export default function SectionHeading({
    eyebrow,
    title,
}: SectionHeadingProps) {
    return (
        <div className="section-heading">
            <Eyebrow>{eyebrow}</Eyebrow>

            <h2>{title}</h2>
        </div>
    );
}