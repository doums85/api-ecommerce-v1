import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({data}) {
  console.log(data);
  return (
    <div className={styles.container}>
     <h1>Landing Page is coming soon ! 😁 </h1>
    </div>
  )
}
export async function getStaticProps(context) {
  const res = await fetch(`https://api-ecommercev1.herokuapp.com/api/products`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}