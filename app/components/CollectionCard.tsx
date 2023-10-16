'use client'
import React from 'react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import Link from 'next/link'
import { collections } from '../lib/fakeData'

export default function CollectionCard() {
  const settings: Settings = {
    dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      initialSlide: 0,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
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

  return (
    <Slider {...settings} className='m-5'>
      {collections.map((col, i) => (
        <Link href={`/collection/${col.id}`} key={i}>
          <div className='border border-gray-200 rounded-3xl hover:cursor-pointer hover:border-gray-500' >
            <Image className='rounded-t-3xl' src={col.url} alt={col.title} width={1600} height={500} />
            <div className='p-5'>
              <h1 className='text-lg font-medium'>{col.title}</h1>
            </div>
          </div>
        </Link>
      ))}
    </Slider>
  )
}
