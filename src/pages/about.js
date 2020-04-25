import React from 'react';
import { graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import { rhythm } from "../utils/typography";

export default ({ data }) => (
  <Layout title={data.site.siteMetadata.title}>
    <article>
      <h1
        style={{
          marginTop: rhythm(1),
          marginBottom: 0,
        }}
      >About Me
      </h1>
    <hr style={{marginBottom: rhythm(1),}}/>
    <section>
      I am Nishith Kumar M Shah, a software and data engineer, currently
      working at <a href="https://jerry.ai/">Jerry.ai</a>. I graduated with an
      Integrated M.Sc in Mathematics and Computing from Indian Institute of
      Technology, Kharagpur. I am a linux enthusiast, a ViM person and enjoy C
      and Python mostly. These days however, I am writing a lot of SQL and
      JS(and so, using VSCode a lot). I enjoy running, playing and watching
      basketball, reading about and listening to economics(Econtalk FTW!),
      following up on politics etc. You can contact me via <a href="mailto:nishithshah.2211@gmail.com">e-mail</a>.
    </section>
    <hr style={{marginBottom: rhythm(1),}}/>
    <Bio />
    </article>
  </Layout>
);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
