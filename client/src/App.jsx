import { useState } from "react";
import "./App.css";

import heroCake from "./assets/hero-cake.jpg";
import chocolateCake from "./assets/chocolate.jpg";
import redVelvet from "./assets/red-velvet.jpg";
import chocolateTruffle from "./assets/chocolate-truffle.jpg";
import chocoChipCake from "./assets/cake.jpg";

import CakeCard from "./components/CakeCard";

/* ================= CAKE DATA ================= */

const cakes = [
  {
    id: 1,
    name: "Chocolate Truffle",
    image: chocolateTruffle,
    rating: 4.9,
    description: "Rich chocolate layers with silky chocolate ganache.",
    price: 699,
  },
  {
    id: 2,
    name: "Red Velvet",
    image: redVelvet,
    rating: 4.8,
    description: "Classic red velvet with smooth cream cheese frosting.",
    price: 749,
  },
  {
    id: 3,
    name: "Classic Chocolate",
    image: chocolateCake,
    rating: 4.9,
    description: "Moist chocolate sponge with rich chocolate frosting.",
    price: 649,
  },
  {
    id: 4,
    name: "Choco Chip Delight",
    image: chocoChipCake,
    rating: 4.8,
    description:
      "Creamy chocolate cake covered with crunchy chocolate chips.",
    price: 799,
  },
];

