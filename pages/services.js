import Layout, { serviceTitle } from "../components/layout";
import styles from '../components/layout.module.css'
import Head from 'next/head'
import { CheckCircleIcon } from '@heroicons/react/solid';
import Image from "next/image";

export default function About() {
    return (
      <Layout about>
      
      <Head>
          <title>{serviceTitle}</title>
        </Head>
        
        <section className={styles.containers}>
          <h1 class="text-4xl leading-relaxed">Product services for individuals and small businesses</h1>
        </section>

        <section class="bg-blue-300 p-8">
        <div className={styles.containers}>
          <h1 class="text-4xl leading-relaxed">We understand the journey, and we will help you build solid and scalable digital products.</h1>
          <h2 class="text-3xl leading-relaxed">We listen, design, develop, and help you launch great products.</h2>
        </div>
        </section>

        <section class="bg-white p-8">
          <div className={styles.containers}>
            <h1 class="text-4xl leading-relaxed">Our commitments as product partners:</h1>
            <div class="flex flex-grow pt-10">
            <ul>
              
              <li >
                  <CheckCircleIcon className="h-5 w-5 text-red-800"/>
                 <h1 class="pl-10">Open communication</h1>
              </li>
              

              <li>
                  <CheckCircleIcon className="h-5 w-5 text-red-800"/>
                 <h1 class="pl-10">Transparent execution</h1>
              </li>

              <li>
              <div>
                <CheckCircleIcon className="h-5 w-5 text-red-800"/>
                 <h1 class="pl-10"> On-time delivery</h1>
                 </div>
              </li>

              <li>
                  <CheckCircleIcon className="h-5 w-5 text-red-800"/> 
                 <h1 class="pl-10">Exclusive intellectual property</h1>
              </li>
        
            </ul>

            <div className={styles.container}>
            
            <Image 
            class="pl-10 rounded-lg"
            src="/images/bargraph.jpg"
            height={400}
            width={400}
            alt="services"
            />
            </div>

            </div>

          </div>
        </section>


        <section class="bg-red-300 p-8">
          <div className={styles.containers}>

            <div>
              <h1 class="text-4xl leading-relaxed">Product Concepting</h1>

              <h1 class="text-4xl leading-relaxed">In this step we help plan out the design.</h1>

              <ul>
                <li>Design Session</li>
                <li>Zoom/Google Hangouts consultation - 49.99 ( 1 hour )</li>
                <li>In-person Consultation - 199.99 (3 hours) + travel fees (if applicable)</li>
              </ul>
            </div>

            <div>
              <h1 class="text-4xl leading-relaxed">Product Building</h1>

              <h1 class="text-4xl leading-relaxed">Services we provides:</h1>

              <ul>
                
                <li>Front end development</li>
                <li>Back end development</li>
                <li>iOS app development</li>
              </ul>

              <h1 class="text-4xl leading-relaxed">We also have packages:</h1>
              <ul>
                <li>The Startup Package - iOS + complete website (price varies on needs)</li>
                <li>The Complete Package - iOS + Android + complete website (price varies on needs)</li>
                <li>Back end development</li>
                <li>iOS app development</li>
              </ul>


            </div>

          </div>

        </section>

        
        
      </Layout>
    )
  }