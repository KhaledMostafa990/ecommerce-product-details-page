import React from 'react'
import ProductDetails from '../features/ProductDetails'
import productImage1 from '../assets/image-product-1.jpg'
import productImage1Thumbnail from '../assets/image-product-1-thumbnail.jpg'
import productImage2 from '../assets/image-product-2.jpg'
import productImage2Thumbnail from '../assets/image-product-2-thumbnail.jpg'
import productImage3 from '../assets/image-product-3.jpg'
import productImage3Thumbnail from '../assets/image-product-3-thumbnail.jpg'
import productImage4 from '../assets/image-product-4.jpg'
import productImage4Thumbnail from '../assets/image-product-4-thumbnail.jpg'
import Section from '../components/Section'


export default function Home() {
    return (
        <Section className=''>
            <ProductDetails {...products[0]} />
        </Section>
    )
}

// products data mock
const products = [
    {
        title: 'Fall Limited Edition Sneakers',
        subtitle: "sneaker company",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        price: 250,
        discountPerCent: 50,
        quantity: 1,
        images: {
            main: [
                productImage1,
                productImage2,
                productImage3,
                productImage4
            ],
            thumbnails: [
                productImage1Thumbnail,
                productImage2Thumbnail,
                productImage3Thumbnail,
                productImage4Thumbnail
            ]
        }
    },

    {
        title: 'Fall Limited Edition Sneakers',
        subtitle: "sneaker company",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        price: 125,
        discountPerCent: 25,
        quantity: 1,
        images: {
            main: [
                productImage1,
                productImage2,
                productImage3,
            ],
            thumbnails: [
                productImage1Thumbnail,
                productImage2Thumbnail,
                productImage3Thumbnail,
            ]
        }

    },
]


