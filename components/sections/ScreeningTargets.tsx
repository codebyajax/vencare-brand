import SectionHeading from "@/components/ui/SectionHeading";

interface ScreeningTarget {
    number: string;
    name: string;
    description: string;
}

const targets: ScreeningTarget[] = [
    {
        number: "01",
        name: "HIV-1/2",
        description:
            "Screens for antibodies associated with HIV-1 and HIV-2.",
    },
    {
        number: "02",
        name: "Syphilis",
        description:
            "Screens for antibodies associated with Treponema pallidum.",
    },
    {
        number: "03",
        name: "Hepatitis B",
        description:
            "Screens for hepatitis B surface antigen (HBsAg).",
    },
    {
        number: "04",
        name: "Hepatitis C",
        description:
            "Screens for antibodies associated with hepatitis C.",
    },
];

export default function ScreeningTargets() {
    return (
        <section className="section screening-section">
            <div className="container">
                <SectionHeading
                    eyebrow="ONE SAMPLE"
                    title="Four screening targets."
                />

                <div className="screening-list">
                    {targets.map((target) => (
                        <div
                            className="screening-row"
                            key={target.number}
                        >
                            <div className="screening-number">
                                {target.number}
                            </div>

                            <div className="screening-name">
                                <h3>{target.name}</h3>
                            </div>

                            <div className="screening-description">
                                <p>{target.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}