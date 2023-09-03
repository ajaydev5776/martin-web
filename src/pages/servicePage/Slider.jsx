import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';
import slideImg from './../../Assets/images/mainSlider.jpg'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';


const Slider = ()=> {
    const [src, setSrc] = useState(slideImg)
    const [next, setNext] = useState('')
    let nextImg = document.querySelector('.swiper-slide-next')

    useEffect(()=> {
        setNext(nextImg)
    }, [])

    useEffect(()=> {
        if (next) {
            setSrc(next.childNodes[0].childNodes[0].src)
        }

    }, [next])
    console.log(src)

  

  return (
    <>
    <div className="mb-5 py-5 pb5 gourmentsection sliderSection">
        <Swiper 
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper3 h-100">
            <SwiperSlide>
                <div className="cornicesImg h-100">
                    <img src="assets/img/flait2.jpg"  className="w-100 h-100" alt=""/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="cornicesImg h-100">
                    <img src={slideImg}  className="w-100 h-100" alt=""/>
                </div>
            </SwiperSlide>
        </Swiper>
        <div className="container-fluid d-lg-block d-none">
            <div className="container-lg innerfluid">
                <div className="row row-gap-5">
                    <div className="col-12">
                        <div className="corniceImg position-relative">
                            <div className="rightsdePopuo innerPagesidePopup position-absolute end-0 bottom-0 mt-0 mb-n5  justify-content-end" style={{zIndex: 9}}>
                                {/* <span className="layar d-inline-flex w-100 h-100 position-absolute top-0 start-0"></span> */}
                                <span className="d-flex"><img src={src} className="w-100 h-100" alt=""/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Slider;