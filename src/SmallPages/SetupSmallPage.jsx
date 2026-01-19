import { useRef, useEffect, useState } from "react";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";
import SetupPageImageData from "../data/setupPageImageData";

function SetupSmallPage() {
  const hiddenSectionsRef = useRef([]);
  const [index, setIndex] = useState(0);

  const images = SetupPageImageData.map((item) => item.image);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    hiddenSectionsRef.current.forEach((el) => el && observer.observe(el));

    return () => {
      hiddenSectionsRef.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  // Slideshow auto-advance (SAFE)
  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section
        id="setup"
        className="setupSmallPage w-auto col h-auto"
        ref={(el) => (hiddenSectionsRef.current[2] = el)}
      >
        <div className="setupHeader w-auto col">
          <h1>
            QuickBooks Online Setup <br />
          </h1>
          <h2>Get Your Books Clean & Accurate in Just One Session</h2>
          <h3>
            <a className="simplePricesLink" href="#simplePrices">
              Flat-rate
            </a>
            . No Hidden Costs!
          </h3>
        </div>

        <div className="slideshow-container">
          {SetupPageImageData[index] && (
            <h3 className="text">
              <strong>{SetupPageImageData[index]?.title?.bold}</strong>
              {SetupPageImageData[index]?.title?.normal}
            </h3>
          )}

          <img
            className="setup-image"
            src={images[index]}
            alt="Setup slideshow"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "opacity 0.5s ease-in-out",
            }}
          />

          {/* Controls */}
          <button
            className="arrows prev"
            onClick={() =>
              setIndex((prev) => (prev - 1 + images.length) % images.length)
            }
            aria-label="Previous slide"
          >
            <HiArrowSmLeft />
          </button>

          <button
            className="arrows next"
            onClick={() => setIndex((prev) => (prev + 1) % images.length)}
            aria-label="Next slide"
          >
            <HiArrowSmRight />
          </button>

          {/* Dots */}
          <div className="dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <a
          className="referbtn3 w-auto"
          href="https://calendar.app.google/X13GCtVid1HNvDrY7"
        >
          Schedule
          <br />
          Session
          <div className="underLinkBorder w-auto"></div>
        </a>

        <div className="simplePricing w-auto">
          <h3>
            What You’ll Get <br />
            (Our Standard Setup Package):
          </h3>
          <ul>
            <li>✅ Company setup & configuration</li>
            <li>✅ Customized Chart of Accounts</li>
            <li>✅ Bank & credit card integration (up to 3 accounts)</li>
            <li>✅ Opening balances reconciled</li>
            <li>
              ✅ Core workflow setup (invoicing, expense tracking, A/R & A/P)
            </li>
            <li>✅ Key reports (P&L, Balance Sheet, Cash Flow Overview)</li>
            <li>✅ 60-minute Zoom walkthrough + recorded session</li>
            <li>✅ PDF guide: “How to Use QBO Going Forward.”</li>
          </ul>
        </div>

        <section id="simplePrices" className="h-auto w-auto">
          <div className="simplePricing2 w-auto">
            <h3>Pricing Options:</h3>
            <ul>
              <li>
                <b>Starter:</b> $599 – Basic setup.
              </li>
              <li>
                <b>Standard (Best Seller):</b> $799 – Full setup + reports &
                training.
              </li>
              <li>
                <b>Advanced:</b> $1,199 – Multi-user setup, advanced reports,
                and sales tax setup.
              </li>
              <li>Over 5 years helping businesses organize their books.</li>
              <li>Quick, accurate setup that saves you hours of stress.</li>
              <li>
                Clear, easy-to-follow guidance so you can use QBO confidently.
              </li>
            </ul>
          </div>
        </section>
      </section>
    </>
  );
}

export default SetupSmallPage;
