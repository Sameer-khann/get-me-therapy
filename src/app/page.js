"use client";

import { useEffect, useState, useRef } from "react";
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

      // var cursor = document.querySelector(".cursor");
    
      document.addEventListener("mousemove", function(event) {
        gsap.to(".cursor", {
          x: event.x - 70,
          y: event.y - 40,
          duration: 1, // Slow trailing effect
          ease: "power2.out" // Smooth movement
        });
      });
    
      document.addEventListener("mousemove", function(event) {
        gsap.to(".cursor2", {
          x: event.x - 70,
          y: event.y - 40,
          duration: 1.5, // Slow trailing effect
          ease: "power2.out" // Smooth movement
        });
      });
    
      document.addEventListener("mousemove", function(event) {
        gsap.to(".cursor3", {
          x: event.x - 70,
          y: event.y - 40,
          duration: 2, // Slow trailing effect
          ease: "power2.out" // Smooth movement
        });
      });

    gsap.to(".circle", {
      opacity: 0.5,
      scale: 1.2,
      duration: 2,
      // delay: 1,
    });

    gsap.from(".bottle-cap", {
      y: 150,
      opacity: 1,
      duration: 2,
      // delay: 1,
      ease: "none"
    });

    gsap.from(".bottle", {
      y: -170,
      opacity: 1,
      duration: 2,
      // delay: 1,
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
        // markers: true,
      },
    });

    gsap.to(".bottle", {
      y: 250, // Move bottle down
      duration: 1.5,
      ease: "none",
      scrollTrigger: {
        trigger: ".section2",
        start: "top 80%",
        end: "top 10%",
        scrub: 2,
        // markers: true,
        // pin: true,
      },
    });

    gsap.to(textRef.current, { opacity: 1, scale: 1, duration: 2, delay: 0.5, });

    gsap.from(".heroTextButton", { duration: 2, y: 100, opacity: 0, delay: 0.5 });
    gsap.from(".sideBottle2", { opacity: 0, scale: 0, duration: 2});
    gsap.from(".sideBottle3", { opacity: 0, scale: 0, duration: 2});

  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <nav className="navbar">
          <div className= "cursor"></div>
          <div className= "cursor2"></div>
          <div className= "cursor3"></div>

        <img className="logo" src="/logoBlack.png" alt="Logo" />

        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>☰</button>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          {/* <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button> */}
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

        <img
          ref={capRef}
          src="/cap.png"
          alt="Bottle Cap"
          className="bottle-cap"
        />

        <img
          ref={bottleRef}
          src="/bottle.png" 
          alt="Bottle"
          className="bottle"
        />

         {/* Animated Text  */}
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
        <div className="sec4text1">YOUR TRANSFORMATION ONE STEP AT A TIME</div>
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
