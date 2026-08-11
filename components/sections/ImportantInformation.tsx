import Eyebrow from "@/components/ui/Eyebrow";

export default function ImportantInformation() {
    return (
        <section className="section information-section">
            <div className="container">
                <div className="information-box">
                    <Eyebrow>
                        IMPORTANT
                    </Eyebrow>

                    <h2>
                        Screening is not diagnosis.
                    </h2>

                    <p>
                        VenChecker is intended as an initial screening
                        tool. A reactive, positive, invalid or unclear
                        result should be followed by appropriate
                        confirmatory testing and consultation with a
                        qualified healthcare professional.
                    </p>

                    <p>
                        Always follow the manufacturer's instructions
                        supplied with the product.
                    </p>
                </div>
            </div>
        </section>
    );
}