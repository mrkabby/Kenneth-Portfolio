import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  education,
  certifications,
  leadership,
  skills,
  skillsCategorized,
  services,
} from "../../content_option";
import {
  FiMonitor,
  FiSmartphone,
  FiCpu,
  FiUsers,
  FiBookOpen,
  FiAward,
} from "react-icons/fi";

const serviceIcons = [FiMonitor, FiCpu, FiSmartphone, FiUsers];

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
              {dataabout.aboutme.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="about_text animate-fadeInUp animate-delay-2 mb-3">
                  {paragraph}
                </p>
              ))}
            </div>
          </Col>
        </Row>

        {/* Work Timeline */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4 animate-fadeInUp">Work Experience</h3>
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
                    {data.summary && (
                      <p className="timeline_summary">{data.summary}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Education */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4 animate-fadeInUp">Education</h3>
          </Col>
          <Col lg="7">
            <div className="edu_list">
              {education.map((item, i) => (
                <div
                  className="edu_card animate-fadeInUp"
                  style={{ animationDelay: `${i * 0.08}s` }}
                  key={i}
                >
                  <div className="edu_icon">
                    <FiBookOpen size={20} />
                  </div>
                  <div className="edu_body">
                    <div className="edu_header">
                      <h5 className="edu_degree">{item.degree}</h5>
                      <span className={`edu_badge ${item.status === "Incoming" ? "incoming" : ""}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="edu_school">{item.school}</p>
                    <span className="edu_date">{item.date}</span>
                    {item.details && (
                      <p className="edu_details">{item.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Certifications */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4 animate-fadeInUp">Certifications</h3>
          </Col>
          <Col lg="7">
            <div className="cert_grid">
              {certifications.map((cert, i) => (
                <div
                  className="cert_card animate-fadeInUp"
                  style={{ animationDelay: `${i * 0.08}s` }}
                  key={i}
                >
                  <div className="cert_card_top">
                    <div className="cert_icon_wrap">
                      <FiAward size={18} />
                    </div>
                    <span className="cert_date">{cert.date}</span>
                  </div>
                  <h5 className="cert_title">{cert.title}</h5>
                  <span className="cert_issuer">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Leadership & Professional Development */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4 animate-fadeInUp">Leadership &amp; Growth</h3>
          </Col>
          <Col lg="7">
            <div className="leadership_list">
              {leadership.map((item, i) => (
                <div
                  className="leadership_card animate-fadeInUp"
                  style={{ animationDelay: `${i * 0.08}s` }}
                  key={i}
                >
                  <div className="leadership_header">
                    <div className="leadership_title_wrap">
                      <h5 className="leadership_title">{item.title}</h5>
                      <span className="leadership_org">{item.organization}</span>
                    </div>
                    <span className="leadership_date">{item.date}</span>
                  </div>
                  <p className="leadership_desc">{item.description}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Technical Skills */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4 animate-fadeInUp">Technical Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => (
              <div key={i} className="animate-fadeInUp" style={{ animationDelay: `${i * 0.06}s` }}>
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

            {/* Categorized Skills Badges */}
            {skillsCategorized && (
              <div className="skill_categories pt-3">
                {skillsCategorized.map((cat, i) => (
                  <div key={i} className="skill_category_group mb-3 animate-fadeInUp" style={{ animationDelay: `${i * 0.08}s` }}>
                    <h6 className="skill_category_title">{cat.category}</h6>
                    <div className="skill_badges">
                      {cat.skills.map((s, idx) => (
                        <span key={idx} className="skill_badge">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
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
                <div className="service_card animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }} key={i}>
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
