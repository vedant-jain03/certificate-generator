import React, { useRef, useState } from "react";
import "./homepage.css";
import { useReactToPrint } from "react-to-print";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

import firebase from "../firebase";

import ReactToPrint from "react-to-print";
import Popup from "./Popup";
import { ComponentToPrint } from "./ComponentToPrint";

function Homepage() {
  const [pop, setpop] = useState(false);
  const [name, setname] = useState("");
  const [heading, setheading] = useState("");
  const [desc, setdesc] = useState("");
  const [author, setauthor] = useState("");
  const [logo, setlogo] = useState("");
  const [template, settemplate] = useState("template4");
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const signout = () => {
    firebase.auth().signOut();
  };
  return (
    <div className="main">
      <Popup trigger={pop} setpop={setpop}></Popup>
      <div className="header">
        <div className="left">
          <h2>Hash/Hub</h2>
        </div>
        <div className="Middle">
          <h1>Certificate Generator</h1>
        </div>
        <div className="right">
          <button className="info" title="Info" onClick={() => setpop(true)}>
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
      <div className="maincontainer">
        <div className="leftmost">
          <h1>Templates</h1>
          <div
            className={`templates ${template === "template1" ? "active" : ""}`}
            onClick={() => settemplate("template1")}
          >
            <img src={template1} alt="" />
          </div>
          <div
            className={`templates ${template === "template2" ? "active" : ""}`}
            onClick={() => settemplate("template2")}
          >
            <img src={template2} alt="" />
          </div>
          <div
            className={`templates ${template === "template3" ? "active" : ""}`}
            onClick={() => settemplate("template3")}
          >
            <img src={template3} alt="" />
          </div>
          <div
            className={`templates ${template === "template4" ? "active" : ""}`}
            onClick={() => settemplate("template4")}
          >
            <img src={template4} alt="" />
          </div>
          <div
            className={`templates ${template === "template5" ? "active" : ""}`}
            onClick={() => settemplate("template5")}
          >
            <img src={template5} alt="" />
          </div>
          <div
            className={`templates ${template === "template6" ? "active" : ""}`}
            onClick={() => settemplate("template6")}
          >
            <img src={template6} alt="" />
          </div>
          <div
            className={`templates ${template === "template7" ? "active" : ""}`}
            onClick={() => settemplate("template7")}
          >
            <img src={template7} alt="" />
          </div>
          <div
            className={`templates ${template === "template8" ? "active" : ""}`}
            onClick={() => settemplate("template8")}
          >
            <img src={template8} alt="" />
          </div>
          <div
            className={`templates ${template === "template9" ? "active" : ""}`}
            onClick={() => settemplate("template9")}
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
                  setheading(e.target.value);
                }}
              />
            </div>
            <div className="input-box">
              <span className="details">Participant Name</span>
              <input
                type="text"
                placeholder="Enter participant Name"
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
            <div className="input-box">
              <span className="details">Description</span>
              <textarea
                type="text"
                placeholder="Enter Description"
                onChange={(e) => setdesc(e.target.value)}
              />
            </div>
            <div className="input-box">
              <span className="details">Author Name</span>
              <input
                type="text"
                placeholder="Enter Author Name"
                onChange={(e) => setauthor(e.target.value)}
              />
            </div>
            <div className="input-box">
              <span className="details">Logo URL</span>
              <input
                type="text"
                placeholder="Enter logo URL"
                onChange={(e) => setlogo(e.target.value)}
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
