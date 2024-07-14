import React from "react";
import "./side.css";

const svgImg = [
  {
    name: "image1",
    id: 1,
    photoName: "svg/hyundai-motor-company-2-logo-svgrepo-com.svg",
  },
  {
    name: "image2",
    id: 2,
    photoName: "svg/microsoft-logo-svgrepo-com.svg",
  },
  {
    name: "image3",
    id: 3,
    photoName: "svg/netflix-2-logo-svgrepo-com.svg",
  },
  {
    name: "image4",
    id: 4,
    photoName: "svg/intair-vacances-logo-svgrepo-com.svg",
  },
  {
    name: "image5",
    id: 5,
    photoName: "svg/siemens-logo-svgrepo-com.svg",
  },
  {
    name: "image6",
    id: 6,
    photoName: "svg/spotify-1-logo-svgrepo-com.svg",
  },
  {
    name: "image7",
    id: 7,
    photoName: "svg/xbox-one-logo-svgrepo-com.svg",
  },
  {
    name: "image8",
    id: 8,
    photoName: "svg/flipkart-logo-svgrepo-com.svg",
  },
  {
    name: "image9",
    id: 9,
    photoName: "svg/university-of-oxford-badge-logo-svgrepo-com.svg",
  },
  {
    name: "image10",
    id: 10,
    photoName: "svg/silver-star-1-logo-svgrepo-com.svg",
  },
  {
    name: "image11",
    id: 11,
    photoName: "svg/download-on-the-app-store-apple-logo-svgrepo-com.svg",
  },
  {
    name: "image12",
    id: 12,
    photoName: "svg/microsoft-logo-svgrepo-com.svg",
  },
  {
    name: "image13",
    id: 13,
    photoName: "svg/coca-cola-logo-svgrepo-com.svg",
  },
  {
    name: "image14",
    id: 14,
    photoName: "svg/find-us-on-facebook-logo-svgrepo-com.svg",
  },
  {
    name: "image15",
    id: 15,
    photoName: "svg/slack-logo-svgrepo-com.svg",
  },
];

function Side() {
  const allSvg = svgImg;
  return (
    <div className="side">
      <div className="side-sec">
        <React.Fragment>
          <h2>AT AGENCY SIDE, CLIENT SIDE OR AS FREELANCER</h2>
          <ul className="svg-sec">
            {allSvg.map((svg) => (
              <SideItem sItem={svg} key={svg.name} />
            ))}
          </ul>
          <p>
            Hired by creative, strategic and digital agencies,
            <a href="/"> like Booming</a> , <a href="/">Studio Stomp</a>,
            <a href="/"> Fabrique</a>, <a href="/"> TheOddshop</a>,
            <a href="/"> Generous</a> and <a href="/">Andrews:Degen</a>.
          </p>
        </React.Fragment>
      </div>
    </div>
  );
}

function SideItem({ sItem }) {
  return (
    <li className="svg-li">
      <img src={sItem.photoName} alt={sItem.id}></img>
    </li>
  );
}

export default Side;
