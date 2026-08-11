import Eyebrow from "@/components/ui/Eyebrow";

export default function BrandStory() {
    return (
        <section className="section story-section">
            <div className="container">
                <div className="story-grid">
                    <div>
                        <Eyebrow>
                            WHY VENChecker
                        </Eyebrow>
                    </div>

                    <div>
                        <p className="large-copy">
                            We believe basic health screening should feel
                            simple, private and straightforward.
                        </p>

                        <p className="story-copy">
                            VenChecker offers an accessible first step for
                            people who want to know more about their health
                            without turning the process into something
                            unnecessarily complicated.
                        </p>

                        <p className="story-copy">
                            One kit. One sample. Four screening targets.
                            And when a result needs further investigation,
                            the next step is clear: seek appropriate
                            confirmatory testing and professional medical
                            advice.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}