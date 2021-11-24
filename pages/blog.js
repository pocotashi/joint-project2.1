import Layout, { blogTitle } from "../components/layout";
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import styles from "../components/layout.module.css"

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({allPostsData}) {
    return (
      <Layout blog>
      
      <Head>
          <title>{blogTitle}</title>
        </Head>
        <div className={styles.container}>
        <section className={utilStyles.headingMd}>
        <h2 class="text-5xl py-4">Blog</h2>
          <p>These blogs are mostly on my journey in learning full-stack web development.</p> 
        </section>
        
        <div class="py-4 ">
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
  

              <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div class="md:flex">
                  <div class="md:flex-shrink-0">
                    <img class="h-48 w-full object-cover md:h-full md:w-48" src="/images/bargraph.jpg" alt="Man looking at item at a store"/>
                  </div>
                  <div class="p-8">
                  <Link class="heading-relaxed text-left p-10" href={`/posts/${id}`}>
                    <a class="text-2xl">{title}</a>
                  </Link>
                  </div>
                </div>
              </div>
                <br />
  
            </li>
              ))}
        </ul>
        </section>
        </div>
        </div>
        
      </Layout>
    )
  }