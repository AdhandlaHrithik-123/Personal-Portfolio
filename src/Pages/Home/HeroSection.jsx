export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Hrithik</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software Development</span>{" "}
            <br />
            Enginner(Front-End)
          </h1>
          <p className="hero--section-description">
          Crafting seamless, interactive web experiences through the power of front-end magic.
          </p>
        </div>
        <br></br>
        <a href="https://www.linkedin.com/in/hrithikadhandla/" className="btn btn-primary">
        Get In Touch
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
