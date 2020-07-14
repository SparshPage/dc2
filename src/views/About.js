import React, { Component } from "react";
import SubNav from "./SubNav";

export class About extends Component {
  render() {
    return (
      <div>
        <div className="about" style={{ marginLeft: "20px" }}>
          <label style={{ fontWeight: "160px", fontSize: "18px" }}>
            CONTACT INFORMATION
          </label>
          <br />
          <label> Phone No. : +91-9944496421</label>
          <br />
          <label> Adress : 221-B Baker Street, London , United Kingdom</label>
          <br />
          <label> Email : sparshpage@gmail.com</label>
          <br />
          <label> Site : githubPage.com </label>
          <br />
          <br />
          <label style={{ fontWeight: "160px", fontSize: "18px" }}>
            BASIC INFORMATION
          </label>
          <br />
          <label> Birth Day : 30/06/1999</label>
          <br />
          <label>Gender : Male</label>
          <br />
        </div>
      </div>
    );
  }
}

export default About;
