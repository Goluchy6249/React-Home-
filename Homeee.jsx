
import React, { useRef } from "react";
import "./Web.css";
import { Link } from "react-router-dom";

function Homeee() {
  const cardContainer = useRef(null);

  const scrollLeft = () => {
    cardContainer.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    cardContainer.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="home-header">
        <div className="pages1">
          <h1>
            Welcome to SampurnaKart: Your Trusted Electronic Repair Partner
          </h1>
          <h4>
            Revive, Restore, Reimagine – Expert Gadget Repairs at SampurnaKart
          </h4>
          <p>From Mobiles to Laptops, Smartwatches to Speakers – We Fix It All!</p>
          <button className="btn">See Products</button>
        </div>
        <div className="pages1">
          <img
            src="https://ideogram.ai/assets/image/lossless/response/2bIoPEV1QDKxztFhzkzVig"
            alt="SampurnaKart"
            width="500"
            height="280"
          />
        </div>
      </div>

      <h1>Our Comprehensive Repair Services</h1>
      <div className="service">
        {[
          {
            title: "Mobile Phone Repair",
            description:
              "We understand how essential your mobile phone is to your daily life. Our mobile phone repair services include:",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTszJsyDxi5n3K3hoGCHOo3Fe3a6ZGC30uJEQ&s",
          },
          {
            title: "Laptop Repair",
            description:
              "Keep your work and entertainment uninterrupted with our reliable laptop repair services:",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL9doPbG2Y1-fYimDg7x5sxAACD3bKpWTM6Q&s",
          },
          {
            title: "Earbuds Repair",
            description:
              "Enjoy your music without interruptions. Our earbuds repair services include:",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRXhsrY40iDBN4X6Pj_N-G4LeFkYh2mcYeQ&s",
          },
          {
            title: "Smartwatch Repair",
            description:
              "Your smartwatch deserves the best care. Our smartwatch repair services cover:",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8j6go91SJf9H00j3JAGnih6baDnHd8gMeug&s",
          },
        ].map((service, index) => (
          <div className="service-cont" key={index}>
            <img src={service.img} alt={service.title} width="250" height="130" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <h1>Reviews & Testimonials</h1>
      <div className="reviews">
        {["iPhone Repairing", "Macbook Repairing", "Tablet Repairing"].map(
          (review, index) => (
            <div key={index}>
              <video src=" " controls></video>
              <h4>{review}</h4>
            </div>
          )
        )}
      </div>


      <h1> Blogs Posts </h1>
      <div className=" Section1"> 
      <div className=" Blog-mains "> 
      <h2> Content Articles </h2>
      <div className="Blog-main ">

          <div className="Blog-cont ">
            <img
              src=" https://i.pinimg.com/736x/0e/b2/82/0eb282cc1609b62cfc5611824dd6ead6.jpg"
              alt=" img"
              width=" 300px"
              height="180px"
            />
            <h4> Mobile Phone Repair </h4>
            <p>
              {" "}
              We understand how essential your mobile phone is to your daily
              life. Our mobile phone repair services include: • Screen
              Replacement: Fixing cracked or broken screens with high-quality
              replacements. • Battery Replacement: Resolving issues like rapid
              battery drain or failure to charge. • Charging Port Repair:
              Ensuring smooth and reliable charging for your device. • Software
              Troubleshooting: Fixing operating system errors, app crashes, and
              other software issues. • Water Damage Repair: Restoring
              functionality to water-damaged phones.
            </p>
          </div>

          <div className="Blog-cont ">
            <img
              src=" https://i.pinimg.com/736x/a3/61/19/a3611996ac898b211abb0378de92b86d.jpg"
              alt=" img"
              width="300px"
              height="180px"
            />
            <h4>Laptops Repair </h4>
            <p>
              {" "}
              SampurnaKart offers: ✅ Expert Repairs ✅ Genuine Parts ✅
              Affordable Rates ✅ Doorstep Service Don’t let issues slow you
              down. Book your repair now and enjoy hassle-free service trusted
              by thousands! 🚀{" "}
            </p>
          </div>

          <div className="Blog-cont ">
            <img
              src="  https://64.media.tumblr.com/c6020bdb555c81cdd831e6e2539d22a9/5bf5b648e4f68f3d-47/s540x810/03ed68a743dabd16c6521447d55348d1b3d79883.pnj"
              alt="img"
              width="300px"
              height="180px"
            />
            <h4> Tablets Repair </h4>
            <p>
              {" "}
              Is your iPad Air screen cracked? Battery draining too fast? Don’t
              worry! SampurnaKart is here to bring your device back to life. ✔️
              Screen & Battery Replacement ✔️ Software Fixes ✔️ Genuine Parts ✔️
              Quick & Affordable Repairs 📍 Visit us or book a repair online!
              Your iPad Air deserves expert care. 📞 Contact us today and
              experience hassle-free service! #SampurnaKart #iPadAirRepair
              #TechCare #AppleRepair
            </p>
          </div>

          <div className="Blog-cont ">
            <img
              src=" https://64.media.tumblr.com/147d532e48a12c825878bba68ffbc0a4/5a0cccf4f55c6dd4-7c/s540x810/30475582053dbea33f1b951e44378d5b095962c1.pnj"
              alt="img "
              width=" 300px"
              height=" 180px"
            />
            <h4> Smartwatch Repair </h4>
            <p>
              {" "}
              Quick, Affordable, and Reliable! Your smartwatch isn’t just a
              gadget; it’s your lifeline! At SampurnaKart, we’ll get it back in
              top shape—fast, reliable, and affordable. From cracked screens to
              battery issues, we’ve got you covered. Contact us today for expert
              repair services that keep you connected! #SmartwatchRepair
              #SampurnaKart #GadgetCare{" "}
            </p>
          </div>

          <div className="Blog-cont ">
            <img
              src=" https://64.media.tumblr.com/6a0f9f944f6100d57d5eadb62beaa886/75635afa1eac0481-cc/s540x810/2e224b1a8953cd14afc49fda80234c88678f55aa.pnj"
              alt="img"
              width="300px"
              height="180px"
            />
            <h4> Earbuds Repairs </h4>
            <p>
              From charging issues to audio glitches, SampurnaKart is your go-to
              destination for professional Apple AirPods repairs. ✅ Expert
              Technicians ✅ Affordable Prices ✅ Fast Service Don’t let broken
              AirPods ruin your vibe. Trust SampurnaKart to bring them back to
              life! 🚀 📲 DM us or call now!
            </p>
          </div>

          <div className="Blog-cont ">
            <img
              src=" https://64.media.tumblr.com/60991fe3e98b5bc5c361ba5a0813290d/eeb700396d520eca-2e/s540x810/05a53e81ac3c6d11327e3286e6f6c246b55e7f05.pnj"
              alt="img"
              width="300px"
              height="180px"
            />
            <h4>Speakers Repair </h4>
            <p>
              Facing issues with your JBL speakers? Don’t worry, we’ve got you
              covered! At SampurnaKart, we provide professional and reliable JBL
              speaker repair services to bring your sound system back to life.
              ✅ Expert Technicians ✅ Genuine Parts ✅ Quick Turnaround ✅
              Affordable Prices From minor fixes to complex repairs, we ensure
              your JBL speakers deliver the top-notch sound quality they’re
              known for. Experience music the way it’s meant to be! 🎶 📞
              Contact us today and let the experts at SampurnaKart take care of
              your sound system. #JBLRepair #SampurnaKart #SpeakerService
              #QualitySound{" "}
            </p>
          </div>
        </div>

        </div>
        </div>
       
      </div>

  
  );
}

export default Homeee;
