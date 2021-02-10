import React,{useState, useEffect} from 'react'
// import {Helmet} from "react-helmet";
import { NavLink } from 'react-router-dom';
// import ReactHtmlParser from 'react-html-parser'
import axios from 'axios'; 

function BlogSection() {

    const [blogData, setblogData] = useState({});

    const getBlogWithAxios = async (category) => {
        console.log(category);
      const response = await axios.get('https://www.symbioenergy.co.uk/backend/index.php/api/blog/blogrest?category='+category);
      setblogData(response);
      if(response.status===200){localStorage.setItem('baseUrl', response.data.response.baseUrl);}
    };
  
    useEffect(() => {
      getBlogWithAxios(0);
    }, []);

    const [scrollPosition, setSrollPosition] = useState({});

    const change = (event) => {getBlogWithAxios(event.target.value);};

 

    return (
        <>
               
                {(blogData.status===200) ?
            (
 <section className="py-5 px-3 padding-left-responsive px-lg-5 pl-xl-5 slider-container">
    <h1 className="font-weight-bolder text-center text-capitalize text-dark font-family-san-serif font-size-3pt5rem px-3 mb-3">Symbio Blog</h1>
    <main className="blogDiv my-5">
        <svg className="hidden">
			<symbol id="icon-arrow" viewBox="0 0 24 24">
				<title>arrow</title>
				<polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 "/>
			</symbol>
			<symbol id="icon-cross" viewBox="0 0 24 23">
				<title>cross</title>
				<path d="M23.865 3.677c.197-.383.164-.818-.008-1.18.048-.41-.06-.827-.448-1.147L22.323.457c-.636-.524-1.632-.689-2.25 0a155.348 155.348 0 0 1-8.797 9.001C9.011 7.342 6.72 5.255 4.443 3.165c-.8-.734-1.956-.503-2.458.37C1.253 3.9.659 4.374.168 5.182c-.233.386-.215.872 0 1.258 1.47 2.635 4.31 4.951 6.646 7.083-.313.28-.623.562-.942.836-3.146 2.702-5.268 4.416-1.331 7.187.053.037.107.029.161.05.076.036.148.06.232.074.026 0 .05.005.075.003.082.007.16.027.243.011 2.117-.415 4.085-2.074 5.872-3.9 1.74 1.715 3.592 3.353 5.63 4.325.485.232 1.063.097 1.436-.227.626.047 1.197-.342 1.484-.901.042-.026.07-.041.116-.07.91-.569.993-1.701.32-2.482-1.522-1.762-3.138-3.438-4.787-5.084 2.968-2.9 6.674-6.027 8.542-9.667z"/>
			</symbol>
		</svg>
        <div className="">
                <div className="m-auto website-field">
                    <select id="showBlog" onChange={change}>
                        <option value="0" defaultValue="selected">All</option>
                        {blogData.data.response.blogCat.map((value1,key1)=>{return(
                        <option key={'sel'+key1} value={value1.id}>{value1.name}</option>
                        ) })}
                    </select>
                </div>
            <div className="grid">
            {blogData.data.response.blog.map((value,key)=>{return(
                <NavLink key={key} className="grid__item" data-name={value.name} href={value.name} style={{scrollPosition}} to={'/post/'+value.permalink}>
                    <div className="box">
                        <div className="box__shadow"></div>
                        <img className="box__img" src={localStorage.getItem('baseUrl')+(JSON.parse(value.image).link)} alt={(JSON.parse(value.image).altImage)}/>
                        <h4 className="box__text"><span className="box__text-inner">{value.cat_name}</span></h4>
                        <p className="box__content">"{value.name}"</p>
                    </div>
                </NavLink>
             ) })}
            </div>
        </div>
    </main>
    {/* <Helmet>
        <script src="./blogJs/imagesloaded.pkgd.min.js"></script>
        <script src="./blogJs/TweenMax.min.js"></script>
        <script src="./blogJs/blog.js"></script>
    </Helmet> */}
</section>
  ):('')} 
   
   
        </>
    )
}

export default BlogSection
