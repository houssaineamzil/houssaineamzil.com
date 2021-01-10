import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ title, description, siteUrl, meta, lang }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaTitle = site.siteMetadata.title;
  const metaDescription = site.siteMetadata.description;
  const metaAuthor = site.siteMetadata.author;
  const metasiteUrl = site.siteMetadata.siteUrl;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      meta={[
        {
          name: "title",
          content: metaTitle,
        },
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:url",
          content: metasiteUrl,
        },
        {
          property: "og:title",
          content: metaTitle,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: metaAuthor,
        },
        {
          name: "twitter:url",
          content: metasiteUrl,
        },
        {
          name: "twitter:title",
          content: metaTitle,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

Seo.defaultProps = {
  lang: "en",
  description: "",
  meta: [],
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  lang: PropTypes.string,
};

export default Seo;
