import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div>
      <header>
        <div>
          <a href="www.you.com" id="bg-landing">
            PORTFOLIO
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="www.you.com">About</a>
            </li>
            <li>
              <a href="www.you.com">Skills</a>
            </li>
            <li>
              <a href="www.you.com">Portfolio</a>
            </li>
            <li>
              <a href="www.you.com">Contact Me</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="intro">
          <img src="/images/nasa-Q1p7bh3SHj8-unsplash.jpg" alt="" />
          <div className="About">
            <h2>About</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              explicabo, ducimus eligendi praesentium laudantium cupiditate
              minus deleniti amet officia ea odit suscipit quasi, commodi
              accusamus nemo ipsa veniam, ullam nostrum.
            </p>
          </div>
        </section>
        <section id="skills">
          <h2>My Skills</h2>
          <div className="container">
            <div className="skill">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#E44D26"
                  d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"
                ></path>
                <path
                  fill="#F16529"
                  d="M64 118.704l29.244-8.108 6.881-77.076H64z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64 66.978H49.359l-1.01-11.331H64V44.583H36.257l.264 2.969 2.72 30.489H64zm0 28.733l-.049.013-12.321-3.328-.788-8.823H39.735l1.55 17.372 22.664 6.292.051-.015z"
                ></path>
                <path d="M28.034 1.627h5.622v5.556H38.8V1.627h5.623v16.822H38.8v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.591V1.627z"></path>
                <path
                  fill="#fff"
                  d="M63.962 66.978v11.063h13.624L76.302 92.39l-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zm0-22.395v11.064h26.725l.221-2.487.505-5.608.265-2.969z"
                ></path>
              </svg>

              <p>HTML</p>
            </div>
            <div className="skill">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#1572B6"
                  d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                ></path>
                <path
                  fill="#33A9DC"
                  d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                ></path>
                <path
                  fill="#fff"
                  d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                ></path>
                <path
                  fill="#fff"
                  d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
                ></path>
              </svg>
              <p>CSS</p>
            </div>
            <div className="skill">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#F0DB4F"
                  d="M1.408 1.408h125.184v125.185H1.408z"
                ></path>
                <path
                  fill="#323330"
                  d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                ></path>
              </svg>

              <p>JavaScript</p>
            </div>
            <div className="skill">
              <svg viewBox="0 0 128 128">
                <g fill="#61DAFB">
                  <circle cx="64" cy="64" r="11.4"></circle>
                  <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                </g>
              </svg>

              <p>React</p>
            </div>
            <div className="skill">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#31251C"
                  d="M76.397 55.676c-2.737 0-4.775 1.344-4.775 4.579 0 2.437 1.343 4.129 4.628 4.129 2.784 0 4.676-1.641 4.676-4.23 0-2.934-1.693-4.478-4.529-4.478zm-5.471 22.84c-.648.795-1.294 1.64-1.294 2.637 0 1.989 2.536 2.587 6.021 2.587 2.885 0 6.816-.202 6.816-2.885 0-1.595-1.892-1.693-4.281-1.843l-7.262-.496zm14.725-22.69c.895 1.145 1.842 2.737 1.842 5.026 0 5.522-4.329 8.756-10.597 8.756-1.594 0-3.037-.198-3.932-.447l-1.642 2.637 4.875.297c8.608.549 13.682.798 13.682 7.413 0 5.723-5.024 8.955-13.682 8.955-9.006 0-12.438-2.289-12.438-6.218 0-2.24.996-3.431 2.737-5.076-1.643-.694-2.189-1.937-2.189-3.281 0-1.095.547-2.09 1.443-3.036.896-.944 1.891-1.891 3.084-2.985-2.438-1.194-4.278-3.781-4.278-7.464 0-5.721 3.781-9.65 11.393-9.65 2.14 0 3.435.197 4.578.498h9.703v4.228l-4.579.347zm13.332-9.04c-2.837 0-4.479-1.643-4.479-4.48 0-2.833 1.642-4.377 4.479-4.377 2.886 0 4.527 1.543 4.527 4.377.001 2.837-1.641 4.48-4.527 4.48zm-6.42 29.9v-3.929l2.539-.348c.696-.1.795-.249.795-.997V56.785c0-.546-.148-.896-.647-1.044l-2.687-.946.547-4.028h10.301v20.646c0 .798.048.896.796.997l2.538.348v3.929H92.563v-.001zm33.857-1.93c-2.141 1.043-5.274 1.99-8.112 1.99-5.92 0-8.158-2.386-8.158-8.011V55.7c0-.297 0-.497-.399-.497h-3.482v-4.428c4.38-.499 6.12-2.688 6.667-8.111h4.728v7.067c0 .347 0 .498.398.498h7.015v4.975h-7.413v11.89c0 2.935.697 4.079 3.383 4.079 1.395 0 2.836-.347 4.03-.795l1.343 4.378z"
                ></path>
                <path
                  fill="#F34F29"
                  d="M52.7 61.7L29.951 38.952a3.355 3.355 0 00-4.744 0l-4.724 4.724 5.991 5.992a3.983 3.983 0 014.1.956 3.988 3.988 0 01.947 4.125l5.775 5.775a3.988 3.988 0 014.125 6.593 3.992 3.992 0 01-6.516-4.342l-5.386-5.386-.001 14.174a3.992 3.992 0 011.056 6.401 3.993 3.993 0 11-4.339-6.518V57.141a3.99 3.99 0 01-2.167-5.236l-5.906-5.908L2.563 61.595a3.356 3.356 0 000 4.747L25.312 89.09a3.357 3.357 0 004.746 0L52.7 66.446a3.355 3.355 0 000-4.746z"
                ></path>
                <path fill="none" d="M1.58 37.928h124.84v52.143H1.58z"></path>
              </svg>

              <p>Git Source Control</p>
            </div>
          </div>
        </section>
        <section id="portfolio">
          <h2>Portfolio</h2>
          <ul>
            <li className="hover-box">
              <img src="/images/pankaj-patel-1IW4HQuauSU-unsplash.jpg" alt="" />
              <div className="imageText">
                <h3> Berry Enterprise</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt, voluptates hic iure dolorem mollitia quia deleniti
                  neque excepturi perspiciatis, beatae voluptate vel! Ducimus
                  labore a ipsum nobis facere molestiae excepturi.
                </p>
                <button>See more arrow right</button>
              </div>
            </li>
            <li className="hover-box">
              <img src="/images/pankaj-patel-u2Ru4QBXA5Q-unsplash.jpg" alt="" />
              <div className="imageText">
                <h3> Berry Enterprise</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt, voluptates hic iure dolorem mollitia quia deleniti
                  neque excepturi perspiciatis, beatae voluptate vel! Ducimus
                  labore a ipsum nobis facere molestiae excepturi.
                </p>
              </div>
            </li>
            <li className="hover-box">
              <img
                src="/images/trevor-vannoy-ufnhDMFOZ_M-unsplash.jpg"
                alt=""
              />
              <div className="imageText">
                <h3> Berry Enterprise</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt, voluptates hic iure dolorem mollitia quia deleniti
                  neque excepturi perspiciatis, beatae voluptate vel! Ducimus
                  labore a ipsum nobis facere molestiae excepturi.
                </p>
              </div>
            </li>
            <li className="hover-box">
              <img
                src="/images/florian-olivo-4hbJ-eymZ1o-unsplash.jpg"
                alt=""
              />
              <div className="imageText">
                <h3> Berry Enterprise</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt, voluptates hic iure dolorem mollitia quia deleniti
                  neque excepturi perspiciatis, beatae voluptate vel! Ducimus
                  labore a ipsum nobis facere molestiae excepturi.
                </p>
              </div>
            </li>
            <li className="hover-box">
              <img src="/images/chris-ried-ieic5Tq8YMk-unsplash.jpg" alt="" />
              <div className="imageText">
                <h3> Berry Enterprise</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt, voluptates hic iure dolorem mollitia quia deleniti
                  neque excepturi perspiciatis, beatae voluptate vel! Ducimus
                  labore a ipsum nobis facere molestiae excepturi.
                </p>
              </div>
            </li>
            <li className="hover-box">
              <img
                src="/images/markus-spiske-cvBBO4PzWPg-unsplash.jpg"
                alt=""
              />
              <div className="imageText">
                <h3> Berry Enterprise</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt, voluptates hic iure dolorem mollitia quia deleniti
                  neque excepturi perspiciatis, beatae voluptate vel! Ducimus
                  labore a ipsum nobis facere molestiae excepturi.
                </p>
              </div>
            </li>
          </ul>
          <button>View More</button>
        </section>
      </main>
      <footer>
        <section className="info">
          <h3>Contact Us</h3>
          <p>
            Let's make something new, different and more meaningful or make
            things more visual or conceptual.
          </p>
          <div className="svgs">
            <div className="phone">
              <svg
                className="svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <h4>Call me</h4>
                <p>+234 (8136324284)</p>
              </div>
            </div>
            <div className="mail">
              <svg
                className="svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h4>Email</h4>
                <p>sanusiu111@gmail.com</p>
              </div>
            </div>
            <div className="location">
              <svg
                className="svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <h4>Address</h4>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </section>
        <section className="form">
          <h3>Drop a Message</h3>
          <form className="form-control">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="E-mail" />
            <input type="number" placeholder="Phone Number" />
            <input type="text" placeholder="Budget" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Drop a message"
            ></textarea>
          </form>
        </section>
      </footer>
    </div>
  );
}

export default LandingPage;
