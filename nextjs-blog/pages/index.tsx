import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'
import Date from '../components/date';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import LoginComponent from '../components/login-btn';


export const getStaticProps:GetStaticProps = async context=>{
  const allPostsData = getSortedPostsData();
  return {
    props:{
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
   <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <LoginComponent></LoginComponent>
    <section className='utilStyles.headingMd'>
    <p>I am jj,i am handsome cute and smart</p>
    <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.)
        </p>
    </section>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/post/${id}`}>{title}</Link><br/>
              <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
            </li>
          ))}
        </ul>
      </section>
   </Layout>
  )
}
