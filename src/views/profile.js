import React, { Component } from "react";
import profImg from "../cesar-rincon-XHVpWcr5grQ-unsplash.jpg";

export class Profile extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="logo">
            <h4>PUT LOGO</h4>
          </div>
          <input type="search" class="search" placeholder="Search" id="" />
          <ul type="none" class="nav_links" style={{ marginTop: "3  0px" }}>
            <li>
              <a href="#">Find People</a>
            </li>
            <li>
              <a href="#">Messages</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
          <div className="col s1">
            <img
              src={profImg}
              style={{ borderRadius: "50%", height: "50px", width: "50px" }}
            ></img>
          </div>
        </nav>
        <div className="profile_container">
          <div className="left">
            <div classNameName="picture">
              <img src={profImg} alt="no image" height="300" width="300" />
            </div>
            <div className="work">
              <small>work</small>
              <div className="description">
                <div className="header">
                  <h3>Spotify New York</h3>
                  <span className="tag1">Primary</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore id blanditiis laborum veritatis corporis quasi.
                </p>
              </div>
              <div className="description">
                <div className="header">
                  <h3>Facebook</h3>
                  <span className="tag1">Secondary</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore id blanditiis laborum veritatis corporis quasi.
                </p>
              </div>
            </div>
            <div className="skills">
              <small>skills</small>
              <ul type="none">
                <li>Java</li>
                <li>Branding</li>
                <li>UI/UX</li>
                <li>Print & Editorial</li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="details">
              <h2>Jeremy Clarke</h2>
              <p className="location">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-map-pin"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2196F3"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="11" r="3" />
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                </svg>
                San Francisco, CA
              </p>
              <p className="designation">Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
