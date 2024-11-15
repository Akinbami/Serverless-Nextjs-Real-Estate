import Head from 'next/head'
import Link from 'next/link'

import Image from 'next/image'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Layout>
        <Header />

      <div className="landing-jumboton">
        <div className="row">
          <div className="col-md-6">
            <Image src="/img/landing-sidebar.png" height={550} width={700} alt="landing sidebar" />
          </div>
          <div className="col-md-6">
            <div className="landing-jumbotrun-content mx-auto">
              <p className="landing-jumbotron-text-1">The Ultimate Student<br /> Living Experience</p>
              <p className="landing-jumbotron-text-2">2021/2022 bookings now open at PAU!!!</p>
              <div className="landing-jumbotron-buttons">
                <Link href="/register">
                  <a className="btn btn-primary landing-jumbotron-button-1">Book your space</a>
                </Link>
                <Link href="/login">
                  <a className="btn btn-primary landing-jumbotron-button-2">Schedule a visit</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-badge mx-auto">
        <Image src="/img/landing-badge.png" height={"150"} width={"150"} alt="landing sidebar" />
      </div>

      <section className="landing-student-info">
        <div className="row">
          <div className="col-md-6">
            <div className="landing-student-info-card ms-auto">
              <div className="landing-student-info-card-inner mx-auto">
                <p className="info-card-header">Student accomodation reimagined</p>
                <p className="info-card-text">Being young in Africa, no one expects much of you; you’re expected to sit and be quiet while the grown-ups to do the talking; you’re expected to manage until you’ve paid your dues.</p>
                <Link href="/about">
                  <a className="btn btn-primary landing-jumbotron-button-2 ms-0">Learn More</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Image src="/img/accomodation-image.png" height={"454px"} width={"700px"} alt="landing sidebar" />
          </div>
        </div>
      </section>
      <Footer />  
    </Layout>
  )
}
