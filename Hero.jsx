import "../css/Hero.css";

function Hero() {
    const show = () => {
        alert("Please log in first!");
    };

    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Learn React With Me 🚀</h1>

                <p>
                    Master React.js and Full Stack Development with
                    practical projects, modern technologies, and hands-on learning.
                </p>

                <div className="hero-buttons">
                    <button className="btn-primary" onClick={show}>
                        Get Started
                    </button>

                    <button className="btn-secondary">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;