import Layout, { workTitle } from "../components/layout";
import Head from 'next/head'
import styles from "../components/layout.module.css"
import Image from 'next/image'



export default function Work() {

    

    return (
      <Layout >
      
      <Head>
          <title>{workTitle}</title>
        </Head>
        
        <section className={styles.container}>
          <h1 class="text-4xl leading-relaxed">We build websites and apps that delight both users and client </h1>
        </section>


        <section class="bg-blue-300 p-8">
        <div class=" flex flex-col md:flex-row  ...">

        <Image
              class="rounded-lg w-16 md:w-32 lg:w-48 p-4"
              priority
              src="/images/today.png"
              height={600}
              width={600}
              alt="Todo"
            />

          <div class="heading-relaxed text-left p-10">
            <h1 class="text-5xl">Todo App</h1>
              <p class="text-2xl pt-8">Make todos for any custom catergory you wish.</p> 
              <p class="text-2xl pt-8">Very easy to add and remove todos. To add custom name, simple type any name after ".com/" </p>

              <p class="pt-8">
                  <a class="text-2xl" target="_blank" href="https://tranquil-plains-57467.herokuapp.com/">Click me to try it today.</a>
              </p>
          </div>
        </div>

        </section> 
        

        <section class="bg-red-300 p-8">
        <div class=" flex flex-col md:flex-row  ...">


          <div class="heading-relaxed text-left p-10">
              <h1 class="text-5xl">Secrets App</h1>
                <p class="text-2xl pt-8">Register and Login in with Facebook, Goolge or Email</p> 
                <p class="text-2xl pt-8">Once logged in you can share secrets and view others' secrets in the '/secrets' page.</p> 
                <p class="text-2xl pt-8">This site is not hoseted online yet. Will be live soon.</p>
                <p class="text-2xl pt-8">This site is not hoseted online yet. Will be live soon.</p>
          </div>

          <Image
              class="rounded-lg w-16 md:w-32 lg:w-48 p-4"
              priority
              src="/images/resgister1.png"
              height={600}
              width={600}
              alt="Todo"
            />
          </div>
        </section> 


      

        
        <section class="bg-blue-300 p-8">
        <div class=" flex flex-col md:flex-row  ...">

        <Image
              class="rounded-lg w-16 md:w-32 lg:w-48 p-4"
              priority
              src="/images/newsletter.png"
              height={600}
              width={600}
              alt="Todo"
            />

          <div class="heading-relaxed text-left p-10">
            <h1 class="text-5xl">Newsletter Signup App</h1>
              <p class="text-2xl pt-8">Do you need send newsletter or email campaings to many users? Well look no futher. This web app allows users to subscribe to your newsletter and you can send emails to all your subscribes with ease.</p> 
              <p class="text-2xl pt-8">By signing up, data is posted to Mailchimp's server via their API. You use Mailchimp to send emails to all your subscribers. </p>
              <p class="pt-8">
                  <a class="text-2xl" target="_blank" href="https://intense-tundra-07562.herokuapp.com/">Click me to checkout a sample newsletter app.</a>
              </p>
          </div>
        </div>

        </section> 






        <section class="bg-red-300 p-8">
        <div class=" flex flex-col md:flex-row  ...">


          <div class="heading-relaxed text-left p-10">
              <h1 class="text-5xl">Kipu's Haven</h1>
                <p class="text-2xl pt-8">This a animal shelter site where you can look up pets for adoption.</p> 
                <p class="text-2xl pt-8">In the adoption page, you can click on a profile card which will pop up a window with the pet's detailed information.</p> 
                <p class="text-2xl pt-8">This site is not hoseted online yet. Will be live soon.</p>
                <p class="pt-8">
              
                    <a class="text-2xl" target="_blank" href="https://tranquil-plains-57467.herokuapp.com/">Click me to try it today.</a>
                  
                </p>
          </div>

          <Image
              class="rounded-lg w-16 md:w-32 lg:w-48 p-4"
              priority
              src="/images/dogprofile1.png"
              height={600}
              width={600}
              alt="Todo"
            />
          </div>
        </section> 

        

      
        
      </Layout>
    )
  }


 