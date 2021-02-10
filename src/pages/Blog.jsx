import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Helmet} from "react-helmet";

import '../css/style.css'
import '../css/menu.css'
import '../css/blog.css'
import '../css/footer.css'

import Header from '../components/Header'
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';
import BlogSection from '../components/BlogSection';
import seoBlog from "../../src/json/Blogseo.json";
import BusinessQuote from '../components/BusinessQuote';
import Promise from '../components/Promise';

function Blog() {
  const [blogData, setblogData] = useState({});

    const getBlogWithAxios = async (category) => {
        console.log(category);
      const response = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/blog/blogrest?category=0');
      setblogData(response);
      if(response.status==200){localStorage.setItem('baseUrl', response.data.response.baseUrl);}
    };

    useEffect(() => {
      getBlogWithAxios();
    }, []);


  return (
    <>
        <Header />
        <SideMenu />
        <div className="blog">
          <BlogSection />
        </div>
        <div className="business">
        {(blogData.status==200) ? (
          <>
        <BusinessQuote quote={blogData.data.response.plan.searchPlan} property='' />
        <Promise data={blogData.data.response.promise.stamp2}/>
        <Helmet>
            <title>{seoBlog.metatitle}</title>
            <meta name="description" content={seoBlog.metadescription} />
            <script type="application/ld+json">{seoBlog.schema[0]}</script>
            {/* <script type="application/ld+json">{businessSeo.data.response.seo.schema[0]}</script> */}
            <script src="js/come.js"></script>
            <script src="./js/imagesloaded.pkgd.min.js"></script>
            <script src="./js/anime.min.js"></script>
            {/* <script src="./js/swiper.min.js"></script> */}
            <script src="js/business.js"></script>
          </Helmet>
        </>
        ):('')}
        </div>
        <Footer/> 
    </>
  );
}

export default Blog;