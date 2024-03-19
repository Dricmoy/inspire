import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import AboutArea from "../components/AboutArea";
import MixerAreaTwo from "../components/MixerAreaTwo";
import TeamArea from "../components/TeamArea";
import ServiceArea from "../components/ServiceArea";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <Layout pageTitle="Mission">
            <NavOne />
            <PageHeader title="Our Mission" />
            <AboutArea />
            <MixerAreaTwo />
            <ServiceArea />
            <Footer />
        </Layout>
    );
};

export default AboutPage;
