import "../styles/ctaSection.css";

export const CtaSection = () => {
  return (
    <div className="cta-section">
      <h2 className="cta-title">Never Miss a Release</h2>
      <p className="cta-description">
        Join thousands of media enthusiasts who stay perfectly timed with Sqrrl
      </p>
      <a href="#" className="cta-button">
        <i data-feather="play"></i>
        Get Started
      </a>

      <div className="app-store-badges">
        <a href="#" className="badge">
          <i data-feather="apple"></i>
          App Store
        </a>
        <a href="#" className="badge">
          <i data-feather="play"></i>
          Google Play
        </a>
      </div>
    </div>
  );
};
