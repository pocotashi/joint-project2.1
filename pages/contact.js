import Layout, { contactTitle } from "../components/layout";
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'

export default function Contact(){
    return (
        <Layout contact>
      
      <Head>
          <title>{contactTitle}</title>
        </Head>

        <section className={utilStyles.heading2xl}>
        <div className={styles.container}>
        <form >
        <label >Contact US</label>
        <br/>

        <label>
        <input id="name" name="name" type="text" autoComplete="name" placeholder="name" class="bg-gray-200" required />
        </label>
        <br/>

        <label>
        <input id="name" name="email" type="text" autoComplete="email" placeholder="email" class="bg-gray-200" required />
        </label>

        <br/>
        <br/>
        <textarea id="name" name="message" type="text" autoComplete="email" placeholder="message" class="bg-gray-200" required />
        <br/>
        <button class="bg-purple-500" type="submit">Submit</button>
        </form>
        </div>
        </section>

        



        </Layout>
    )
}

