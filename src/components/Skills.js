import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About Skills</h2>
                        <p>Results-driven MERN Stack Developer with a knack for problem-solving and a proven track record of successfully completing diverse projects in record time.<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="meters" />
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="meters" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="meters" />
                                <h5>Express.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meters" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="meters" />
                                <h5>Firebase</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="meters" />
                                <h5>Tailwind CSS</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="meters" />
    </section>
  )
}
