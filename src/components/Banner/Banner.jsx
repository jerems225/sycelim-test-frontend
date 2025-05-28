import './Banner.css'

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-overlay" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}></div>
            <div className="banner-content">
                <h1>Find Your Dream Home</h1>
                <p>Apartments, villas, and lands available across the world</p>
                <a href="#listings" className="btn-primary">Browse Properties</a>
            </div>
        </section>
    );
};

export default Banner;
