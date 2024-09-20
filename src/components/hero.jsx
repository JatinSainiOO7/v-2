import '../styles/application.css';

const HeroSection = () => {
  return (
    <section className="hero-section container">
      <div className='circles'>
        <div className='circle-1 circle'></div>
        <div className='circle-2 circle circle-back'></div>
      </div>
      <div className='title'>
        <p>
        Building Aesthetic and Functional Web Experiences.
        </p>
      </div>
      <div className='slogan'>
        <p>
        Code with Creativity, Design with Purpose
        </p>
      </div>
      <div className='link-container'>
        <div className='button github'>Visit My GitHub</div>
      </div>
    </section>
  );
};

export default HeroSection;