import React from 'react'
import { Typography } from '@mui/material';
import './index.css';
import './slick.css'; 
import './slick-theme.css';
import Slider from "react-slick";


function SubCarousel({subsThisMonth, fullDate}){
    const settings = {
        infinite: true,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 3,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    subsThisMonth.sort((a, b) => b.monthly_price - a.monthly_price)
    console.log(subsThisMonth)

    return (
        <div style={{margin: "50px auto", width: "90%"}}>
            <Typography sx={{mb: "50px"}} variant="h4" component="h1">Your top 5 spends</Typography>
            <Slider {...settings}>
            {subsThisMonth.slice(0,5).map(s => {
                return (
                    <div key={s.id}>
                        <img src={s.image_url} alt={s.name} style={{width: "100%", height: "150px", objectFit: "contain", marginBottom: "10px"}}/>
                        <p>Monthly Price: {s.monthly_price} $</p>
                        <hr style={{width: "70%"}}/>
                        <p>Due on: {`${fullDate.slice(0,2)}/${s.payment_date.slice(3,5)}/${fullDate.slice(6,10)}`}</p>
                    </div>
                )
            })}
            </Slider>
        </div>
    )
}

export default SubCarousel;