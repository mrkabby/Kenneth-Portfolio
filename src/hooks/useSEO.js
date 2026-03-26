import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

/**
 * Custom hook for managing page-level SEO meta tags
 * @param {Object} config - SEO configuration object
 * @param {string} config.title - Page title
 * @param {string} config.description - Meta description
 * @param {string} config.keywords - Meta keywords (comma-separated)
 * @param {string} config.canonical - Canonical URL
 * @param {string} config.ogTitle - OpenGraph title
 * @param {string} config.ogDescription - OpenGraph description
 * @param {string} config.ogImage - OpenGraph image URL
 * @param {string} config.ogType - OpenGraph type (default: "website")
 */
export const useSEO = (config = {}) => {
  const {
    title = "Kenneth Boateng Antwi - Full Stack Developer",
    description = "Expert full stack developer specializing in MERN stack and mobile applications.",
    keywords = "full stack developer, MERN, React, Node.js, web development",
    canonical = "https://kenneth-portfolio.com",
    ogTitle = title,
    ogDescription = description,
    ogImage = "https://kenneth-portfolio.com/kenphoto.jpg",
    ogType = "website",
  } = config;

  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update canonical tag
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    // Update or create meta tags
    const updateMetaTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(name.includes("og:") ? "property" : "name", name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("og:title", ogTitle);
    updateMetaTag("og:description", ogDescription);
    updateMetaTag("og:image", ogImage);
    updateMetaTag("og:type", ogType);
    updateMetaTag("twitter:title", ogTitle);
    updateMetaTag("twitter:description", ogDescription);
    updateMetaTag("twitter:image", ogImage);
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogType]);
};

/**
 * SEO Component for use with react-helmet
 */
export const SEOHelmet = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  children,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
      
      {children}
    </Helmet>
  );
};

export default useSEO;
