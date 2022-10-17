import React, { useRef, useState } from "react";
import "./homepage.css";
import { useReactToPrint } from "react-to-print";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

import firebase from "../firebase";

import ReactToPrint from "react-to-print";
import Popup from "./Popup";
import { ComponentToPrint } from "./ComponentToPrint";
import {
  template1,
  template2,
  template3,
  template4,
  template5,
  template6,
  template7,
  template8,
  template9,
} from "../cert_templates/templates";

function Homepage() {
  const [pop, setPop] = useState(false);
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");
  const [desc, setDesc] = useState("");
  const [author, setAuthor] = useState("");
  const [logo, setLogo] = useState("");
  const [template, setTemplate] = useState("template4");
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const signout = () => {
    firebase.auth().signOut();
  };
  return (
    <div className="main">
      <Popup trigger={pop} setPop={setPop}></Popup>
      <div className="header">
        <div className="left">
          <h2>Hash/Hub</h2>
        </div>
        <div className="header-middle">
          <h1>Certificate Generator</h1>
        </div>
        <div className="right">
          <button className="info" title="Info" onClick={() => setPop(true)}>
            i
          </button>
          <a href="https://github.com/vedant-jain03/certificate-generator">
            Contribute <ArrowUpwardIcon />{" "}
          </a>
          <a href="https://github.com/vedant-jain03/certificate-generator">
            Give us <StarOutlineIcon />{" "}
          </a>
          <button onClick={signout}>Logout</button>
        </div>
      </div>
      <div className="main-container">
        <div className="leftmost">
          <h1>Templates</h1>
          <div
            className={`templates ${template === "template1" ? "active" : ""}`}
            onClick={() => setTemplate("template1")}
          >
            <img src={template1} alt="" />
          </div>
          <div
            className={`templates ${template === "template2" ? "active" : ""}`}
            onClick={() => setTemplate("template2")}
          >
            <img src={template2} alt="" />
          </div>
          <div
            className={`templates ${template === "template3" ? "active" : ""}`}
            onClick={() => setTemplate("template3")}
          >
            <img src={template3} alt="" />
          </div>
          <div
            className={`templates ${template === "template4" ? "active" : ""}`}
            onClick={() => setTemplate("template4")}
          >
            <img src={template4} alt="" />
          </div>
          <div
            className={`templates ${template === "template5" ? "active" : ""}`}
            onClick={() => setTemplate("template5")}
          >
            <img src={template5} alt="" />
          </div>
          <div
            className={`templates ${template === "template6" ? "active" : ""}`}
            onClick={() => setTemplate("template6")}
          >
            <img src={template6} alt="" />
          </div>
          <div
            className={`templates ${template === "template7" ? "active" : ""}`}
            onClick={() => setTemplate("template7")}
          >
            <img src={template7} alt="" />
          </div>
          <div
            className={`templates ${template === "template8" ? "active" : ""}`}
            onClick={() => setTemplate("template8")}
          >
            <img src={template8} alt="" />
          </div>
          <div
            className={`templates ${template === "template9" ? "active" : ""}`}
            onClick={() => setTemplate("template9")}
          >
            <img src={template9} alt="" />
          </div>
        </div>
        <div className="middle">
          <ComponentToPrint
            ref={componentRef}
            name={name}
            heading={heading}
            desc={desc}
            author={author}
            logo={logo}
            template={template}
          />
        </div>
        <div className="right">
          <div className="form">
            <div className="input-box">
              <span className="details">Heading</span>
              <input
                type="text"
                placeholder="Enter heading"
                onChange={(e) => {
                  setHeading(e.target.value);
                }}
              />
            </div>
            <div className="input-box">
              <span className="details">Participant Name</span>
              <input
                type="text"
                placeholder="Enter participant Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="input-box">
              <span className="details">Description</span>
              <textarea
                type="text"
                placeholder="Enter Description"
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="input-box">
              <span className="details">Author Name</span>
              <input
                type="text"
                placeholder="Enter Author Name"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="input-box">
              <span className="details">Logo URL</span>
              <input
                type="text"
                placeholder="Enter logo URL"
                onChange={(e) => setLogo(e.target.value)}
              />
            </div>

            {/* <button className="generate" onClick={handlePrint}>Generate  Certificate</button> */}
            <ReactToPrint
              trigger={() => (
                <button className="generate">Print this out!</button>
              )}
              content={() => componentRef.current}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
