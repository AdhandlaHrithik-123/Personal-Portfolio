export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          "I'm a passionate front-end developer with 1.5 years of experience crafting responsive, 
          user-centered websites. With a solid foundation in HTML, CSS, JavaScript, and React, 
          I bring design concepts to life with a focus on performance and user experience. 
          I thrive in collaborative environments, working closely with designers and back-end developers
          to build seamless and engaging digital interfaces. 
          </p>
          <p className="hero--section-description">
          I’m always eager to learn new tools and techniques to refine my skills and deliver exceptional 
          results. When I'm not coding, you’ll likely find me exploring the latest web design trends or 
          diving into new projects to keep my creativity flowing!"
          </p>
        </div>
      </div>
    </section>
  );
}
