"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../styles/globals.css"; // Import custom CSS
import "./globals.css"; // Import custom CSS

// import cap from ".../img/cap.png";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const bottleRef = useRef(null);
  const capRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // const tl = gsap.timeline({ delay: 1 });

    // ✅ Circle Animation
    gsap.to(".circle", {
      opacity: 0.5,
      scale: 1.2,
      duration: 2,
      delay: 3,
    });

    // ✅ Cap and Bottle Movement
    gsap.from(".bottle-cap", {
      y: 150,
      opacity: 1,
      duration: 2,
      delay: 3,
      ease: "none"
    });

    gsap.from(".bottle", {
      y: -170,
      opacity: 1,
      duration: 2,
      delay: 3,
    });

    gsap.to(".bottle-cap", {
      y: 567, // Move cap down
      duration: 1.5,
      ease: "none",
      scrollTrigger: {
        trigger: ".section2",
        start: "top 80%",
        end: "top 10%",
        scrub: 2,
        markers: true,
      },
    });

    gsap.to(".bottle", {
      y: 250, // Move bottle down
      duration: 1.5,
      ease: "none",
      scrollTrigger: {
        trigger:".section2",
        start: "top 80%",
        end: "top 10%",
        scrub: 2,
        markers: true,
      },
    });

    // ✅ Text Animations
    gsap.to(textRef.current, { opacity: 1, scale: 1, duration: 2 , delay: 3.5,});

    // ✅ Button and Side Bottles Animation (No Delay Conflicts)
    gsap.from(".heroTextButton", { duration: 2, y: 100, opacity: 0, delay: 3.5 });
    gsap.from(".sideBottle2", { opacity: 0, scale: 0, duration: 2, delay: 3 });
    gsap.from(".sideBottle3", { opacity: 0, scale: 0, duration: 2, delay: 3 });

  }, []);

  return (
    <div className="container">

      <nav className="navbar">
        <h1 className="logo">BOTOL</h1>
        <div className="nav-links">
          <a href="#">Shop</a>
          <a href="#">Contact us</a>
          <a href="#">About</a>
          <a href="#">Journal</a>
          <a href="#">Custom</a>
          <button className="inquiry-btn">Inquiry Now</button>
        </div>
      </nav>


      <div className="hero">
        <div className="circle">
          <div className="innerCircle"></div>
        </div>

        {/* Bottle Cap */}
        <img
          ref={capRef}
          src="/cap.png" // Replace with actual cap image
          alt="Bottle Cap"
          className="bottle-cap"
        />

        {/* Bottle */}
        <img
          ref={bottleRef}
          src="/bottle.png" // Replace with actual bottle image
          alt="Bottle"
          className="bottle"
        />

        {/* Animated Text */}
        <div className="heroText">
          <div className="heroHeading" ref={textRef}>
            <h1 className="animated-text">The Ultmate Companion for Hydration</h1>
            <div className="heroSmallText">
              <h6>We believe in the power of hydration.</h6>
              <h6>Our mission is simple yet vital.</h6>
            </div>
          </div>
          <div className="heroTextButton">Inquiry Now</div>
        </div>
        <div className="sideBottle2">
          <img className="sideBottle2cap" src="/cap2.png" alt="" />
          <img className="sideBottle2Bottle" src="/bottle2.png" alt="" />
        </div>
        <div className="sideBottle3">
          <img className="sideBottle3cap" src="/cap3.png" alt="" />
          <img className="sideBottle3Bottle" src="/bottle3.png" alt="" />
        </div>
      </div>

      <section className="section2">
        {/* <img className="" src="" alt="" /> */}
        <div className="sec2left">
          {/* <img className="" src="" alt=""/> */}
        </div>
        <div className="sec2right">

          <div className="sec2rightin">
            <div className="colContainer">
              <img className="colImage" src="/col1.png" alt="" />
            </div>
            <div className="sec2text">Vacuum Bottles</div>
          </div>

          <div className="sec2rightin">
            <div className="colContainer">
              <img className="colImage" src="/col2.png" alt="" />
            </div>
            <div className="sec2text">Fridge Bottles & Jugs</div>
          </div>

          <div className="sec2rightin">
            <div className="colContainer">
              <img className="colImage" src="/col3.png" alt="" />
            </div>
            <div className="sec2text">Borosilicate Bottles</div>
          </div>

          <div className="sec2rightin">
            <div className="colContainer">
              <img className="colImage" src="/col4.png" alt="" />
            </div>
            <div className="sec2text">Kettles</div>
          </div>
          {/* <div>
            <img />
            <div>Vacuum Bottles</div>
          </div>
          <div>
            <img />
            <div>Vacuum Bottles</div>
          </div>
          <div>
            <img />
            <div>Vacuum Bottles</div>
          </div> */}
        </div>
      </section>

      <section className="section3">
        <div className="sec3Nav">
          <div>
            <div className="sec3boldtext">Hydration Essentials</div>
            <div className="sec3text">DIscover Our Range of Premium Water Bottles</div>
          </div>
          <div className="sec3NavButton">VIEW MORE</div>
        </div>

        <div className="bottleList">

          <div className="bottleCard">
            <div className="sec3img1">
              {/* <img src="/1.png" alt="Loading Bottle Image"/> */}
            </div>
            <div className="imgCardText">RAINBOW 600</div>
            <div className="imgCardBut">LEARN MORE</div>
          </div>
          <div className="bottleCard">
            <div className="sec3img2">
              {/* <img src="/1.png" alt="Loading Bottle Image"/> */}
            </div>
            <div className="imgCardText">Rio 650</div>
            <div className="imgCardBut">LEARN MORE</div>
          </div>
          <div className="bottleCard">
            <div className="sec3img3">
              {/* <img src="/1.png" alt="Loading Bottle Image"/> */}
            </div>
            <div className="imgCardText">Big Bull 300</div>
            <div className="imgCardBut">LEARN MORE</div>
          </div>
          <div className="bottleCard">
            <div className="sec3img4">
              {/* <img src="/1.png" alt="Loading Bottle Image"/> */}
            </div>
            <div className="imgCardText">Rome 600</div>
            <div className="imgCardBut">LEARN MORE</div>
          </div>
          <div className="bottleCard">
            <div className="sec3img5">
              {/* <img src="/1.png" alt="Loading Bottle Image"/> */}
            </div>
            <div className="imgCardText">RAINBOW 600</div>
            <div className="imgCardBut">LEARN MORE</div>
          </div>
          <div className="bottleCard">
            <div className="sec3img6">
              {/* <img src="/1.png" alt="Loading Bottle Image"/> */}
            </div>
            <div className="imgCardText">Rio 650</div>
            <div className="imgCardBut">LEARN MORE</div>
          </div>
        </div>
      </section>

      <section className="section4">
        <div className="sec4text1">Your Transformation, One Step at a Time</div>
        <div className="sec4text2">Fitness is a journey—every day brings you closer to the life you want</div>
      </section>

      <footer className="footer">
        <section className="foot">
          <div className="footerIcon">

            <div className="footerLogo">
              {/* <img /> */}
            </div>

            <div className="socialMedia">
              <div className="socialMedia2">
                <img className="socialMediaLogo" src="/facebook.png" alt="Facebook" />
              </div>
              <div className="socialMedia2">
                <img className="socialMediaLogo" src="/instagram.png" alt="Facebook" />
              </div>
              <div className="socialMedia2">
                <img className="socialMediaLogo" src="/twitter.png" alt="Facebook" />
              </div>
            </div>

          </div>
          <div className="footerNavLinks">
            <nav className="linksfooter">
              <li>Shop</li>
              <li>Contact us</li>
              <li>About</li>
              <li>Journal</li>
              <li>Custom</li>
            </nav>
            <nav className="linksfooter">
              <li>FAQ's</li>
              <li>Return</li>
              <li>Ordering</li>
              <li>Shipping</li>
              <li>Personalization Policies</li>
            </nav>
          </div>
        </section>
        <section className="copyright">Copyright &copy; 2025 BOTOL. All Rights Reserved.</section>
      </footer>
    </div>
  );
}
