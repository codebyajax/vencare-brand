export default function Footer() {
    return (
        <footer className="footer section">
            <div className="container center">
                <div className="footer-mark">
                    V
                </div>


                <p className="footer-small">
                    © {new Date().getFullYear()} VenChecker
                </p>

                <p className="footer-small footer-muted">
                    VenChecker is a screening product. It is not intended
                    to replace professional medical advice or confirmatory
                    testing.
                </p>
            </div>
        </footer>
    );
  }