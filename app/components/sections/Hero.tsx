import Button from "@/app/components/ui/Button";
import Eyebrow from "@/app/components/ui/Eyebrow";

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-image-section">
                <div className="large-container">
                    <div className="hero-image-placeholder">
                        <span>VENChecker</span>
                        <small>Product image</small>
                    </div>

                    <p className="caption">
                        4-in-1 rapid screening
                        <br />
                        One blood sample · Four screening targets
                    </p>
                </div>
            </div>

            <div className="hero-copy section">
                <div className="container center">
                    <Eyebrow>
                        4-IN-1 RAPID SCREENING
                    </Eyebrow>

                    <h1>
                        Know more.
                        <br />
                        Test privately.
                    </h1>

                    <p className="hero-description">
                        A rapid finger-prick self-test kit designed to
                        screen for HIV-1/2, syphilis, hepatitis B and
                        hepatitis C using a single blood sample.
                    </p>

                    <div className="hero-actions">
                        <Button href="#contact">
                            Get VenChecker
                        </Button>

                        <Button
                            href="#how-it-works"
                            variant="secondary"
                        >
                            How it works
                        </Button>
                    </div>

                    <p className="micro-copy">
                        Results available in approximately 10–20 minutes*
                    </p>
                </div>
            </div>
        </section>
    );
}