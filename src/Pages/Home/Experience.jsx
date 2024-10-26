import data from "../../data/index.json";

export default function Experience() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Work Experience</p>
          <h2 className="sections--heading">Experience</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.experience?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <div className="testimonial--section--card--author--detail">
              <div>
                <p className="text-md testimonial--author--name">
                  {item.company_name}
                </p>
                <p className="text-md testimonial--author--designation">
                  {item.company_designation}
                </p>
                <br></br>
                <p>{item.duration}</p>
              </div>
            </div>
            <p className="text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
