import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
//import SliderOne from "../components/SliderOne";
import EntryArea from "../components/EntryArea";
import HiwArea from "../components/HiwArea";
import ServiceArea from "../components/ServiceArea";
//import MixerArea from "../components/MixerArea";
import HelpingArea from "../components/HelpingArea";

const HomePage = () => {
    return (
        <Layout pageTitle="Inspire - Connecting hearts, building futures">
          <NavOne />
          <EntryArea />
          <HiwArea />
          <ServiceArea />
          <HelpingArea />
          <Footer />
        </Layout>
    );
};

export default HomePage;
