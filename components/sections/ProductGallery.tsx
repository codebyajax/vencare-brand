import Image from "next/image";

export default function ProductGallery() {
    return (
        <section className="section visual-section">
            <div className="large-container">
                <div className="visual-grid">
                    <div className="visual-card visual-large">
                        <Image
                            src="/aparatus.png"
                            alt="VenChecker 4-in-1 STI self-test kit"
                            width={654}
                            height={456}
                            priority
                        />
                    </div>

                    <div className="visual-column">
                        <div className="visual-card  p-0!">
                            <Image
                                src="/fp.png"
                                alt="VenChecker 4-in-1 STI self-test kit"
                                width={654}
                                height={456}
                                priority
                                className="object-cover cover-top"
                            />
                        </div>

                        <div className="visual-card">
                            <Image
                                src="/hero-img.png"
                                alt="VenChecker 4-in-1 STI self-test kit"
                                width={624}
                                height={416}
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div className="visual-card visual-wide">
                    <span>
                        Private. Simple. Straightforward.
                    </span>
                </div>
            </div>
        </section>
    );
}