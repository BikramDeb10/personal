import "./project.css";

function Project() {
  return (
    <div className="project-section">
      <div className="project-sec-hero">
        <ProjectTitle />
        <ProjectItems />
      </div>
    </div>
  );
}

function ProjectTitle() {
  return (
    <div className="project-title">
      <h2>Projects</h2>
      <p>
        Prototypes, Digital Products (Apps, Websites, SaaS solutions) and design
        systems which are visually pleasing, user-centric and easy to use.
      </p>
    </div>
  );
}

function ProjectItems() {
  return (
    <div className="projects-sec">
      <div className="pro-sec-items">
        <div className="pro-item pro-item--1">
          <a href="">
            <div className="pro-item--a">
              <div className="item-title">
                <h3 className="special-1">UNIVERSITY OF AMSTERDAM</h3>
                <p className="special-2">
                  Matching platform for students & companies
                </p>
              </div>
              <div>
                <picture>
                  <img
                    src="images/image-2.webp"
                    alt="image2"
                    className="picture-img-1"
                  ></img>
                </picture>
                <picture>
                  <img
                    src="images/image-1.webp"
                    alt="image1"
                    className="picture-img-2"
                  ></img>
                </picture>
              </div>
            </div>
          </a>
        </div>

        <div className="pro-item pro-item--2">
          <a href="">
            <div className="pro-item--a">
              <div>
                <div className="item-title item-title-2">
                  <h3>LOYALTYRIDE</h3>
                  <p>Royal car sharing platform for everyone</p>
                </div>
                <picture>
                  <img
                    src="images/image-3.webp"
                    alt="image3"
                    className="picture-img-3"
                  ></img>
                </picture>
                <picture>
                  <img
                    src="images/image-4.webp"
                    alt="image4"
                    className="picture-img-4"
                  ></img>
                </picture>
              </div>
            </div>
          </a>
        </div>

        <div className="pro-item pro-item--3">
          <a href="">
            <div className="pro-item--a">
              <div className="item-title item-title-3">
                <h3>FOUNDER OF TEAMPULSE</h3>
                <p>Realtime korfball analytics app</p>
              </div>
              <div>
                <picture>
                  <img
                    src="images/image-5.webp"
                    alt="iamge5"
                    className="picture-iamge-5"
                  ></img>
                </picture>
              </div>
            </div>
          </a>
        </div>

        <div className="pro__item-extra pro-item--4">
          <div className="project__text">
            <div className="item-title item--title">
              <p className="paragraph spacial-para1">
                "Ruben has been very helpful and did a great job designing the
                complete branding for my website.
              </p>
              <p className="paragraph spacial-para2">
                He's very professional and made revisions to his designs until I
                was completely satisfied. Highly recommended!"
              </p>
            </div>
            <div className="ceo-information">
              <img src="ceoimage/7d75ef6.png" alt="Jasper"></img>
              <div className="ceo-details">
                <h3>Jasper Ribbers</h3>
                <p>CEO and Co-Founder at Get Paid For Your Pad</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pro__item-extra pro-item--4 pro-item--41">
          <div className="project__text">
            <div className="item-title item--title">
              <p className="paragraph spacial-para3">
                "Working with Ruben is a great great pleasure, apart from being
                an excellent professional giving smart, fast en nice looking
                solutions, he is also an inspiring person to work with.
              </p>
              <p className="paragraph spacial-para4">
                I have been working with Ruben on a music platform Menno Makes
                More Music, which was complex and needed lots of thinking on new
                ways of presenting a process of making music. Ruben has been a
                great help in developing the concept and to make it into a not
                only beautiful looking, but also a very easy to navigate site
                for all users."
              </p>
            </div>
            <div className="ceo-information">
              <img src="ceoimage/05f3ad6.png" alt=""></img>
              <div className="ceo-details">
                <h3>Menno Marien</h3>
                <p className="second-ceo">Founder of CROSSMO</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pro-item pro-item--5">
          <a href="">
            <div className="pro-item--a">
              <div className="item-title">
                <h3>VITEAUX</h3>
                <p>HuisdierenApp</p>
              </div>
              <div>
                <picture>
                  <img
                    src="images/image-6.webp"
                    alt="image6"
                    className="picture-iamge-6"
                  ></img>
                </picture>
                <picture>
                  <img
                    src="images/image-7.webp"
                    alt="image7"
                    className="picture-iamge-7"
                  ></img>
                </picture>
              </div>
            </div>
          </a>
        </div>

        <div className="pro-item pro-item--6">
          <a href="">
            <div className="pro-item--a">
              <div className="item-title">
                <h3>OSRE WONINGDOSSIER</h3>
                <p>Smart Real Estate Transaction application</p>
              </div>
              <div>
                <picture>
                  <img
                    src="images/image-8.webp"
                    alt="image8"
                    className="picture-iamge-8"
                  ></img>
                </picture>
                <picture>
                  <img
                    src="images/image-9.webp"
                    alt="image9"
                    className="picture-iamge-9"
                  ></img>
                </picture>
              </div>
            </div>
          </a>
        </div>

        <div className="pro-item pro-item--7">
          <a href="">
            <div className="pro-item--a">
              <div className="item-title">
                <h3>CO-FOUNDER OF SPODIX</h3>
                <p>Video recruitment made simple</p>
              </div>
              <div>
                <picture>
                  <img
                    src="images/image-10.webp"
                    alt="image10"
                    className="picture-iamge-10"
                  ></img>
                </picture>
                <picture>
                  <img
                    src="images/image-11.webp"
                    alt="image11"
                    className="picture-iamge-11"
                  ></img>
                </picture>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
