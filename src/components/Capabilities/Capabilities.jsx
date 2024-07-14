import React from "react";
import "./capabilities.css";

const capItem = [
  {
    id: 1,
    name: "sec1",
    svgImage: "capimage/d1b3d49.png",
    svgTitle: "UX/CX",
    svgDescription:
      "User Experience Design Rapid Prototyping Usability Testing UX Reviews Interaction Design Customer journeys",
  },
  {
    id: 2,
    name: "sec2",
    svgImage: "capimage/d3f5c5c.png",
    svgTitle: "Product Design",
    svgDescription:
      "User Interface Design Visual Design Visual Identities Design Systems Responsive & Mobile Websites Modular Grid Systems Brand guidelines",
  },
  {
    id: 3,
    name: "sec3",
    svgImage: "capimage/3383496.png",
    svgTitle: "Development",
    svgDescription:
      " Front-end development Responsive & Mobile Websites Mobile apps Animations SaaS applications Platform solutions",
  },
];

function Capabilities() {
  const capItems = capItem;
  return (
    <div className="capabilits-sec">
      <div className="capabilits-items">
        <React.Fragment>
          <h2 className="caps-title">Capabilities</h2>
          <div className="caps-items">
            <ul className="caps-ul">
              {capItems.map((cap) => (
                <CapsItem cItem={cap} key={cap.name} />
              ))}
            </ul>
          </div>
        </React.Fragment>
      </div>
    </div>
  );
}

function CapsItem({ cItem }) {
  return (
    <li className="caps-li">
      <img src={cItem.svgImage} alt={cItem.id}></img>
      <h2>{cItem.svgTitle}</h2>
      <p>{cItem.svgDescription}</p>
    </li>
  );
}

export default Capabilities;
