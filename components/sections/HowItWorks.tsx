import SectionHeading from "@/components/ui/SectionHeading";

interface Step {
    number: string;
    title: string;
    description: string;
}

const steps: Step[] = [
    {
        number: "01",
        title: "Prepare",
        description:
            "Clean your fingertip using the supplied alcohol swab.",
    },
    {
        number: "02",
        title: "Prick",
        description:
            "Use the safety lancet according to the manufacturer's instructions.",
    },
    {
        number: "03",
        title: "Test",
        description:
            "Apply the required blood sample to the test cassette and add the buffer as instructed.",
    },
    {
        number: "04",
        title: "Read",
        description:
            "Read the test according to the manufacturer's instructions within the specified time window.",
    },
];

export default function HowItWorks() {
    return (
        <section
            className="section steps-section"
            id="how-it-works"
        >
            <div className="container">
                <SectionHeading
                    eyebrow="THE PROCESS"
                    title="Four simple steps."
                />

                <div className="steps-list">
                    {steps.map((step) => (
                        <div
                            className="step-row"
                            key={step.number}
                        >
                            <div className="step-number">
                                {step.number}
                            </div>

                            <div className="step-title">
                                <h3>{step.title}</h3>
                            </div>

                            <div className="step-description">
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}