import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Contact() {
    return (
        <section
            className="section contact-section"
            id="contact"
        >
            <div className="container center contact-inner">
                <Eyebrow>
                    PRIVATE ENQUIRIES
                </Eyebrow>

                <h2>
                    Want to know more?
                </h2>

                <p>
                    Questions about your order, delivery or the product?
                </p>

                <div className="contact-button-wrapper">
                    <Button href="https://wa.me/2349033414310" target="_blank">
                        Contact on WhatsApp
                    </Button>
                </div>


                <p className="micro-copy">
                    Product information · Availability · Delivery
                </p>
            </div>
        </section>
    );
}