function App() {
  /* ================= STATE ================= */

  const [flavour, setFlavour] = useState("Chocolate Truffle");
  const [size, setSize] = useState("0.5");
  const [occasion, setOccasion] = useState("Birthday");
  const [message, setMessage] = useState("");

  /* ================= PRICE DATA ================= */

  const flavourPrices = {
    "Chocolate Truffle": 699,
    "Red Velvet": 749,
    "Classic Chocolate": 649,
    "Choco Chip Delight": 799,
  };

  const sizeMultiplier = {
    "0.5": 1,
    "1": 1.7,
    "1.5": 2.3,
    "2": 2.9,
  };

  /* ================= PRICE CALCULATION ================= */

  const estimatedPrice = Math.round(
    flavourPrices[flavour] * sizeMultiplier[size]
  );

  /* ================= SCROLL FUNCTIONS ================= */

  const scrollToCakes = () => {
    document
      .getElementById("cakes")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCustom = () => {
    document
      .getElementById("custom")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  /* ================= SELECT CAKE ================= */

  const selectCake = (cakeName) => {
    setFlavour(cakeName);

    document
      .getElementById("custom")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  /* ================= WHATSAPP ORDER ================= */

  const handleCustomOrder = () => {
    const phoneNumber = "916306482282";

    const orderMessage = `Hi Mom's Magic! 🎂

I would like to order a custom cake.

Flavour: ${flavour}
Size: ${size} kg
Occasion: ${occasion}
Cake Message: ${message || "No message"}
Estimated Price: ₹${estimatedPrice}

Please let me know about availability.`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      orderMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="website">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          Mom's <span>Magic</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#cakes">Our Cakes</a>
          <a href="#custom">Custom Cakes</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="order-btn"
          onClick={scrollToCustom}
        >
          Order Now
        </button>

      </nav>

      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-content">

          <p className="small-heading">
            FRESHLY BAKED WITH LOVE ♡
          </p>

          <h1>
            Making Life
            <span>A Little Sweeter.</span>
          </h1>

          <p className="hero-description">
            Beautifully handcrafted cakes made fresh for birthdays,
            anniversaries and every moment worth celebrating.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={scrollToCakes}
            >
              Explore Cakes
            </button>

            <button
              className="secondary-btn"
              onClick={scrollToCustom}
            >
              Customize Your Cake
            </button>

          </div>

          <div className="features">
            <span>♡ 100% Homemade</span>
            <span>✦ Fresh Ingredients</span>
            <span>♧ Made to Order</span>
          </div>

        </div>

        <div className="hero-image">

          <div className="cake-image-wrapper">

            <img
              src={heroCake}
              alt="Handcrafted cake by Mom's Magic"
              className="cake-image"
            />

            <div className="image-badge">

              <span>♡</span>

              <div>
                <strong>Made with Love</strong>
                <p>Freshly baked for you</p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= BESTSELLERS ================= */}

      <section className="bestsellers" id="cakes">

        <div className="section-heading">

          <p className="section-tag">
            OUR SWEET FAVOURITES
          </p>

          <h2>Our Bestsellers</h2>

          <p>
            Customer favourites, handcrafted fresh with love
            for every celebration.
          </p>

        </div>

        <div className="cake-grid">

          {cakes.map((cake) => (
            <CakeCard
              key={cake.id}
              cake={cake}
              onViewCake={() => selectCake(cake.name)}
            />
          ))}

        </div>

        <button
          className="view-all-btn"
          onClick={scrollToCustom}
        >
          View All Cakes →
        </button>

      </section>

      {/* ================= CUSTOM CAKE ================= */}

      <section className="custom-cake" id="custom">

        <div className="custom-left">

          <p className="section-tag">
            MADE JUST FOR YOU
          </p>

          <h2>
            Create Your <span>Dream Cake.</span>
          </h2>

          <p className="custom-description">
            Every celebration is unique. Tell us what you have
            in mind and we'll bake something special just for you.
          </p>

          <div className="custom-features">

            <div>
              <span>01</span>
              <p>Choose your favourite flavour</p>
            </div>

            <div>
              <span>02</span>
              <p>Select the perfect size</p>
            </div>

            <div>
              <span>03</span>
              <p>Tell us about your celebration</p>
            </div>

          </div>

        </div>

        {/* ================= CUSTOM FORM ================= */}

        <div className="custom-form">

          <h3>Customize Your Cake 🎂</h3>

          <label htmlFor="flavour">
            Choose Flavour
          </label>

          <select
            id="flavour"
            value={flavour}
            onChange={(e) => setFlavour(e.target.value)}
          >

            <option value="Chocolate Truffle">
              Chocolate Truffle
            </option>

            <option value="Red Velvet">
              Red Velvet
            </option>

            <option value="Classic Chocolate">
              Classic Chocolate
            </option>

            <option value="Choco Chip Delight">
              Choco Chip Delight
            </option>

          </select>

          <label htmlFor="size">
            Cake Size
          </label>

          <select
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >

            <option value="0.5">0.5 kg</option>
            <option value="1">1 kg</option>
            <option value="1.5">1.5 kg</option>
            <option value="2">2 kg</option>

          </select>

          <label htmlFor="occasion">
            Occasion
          </label>

          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >

            <option value="Birthday">
              Birthday
            </option>

            <option value="Anniversary">
              Anniversary
            </option>

            <option value="Wedding">
              Wedding
            </option>

            <option value="Other Celebration">
              Other Celebration
            </option>

          </select>

          <label htmlFor="cake-message">
            Message on Cake
          </label>

          <input
            id="cake-message"
            type="text"
            value={message}
            maxLength={40}
            placeholder="e.g. Happy Birthday Mom!"
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* ================= ESTIMATED PRICE ================= */}

          <div className="estimated-price">

            <span>Estimated Price</span>

            <strong>
              ₹{estimatedPrice}
            </strong>

          </div>

          <button
            className="custom-order-btn"
            onClick={handleCustomOrder}
          >
            Request Custom Cake →
          </button>

        </div>

      </section>

      {/* ================= ABOUT US ================= */}

      <section className="about-section" id="about">

        <div className="about-content">

          <p className="section-tag">
            OUR STORY
          </p>

          <h2>
            Baked with <span>Love,</span>
            <br />
            Just Like Mom Does.
          </h2>

          <p className="about-description">
            Mom's Magic started with a simple idea — to make every
            celebration sweeter with homemade cakes baked with care,
            fresh ingredients and lots of love.
          </p>

          <p className="about-description">
            Every cake is freshly prepared to order, giving you the
            warmth and taste of a truly homemade dessert.
          </p>

          <div className="about-stats">

            <div>
              <h3>100%</h3>
              <p>Homemade</p>
            </div>

            <div>
              <h3>Fresh</h3>
              <p>Ingredients</p>
            </div>

            <div>
              <h3>♡</h3>
              <p>Made with Love</p>
            </div>

          </div>

        </div>

        <div className="about-card">

          <div className="about-icon">
            🎂
          </div>

          <h3>
            A Little Magic
            <br />
            in Every Bite
          </h3>

          <p>
            From birthdays to anniversaries and everything in between,
            we create cakes that make your special moments unforgettable.
          </p>

          <div className="about-signature">
            Mom's Magic ♡
          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section className="contact-section" id="contact">

        <div className="contact-heading">

          <p className="section-tag">
            GET IN TOUCH
          </p>

          <h2>
            Let's Make Your Celebration
            <span> Sweeter.</span>
          </h2>

          <p>
            Have a cake in mind? Send us your requirements and
            we'll help make your celebration extra special.
          </p>

        </div>

        <div className="contact-grid">

          <div className="contact-card">

            <div className="contact-icon">
              💬
            </div>

            <h3>WhatsApp Us</h3>

            <p>
              The quickest way to discuss your cake,
              customisation and availability.
            </p>

            <button
              className="contact-link"
              onClick={scrollToCustom}
            >
              Start Your Order →
            </button>

          </div>

          <div className="contact-card">

            <div className="contact-icon">
              🎂
            </div>

            <h3>Custom Orders</h3>

            <p>
              Birthdays, anniversaries or something completely
              unique — tell us what you're imagining.
            </p>

            <button
              className="contact-link"
              onClick={scrollToCustom}
            >
              Customize Cake →
            </button>

          </div>

          <div className="contact-card">

            <div className="contact-icon">
              ♡
            </div>

            <h3>Made Fresh</h3>

            <p>
              Every cake is prepared fresh to order,
              so advance ordering is recommended.
            </p>

            <span className="contact-note">
              Pre-orders recommended
            </span>

          </div>

        </div>

        {/* ================= CONTACT CTA ================= */}

        <div className="contact-cta">

          <div>

            <p>
              READY TO ORDER?
            </p>

            <h3>
              Your dream cake is just a message away.
            </h3>

          </div>

          <button onClick={scrollToCustom}>
            Order Your Cake →
          </button>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-brand">

          <div className="logo">
            Mom's <span>Magic</span>
          </div>

          <p>
            Homemade cakes crafted with love for
            life's sweetest moments.
          </p>

        </div>

        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#cakes">Our Cakes</a>
          <a href="#custom">Custom Cakes</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Mom's Magic. Made with ♡
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;