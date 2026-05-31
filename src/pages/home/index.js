import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta, socialprofils } from "../../content_option";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";

const stats = [
  { number: 19, suffix: "+", label: "Projects Built" },
  { number: 7, suffix: "+", label: "Years Experience" },
  { number: 3, suffix: "", label: "Degrees Earned" },
  { number: 10, suffix: "+", label: "Happy Clients" },
];

function useCountUp(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ number, suffix, label, start }) {
  const count = useCountUp(number, 1400, start);
  return (
    <div className="stat_item animate-fadeInUp">
      <span className="stat_number">{count}{suffix}</span>
      <span className="stat_label">{label}</span>
    </div>
  );
}

export const Home = () => {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center">
          <div
            className="h_bg-image order-1 order-lg-2 h-100"
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center">
              <div className="intro mx-auto">
                <p className="hero_eyebrow animate-fadeInUp animate-delay-1">
                  Full-Stack Developer &amp; Digital Entrepreneur
                </p>
                <h2 className="mb-1x animate-fadeInUp animate-delay-2">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x animate-fadeInUp animate-delay-3">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="hero_desc mb-1x animate-fadeInUp animate-delay-4">
                  {introdata.description}
                </p>
                <div className="intro_btn-action pb-3 animate-fadeInUp animate-delay-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
                <div className="hero_socials animate-fadeInUp animate-delay-5">
                  <a href={socialprofils.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FiGithub />
                  </a>
                  <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FiLinkedin />
                  </a>
                  <a href={socialprofils.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FiTwitter />
                  </a>
                  <a href={socialprofils.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FiFacebook />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="stats_bar" ref={statsRef}>
          {stats.map((s, i) => (
            <StatItem key={i} {...s} start={statsVisible} />
          ))}
        </div>
      </section>
    </HelmetProvider>
  );
};
