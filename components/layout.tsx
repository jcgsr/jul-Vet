// import Meta from "../components/meta";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Services from "../components/services";

import { motion } from "framer-motion";

export default function Layout({ preview, children }) {
  const variants = {
    hidden: { opacity: 0, x: 0, y: -200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -200 },
  };

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon.ico" />
        <meta name="author" content="MAria Carolina" />
        <meta name="keywords" content="Afetto, Pet, Clínica Veterinária" />
        <link rel="icon" href="/favicon.ico" />
        <title>Afetto</title>
        {/* <meta
          name="google-site-verification"
          content="ymDSNC0hJKNdPP_u-w3Z6rmZywZ6S2XywCDazFCYV_I"
        />*/}
      </Head>
      <Navbar />
      <Hero />
      <Services />
      <div className="min-h-screen">
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear" }} // Set the transition to linear
          className=""
        >
          {children}
        </motion.main>
      </div>
      <Footer />
    </>
  );
}
