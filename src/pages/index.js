import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="グリーンロードファーム" />
    <p>旬の味と自然を満喫できる信州・松本のフルーツ農園です。</p>
    <p>グリーンロードファームは、信州・松本の里山にあるフルーツ農園です。 フルーツ栽培に最適なこの地で育った旬のフルーツを楽しみ、ときには第二の故郷として収穫体験や豊かな自然をお楽しみください。</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
  </Layout>
)

export default IndexPage
