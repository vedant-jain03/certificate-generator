import React from "react";
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
export class ComponentToPrint extends React.PureComponent {
  render() {
    // eslint-disable-next-line default-case
    switch (this.props.template) {
      case "template1": {
        return (
          <div style={{ position: "relative" }} id="template1s">
            <img
              src={template1}
              style={{ width: "45rem" }}
              alt="certificate template 1"
            ></img>

            <div
              className="info"
              style={{
                position: "absolute",
                top: "39%",
                left: "36%",
                width: "60%",
              }}
            >
              <h2
                style={{
                  textTransform: "uppercase",
                  color: "#0e4573",
                  textDecoration: "underline",
                  marginBottom: "1rem",
                }}
              >
                {this.props.heading === ""
                  ? "Certificate of Achievement"
                  : this.props.heading}
              </h2>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#ff9800",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                }}
              >
                This is presented to
              </h3>
              <h1 style={{ fontSize: "3rem", color: "#33d5ac" }}>
                {this.props.name === "" ? "Name" : this.props.name}
              </h1>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#ff9800",
                }}
              >
                {this.props.desc === ""
                  ? "for the active participation in the event and for giving efforts,ideas and Knowledge."
                  : this.props.desc}
              </p>
            </div>
            <div
              className="author"
              style={{
                position: "absolute",
                top: "59%",
                left: "10%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "20%",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "12px",
                  color: "#0e4573",
                  textDecoration: "underline",
                  textTransform: "uppercase",
                }}
              >
                Course Director
              </h2>
              <h1
                style={{
                  fontSize: "20px",
                  color: "#ff9800",
                  textTransform: "uppercase",
                }}
              >
                {this.props.author === "" ? "Author Name" : this.props.author}
              </h1>
            </div>
            {this.props.logo === "" ? (
              ""
            ) : (
              <img
                src={this.props.logo}
                style={{
                  position: "absolute",
                  width: "6rem",
                  borderRadius: "50%",
                  top: "20%",
                  left: "35%",
                }}
                alt="logo"
              />
            )}
          </div>
        );
      }
      case "template2": {
        return (
          <div style={{ position: "relative" }} id="template2">
            <img
              src={template2}
              style={{ width: "45rem" }}
              alt="certificate template 2"
            ></img>

            <div
              className="info"
              style={{
                position: "absolute",
                top: "34%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  color: "rgb(255 251 240)",
                  textDecoration: "underline",
                  marginBottom: "3rem",
                }}
              >
                {this.props.heading === ""
                  ? "Certificate of Achievement"
                  : this.props.heading}
              </h2>
              {/* <h3 style={{ fontSize: '16px', fontWeight: '500', color: '#ff9800', textTransform: 'uppercase', letterSpacing: '3px' }}>This is presented to</h3> */}
              <h1 style={{ fontSize: "3rem", color: "rgb(209 254 255)" }}>
                {this.props.name === "" ? "Name" : this.props.name}
              </h1>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "rgb(255 251 240)",
                  width: "60%",
                  textAlign: "center",
                }}
              >
                {this.props.desc === ""
                  ? "for the active participation in the event and for giving efforts,ideas and Knowledge."
                  : this.props.desc}
              </p>
            </div>
            <div
              className="author"
              style={{
                position: "absolute",
                top: "80%",
                left: "26%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "12px",
                  color: "rgb(187 238 243)",
                  textDecoration: "underline",
                }}
              >
                Course Director
              </h2>
              <h1 style={{ fontSize: "20px", color: "#ace3ea" }}>
                {this.props.author === "" ? "Author Name" : this.props.author}
              </h1>
            </div>
            {this.props.logo === "" ? (
              ""
            ) : (
              <img
                src={this.props.logo}
                style={{
                  position: "absolute",
                  width: "4rem",
                  borderRadius: "50%",
                  top: "78%",
                  left: "62%",
                }}
                alt="logo"
              />
            )}
          </div>
        );
      }
      case "template3": {
        return (
          <div style={{ position: "relative" }} id="template2">
            <img
              src={template3}
              style={{ width: "45rem" }}
              alt="certificate template 3"
            ></img>

            <div
              className="info"
              style={{
                position: "absolute",
                top: "25%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  color: "white",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  marginBottom: "1rem",
                }}
              >
                {this.props.heading === ""
                  ? "Certificate of Achievement"
                  : this.props.heading}
              </h2>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "rgb(255, 152, 0)",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                }}
              >
                is hereby awarded to
              </h3>
              <h1 style={{ fontSize: "3rem", color: "#e55e5e" }}>
                {this.props.name === "" ? "Name" : this.props.name}
              </h1>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "rgb(255 251 240)",
                  width: "60%",
                  textAlign: "center",
                }}
              >
                {this.props.desc === ""
                  ? "for the active participation in the event and for giving efforts,ideas and Knowledge."
                  : this.props.desc}
              </p>
            </div>
            <div
              className="author"
              style={{
                position: "absolute",
                top: "70%",
                left: "41%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "12px",
                  color: "white",
                  textDecoration: "underline",
                }}
              >
                Course Director
              </h2>
              <h1 style={{ fontSize: "20px", color: "rgb(231 133 58)" }}>
                {this.props.author === "" ? "Author Name" : this.props.author}
              </h1>
            </div>
            {this.props.logo === "" ? (
              ""
            ) : (
              <img
                src={this.props.logo}
                style={{
                  position: "absolute",
                  width: "4rem",
                  borderRadius: "50%",
                  top: "10%",
                  left: "45%",
                }}
                alt="logo"
              />
            )}
          </div>
        );
      }
      case "template4": {
        return (
          <div style={{ position: "relative" }} id="template2">
            <img
              src={template4}
              style={{ width: "45rem" }}
              alt="certificate template 4"
            ></img>
            <h1
              style={{
                fontSize: "3rem",
                color: "black",
                position: "absolute",
                top: "9rem",
                left: "25px",
                wordBreak: "break-all",
              }}
            >
              {this.props.name === "" ? "Name" : this.props.name}
            </h1>
            <h6
              style={{
                fontSize: "15px",
                fontWeight: "600",
                color: "#213a62",
                width: "60%",
                position: "absolute",
                top: "17rem",
                left: "27px",
                wordBreak: "break-all",
              }}
            >
              {this.props.desc === ""
                ? "for the active participation in the event and for giving efforts,ideas and Knowledge."
                : this.props.desc}
            </h6>
            <h1
              style={{
                fontSize: "15px",
                color: "black",
                position: "absolute",
                top: "19.95rem",
                left: "8.6rem",
                wordBreak: "break-all",
              }}
            >
              {this.props.author === "" ? "Author Name" : this.props.author}
            </h1>
          </div>
        );
      }
      case "template5": {
        return (
          <div style={{ position: "relative" }} id="template2">
            <img
              src={template5}
              style={{ width: "45rem" }}
              alt="certificate template 5"
            ></img>

            <div
              className="info"
              style={{
                position: "absolute",
                top: "39%",
                left: "36%",
                width: "60%",
              }}
            >
              <h2
                style={{
                  textTransform: "uppercase",
                  color: "#781114",
                  textDecoration: "underline",
                  marginBottom: "1rem",
                }}
              >
                {this.props.heading === ""
                  ? "Certificate of Achievement"
                  : this.props.heading}
              </h2>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#0300b0",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                }}
              >
                This is presented to
              </h3>
              <h1 style={{ fontSize: "3rem", color: "black" }}>
                {this.props.name === "" ? "Name" : this.props.name}
              </h1>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#0300b0",
                }}
              >
                {this.props.desc === ""
                  ? "for the active participation in the event and for giving efforts,ideas and Knowledge."
                  : this.props.desc}
              </p>
            </div>
            <div
              className="author"
              style={{
                position: "absolute",
                top: "59%",
                left: "10%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "20%",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "12px",
                  color: "#781114",
                  textDecoration: "underline",
                  textTransform: "uppercase",
                }}
              >
                Course Director
              </h2>
              <h1
                style={{
                  fontSize: "20px",
                  color: "#0300b0",
                  textTransform: "uppercase",
                }}
              >
                {this.props.author === "" ? "Author Name" : this.props.author}
              </h1>
            </div>
            {this.props.logo === "" ? (
              ""
            ) : (
              <img
                src={this.props.logo}
                style={{
                  position: "absolute",
                  width: "6rem",
                  borderRadius: "50%",
                  top: "20%",
                  left: "35%",
                }}
                alt="logo"
              />
            )}
          </div>
        );
      }

      case "template6": {
        return (
          <div style={{ position: "relative" }} id="template2">
            <img
              src={template6}
              style={{ width: "45rem" }}
              alt="certificate template 6"
            ></img>

            <div
              className="info"
              style={{
                position: "absolute",
                top: "35%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  color: "white",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  marginBottom: "1rem",
                }}
              >
                {this.props.heading === ""
                  ? "Certificate of Achievement"
                  : this.props.heading}
              </h2>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "rgb(174, 74, 255)",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                }}
              >
                is hereby awarded to
              </h3>
              <h1 style={{ fontSize: "3rem", color: "#ffffff" }}>
                {this.props.name === "" ? "Name" : this.props.name}
              </h1>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "rgb(255 251 240)",
                  width: "60%",
                  textAlign: "center",
                }}
              >
                {this.props.desc === ""
                  ? "for the active participation in the event and for giving efforts,ideas and Knowledge."
                  : this.props.desc}
              </p>
            </div>
            <div
              className="author"
              style={{
                position: "absolute",
                top: "70%",
                left: "41%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "12px",
                  color: "white",
                  textDecoration: "underline",
                }}
              >
                Course Director
              </h2>
              <h1
                style={{
                  fontSize: "20px",
                  color: "#ffff58",
                  fontWeight: "100",
                }}
              >
                {this.props.author === "" ? "Author Name" : this.props.author}
              </h1>
            </div>
            {this.props.logo === "" ? (
              ""
            ) : (
              <img
                src={this.props.logo}
                style={{
                  position: "absolute",
                  width: "4rem",
                  borderRadius: "50%",
                  top: "10%",
                  left: "45%",
                }}
                alt="logo"
              />
            )}
          </div>
        );
      }

      case "template7": {
        return (
          <div style={{ position: "relative" }} id="template2">
            <img
              src={template7}
              style={{ width: "45rem" }}
              alt="certificate template 7"
            ></img>

            <div
              className="info"
              style={{
                position: "absolute",
                top: "25%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  color: "orange",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  marginBottom: "1rem",
                }}
              >
                {this.props.heading === ""
                  ? "Certificate of Achievement"
                  : this.props.heading}
              </h2>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "orange",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                }}
              >
                is hereby awarded to
              </h3>
              <h1 style={{ fontSize: "3rem", color: "red" }}>
                {this.props.name === "" ? "Name" : this.props.name}
              </h1>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "yellow",
                  width: "60%",
                  textAlign: "center",
                }}
              >
                {this.props.desc === ""
                  ? "for the active participation in the event and for giving efforts,ideas and Knowledge."
                  : this.props.desc}
              </p>
            </div>
            <div
              className="author"
              style={{
                position: "absolute",
                top: "70%",
                left: "41%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "12px",
                  color: "red",
                  textDecoration: "underline",
                }}
              >
                Course Director
              </h2>
              <h1 style={{ fontSize: "20px", color: "black" }}>
                {this.props.author === "" ? "Author Name" : this.props.author}
              </h1>
            </div>
            {this.props.logo === "" ? (
              ""
            ) : (
              <img
                src={this.props.logo}
                style={{
                  position: "absolute",
                  width: "4rem",
                  borderRadius: "50%",
                  top: "10%",
                  left: "45%",
                }}
                alt="logo"
              />
            )}
          </div>
        );
      }

      case "template8": {
        return (
          <div style={{ position: "relative" }} id="template2">
            <img
              src={template8}
              style={{ width: "45rem" }}
              alt="certificate template 8"
            ></img>

            <div
              className="info"
              style={{
                position: "absolute",
                top: "25%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  color: "#560073",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  marginBottom: "1rem",
                }}
              >
                {this.props.heading === ""
                  ? "Certificate of Achievement"
                  : this.props.heading}
              </h2>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "rgb(201, 41, 255)",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                }}
              >
                is hereby awarded to
              </h3>
              <h1 style={{ fontSize: "3rem", color: "#560073" }}>
                {this.props.name === "" ? "Name" : this.props.name}
              </h1>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "rgb(0, 0, 0)",
                  width: "60%",
                  textAlign: "center",
                }}
              >
                {this.props.desc === ""
                  ? "for the active participation in the event and for giving efforts,ideas and Knowledge."
                  : this.props.desc}
              </p>
            </div>
            <div
              className="author"
              style={{
                position: "absolute",
                top: "70%",
                left: "41%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "12px",
                  color: "#c929ff",
                  textDecoration: "underline",
                }}
              >
                Course Director
              </h2>
              <h1 style={{ fontSize: "20px", color: "rgb(19, 22, 207)" }}>
                {this.props.author === "" ? "Author Name" : this.props.author}
              </h1>
            </div>
            {this.props.logo === "" ? (
              ""
            ) : (
              <img
                src={this.props.logo}
                style={{
                  position: "absolute",
                  width: "4rem",
                  borderRadius: "50%",
                  top: "10%",
                  left: "45%",
                }}
                alt="logo"
              />
            )}
          </div>
        );
      }

      case "template9": {
        return (
          <div style={{ position: "relative" }} id="template2">
            <img
              src={template9}
              style={{ width: "45rem" }}
              alt="certificate template 9"
            ></img>

            <div
              className="info"
              style={{
                position: "absolute",
                top: "25%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  color: "#0edee6",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  marginBottom: "1rem",
                }}
              >
                {this.props.heading === ""
                  ? "Certificate of Achievement"
                  : this.props.heading}
              </h2>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "rgb(6, 124, 214)",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                }}
              >
                is hereby awarded to
              </h3>
              <h1 style={{ fontSize: "3rem", color: "#0edee6" }}>
                {this.props.name === "" ? "Name" : this.props.name}
              </h1>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "rgb(6, 124, 214)",
                  width: "60%",
                  textAlign: "center",
                }}
              >
                {this.props.desc === ""
                  ? "for the active participation in the event and for giving efforts,ideas and Knowledge."
                  : this.props.desc}
              </p>
            </div>
            <div
              className="author"
              style={{
                position: "absolute",
                top: "68%",
                left: "44%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "12px",
                  color: "#0edee6",
                  textDecoration: "underline",
                }}
              >
                Course Director
              </h2>
              <h1 style={{ fontSize: "20px", color: "rgb(6, 124, 214)" }}>
                {this.props.author === "" ? "Author Name" : this.props.author}
              </h1>
            </div>
            {this.props.logo === "" ? (
              ""
            ) : (
              <img
                src={this.props.logo}
                style={{
                  position: "absolute",
                  width: "4rem",
                  borderRadius: "50%",
                  top: "10%",
                  left: "45%",
                }}
                alt="logo"
              />
            )}
          </div>
        );
      }
    }
  }
}
