import "../styles/carousel.css";

export const Carousel = () => {
  const carouselContent = [
    {
      title: "Smart Reminders",
      description:
        "Get notified exactly when your favorite movies, shows, and games are released",
    },
    {
      title: "Instant Discovery",
      description:
        "Find upcoming media across all platforms with our intelligent search",
    },
    {
      title: "Calendar Sync",
      description: "Automatically add releases to your preferred calendar app",
    },
  ];

  return (
    <div className="features-grid">
      {carouselContent.map((object, idx) => (
        <div className="feature-card" key={idx}>
          <h3 className="feature-title">{object.title}</h3>
          <p className="feature-description">{object.description}</p>
        </div>
      ))}
    </div>
  );
};
