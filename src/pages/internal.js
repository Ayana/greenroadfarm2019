import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Internal = props => {
    return (
      <Layout location={props.location}>
        <SEO title="Internal View" />
        <div className="container" style={{minHeight: '400px'}}>
          <h1>Internal View</h1>
        </div>
      </Layout>
    )

}

export default Internal

