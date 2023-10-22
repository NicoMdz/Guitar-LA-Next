import Head from "next/head"
import Header from "./header.jsx"
import Footer from "./footer.jsx"

export default function Layout({children, title = "", description = ""}) {
  return (
    <>
        <Head>
            <title>{`GuitarLA - ${title}`}</title>
            <meta name="description" content={description} />
        </Head>
        
        <Header />
        {children}
        <Footer />
    </>
  )
}
