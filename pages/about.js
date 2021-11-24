import Layout, { aboutTitle } from "../components/layout";
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'

export default function About() {
    return (
      <Layout about>
      
      <Head>
          <title>{aboutTitle}</title>
        </Head>
        
        <section className={utilStyles.headingMd}>
          <p>This is about us section. we trying to make it out there.</p>
          <p>
            (Who let the dogs out.{' '}
            )
          </p>
        </section>
        
      </Layout>
    )
  }