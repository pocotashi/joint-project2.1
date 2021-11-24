import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'
import Image from 'next/image'
import styles from "../components/layout.module.css"

const name = 'Mugiwara & Company'



export default function Home() {
  return (


    <Layout home>
    <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.container}>
          <div className={styles.header}>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </div>
      <section className={utilStyles.headingMd}>
      <h6>Welcome to my homepage!</h6>
      <br/>
        <p>I am working on becoming a full-stack web developer and currently I am learning next js.</p>
        <br/>
        <p>
          This is a mock site for a company that provides software development services. The work section consists of my projects. The projects will be updated whenever new projects are completed.
        </p>
      </section>
      </div>
    </Layout>
  )
}

