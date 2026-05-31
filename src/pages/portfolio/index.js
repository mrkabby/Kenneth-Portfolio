import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { FiExternalLink } from "react-icons/fi";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4 animate-fadeInUp">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="portfolio_grid mb-5">
          {dataportfolio.map((data, i) => {
            // Extract a short project name from the description (text before " - " or first 4 words)
            const firstSentence = data.description || "";
            const projectName = firstSentence.includes(" - ")
              ? firstSentence.split(" - ")[0]
              : firstSentence.split(" ").slice(0, 3).join(" ");

            return (
              <div
                key={i}
                className="po_item animate-fadeInUp"
                style={{ animationDelay: `${(i % 6) * 0.07}s` }}
              >
                <img
                  src={data.img}
                  alt={projectName}
                  loading="lazy"
                />
                <div className="po_overlay">
                  <p className="po_desc">{data.description}</p>
                  {data.link && (
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="po_link"
                    >
                      View Project <FiExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
