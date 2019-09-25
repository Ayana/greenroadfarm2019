import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
      <div className="container" style={{minHeight: '400px'}}>
        <h1>NOT FOUND</h1>
        <p>お探しのページは見つかりませんでした。</p>
    </div>
  </Layout>
)

export default NotFoundPage
