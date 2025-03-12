// import React from 'react';
// import "./home.css"
// const Home = () => {
//   return (
//     <div className='head'>
//      <div className='hero-image'>
//       <div className="hero-text">
//     <h2 style={{fontSize:"50px"}}>Welcome to Nish Hair</h2>
//     <p>Explore premium quality hair extensions and wigs.</p> 
//     <button className='button button1'>Hire me</button>
//   </div>
//       </div>
//     </div>
//   );
// };
// export default Home;

import React, { useState, useEffect } from 'react';
import './home.css';
import NewsCard from './card';
import { useNavigate } from 'react-router-dom';
import Carousel from './cursol';

const images = [
  "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
  "https://static.vecteezy.com/ti/photos-gratuite/p1/29360891-une-petit-vert-lezard-seance-sur-haut-de-une-arbre-bifurquer-generatif-ai-gratuit-photo.jpg"
];


const newsData = [
  {
    image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "Amazing First Title",
    date: "Jan 29, 2018",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur..."
  },
  {
    image: "https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "Amazing Second Title that is Quite Long",
    date: "Jan 29, 2018",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit..."
  },
  {
    image: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Amazing Title",
    date: "Jan 29, 2018",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae..."
  },
  {
    image: "https://t3.ftcdn.net/jpg/10/65/15/74/240_F_1065157460_zqrSde6MGGnRgi62xL00gouVl91YT7Wj.jpg",
    title: "Amazing First Title",
    date: "Jan 29, 2018",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur..."
  },
  {
    image: "https://t4.ftcdn.net/jpg/07/41/71/93/240_F_741719394_C9BP3YbiXSJ7WspSDLtKdYxZKKWlf0Jz.jpg",
    title: "Amazing Second Title that is Quite Long",
    date: "Jan 29, 2018",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit..."
  },
  {
    image: "https://t4.ftcdn.net/jpg/06/97/64/27/240_F_697642775_508sRZ9i6JastrRkbQsg8Fb6KhAcLmRh.jpg",
    title: "Amazing Title",
    date: "Jan 29, 2018",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae..."
  },
  {
    image: "https://t4.ftcdn.net/jpg/06/97/64/27/240_F_697642775_508sRZ9i6JastrRkbQsg8Fb6KhAcLmRh.jpg",
    title: "Amazing Title",
    date: "Jan 29, 2018",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae..."
  },
  {
    image: "https://t4.ftcdn.net/jpg/06/97/64/27/240_F_697642775_508sRZ9i6JastrRkbQsg8Fb6KhAcLmRh.jpg",
    title: "Amazing Title",
    date: "Jan 29, 2018",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae..."
  }
];
const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nav=useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='head'>
    <div className="hero-image" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
    <div className="hero-text">
         <h2 style={{fontSize:"50px"}}>Welcome to Gokila Hair</h2>
         <p>Explore premium quality hair extensions and wigs.</p> 
         <button className='button button1' onClick={()=>nav('/products')}>Hire me</button>
       </div>
    </div>
    <h2 style={{fontSize:"50px",alignContent:"center",width:"inherit",display:"flex",justifyContent:"center"}}>Our Collection</h2>
     <div className="content-wrapper">
     {newsData.map((news, index) => (
       <NewsCard key={index} {...news} />
     ))}
   </div>
     <Carousel/>

    </div>
  );
};

export default HeroSection;
