import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
import {
  FiMonitor,
  FiSmartphone,
  FiCpu,
} from "react-icons/fi";

const serviceIcons = [FiCpu, FiSmartphone, FiMonitor];

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Page heading */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4 animate-fadeInUp">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* About me */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4 animate-fadeInUp">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p className="about_text animate-fadeInUp animate-delay-2">{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>

        {/* Work Timeline — Visual */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4 animate-fadeInUp">Work Timeline</h3>
          </Col>
          <Col lg="7">
            <div className="timeline">
              {worktimeline.map((data, i) => (
                <div className="timeline_item animate-fadeInUp" style={{ animationDelay: `${i * 0.08}s` }} key={i}>
                  <div className="timeline_dot"></div>
                  <div className="timeline_content">
                    <h5 className="timeline_title">{data.jobtitle}</h5>
                    <span className="timeline_where">{data.where}</span>
                    <span className="timeline_date">{data.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Skills */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4 animate-fadeInUp">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => (
              <div key={i} className="animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="skill_header">
                  <span className="progress-title">{data.name}</span>
                  <span className="skill_pct">{data.value}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${data.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </Col>
        </Row>

        {/* Services */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4 animate-fadeInUp">Services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              const Icon = serviceIcons[i] || FiMonitor;
              return (
                <div className="service_card animate-fadeInUp" style={{ animationDelay: `${i * 0.12}s` }} key={i}>
                  <div className="service_icon">
                    <Icon size={22} />
                  </div>
                  <div className="service_body">
                    <h5 className="service__title">{data.title}</h5>
                    <p className="service_desc">{data.description}</p>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
