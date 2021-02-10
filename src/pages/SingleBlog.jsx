import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import '../css/style.css'
import '../css/menu.css'
import '../css/blog.css'
import '../css/footer.css'


import Header from '../components/Header'
import SideMenu from '../components/SideMenu';
import SingleBlogs from '../components/SingleBlogs';
import Footer from '../components/Footer';

function SingleBlog(post) {
    console.log(post);
    const [singleBlogData, setsingleBlogData] = useState({});
    post=post.location.pathname.replace('/post/','');

    const getSingleBlogWithAxios = async () => {
      const response = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/blog/getblogby/permalink/'+post);
      setsingleBlogData(response);
      if(response.status==200){localStorage.setItem('baseUrl', response.data.response.baseUrl);}
    };
  
    useEffect(() => {
        getSingleBlogWithAxios();
    }, []);

    return (
        <>
        <Header />
        <SideMenu />
        {
        (singleBlogData.status==200) ?
        (
        <SingleBlogs data={singleBlogData.data.response.blog} />
        ):('')}
        <Footer/> 
        </>
  );
}

export default SingleBlog;