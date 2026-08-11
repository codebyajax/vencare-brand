import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-image-section">
                <div className="large-container">
                    <div className="hero-image-placeholder">
                        <Image
                            src="/ver.png"
                            alt="VenChecker 4-in-1 STI self-test kit"
                            width={444}
                            height={288}
                            priority
                        />
                    </div>

                    <p className="caption">
                        20 test<br />
                        FIG 01 : Venchecker package <br />
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
                        <Button href="https://wa.me/2349033414310"
                            target=" ">
                            Get VenChecker
                        </Button>

                        <Button
                            href="#how-it-works"
                            variant="secondary"
                            target=" "
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