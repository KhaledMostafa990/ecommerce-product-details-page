import React from 'react'
import ProductDetails, { ProductDetailsProps } from '../features/ProductDetails'
import productImage1 from '../assets/image-product-1.jpg'
import productImage1Thumbnail from '../assets/image-product-1-thumbnail.jpg'
import productImage2 from '../assets/image-product-2.jpg'
import productImage2Thumbnail from '../assets/image-product-2-thumbnail.jpg'
import productImage3 from '../assets/image-product-3.jpg'
import productImage3Thumbnail from '../assets/image-product-3-thumbnail.jpg'
import productImage4 from '../assets/image-product-4.jpg'
import productImage4Thumbnail from '../assets/image-product-4-thumbnail.jpg'
import Section from '../components/Section'
import { useLocation } from 'react-router'


export default function ProductDetailsPage() {
    let product;
    const { pathname } = useLocation();

    if (pathname.length > 1) {
        const productId = pathname.split('/')[1];
        product = products.find(product => product.id === productId) as ProductDetailsProps;
    } else product = products[0];

    return (
        <main>
            <Section className='lg:pt-20'>
                <ProductDetails productData={product} />
            </Section>
        </main>
    )
}

// products data mock
const products = [
    {
        id: 'men',
        title: 'Fall Limited Edition Sneakers',
        subtitle: "sneaker company",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        price: 250,
        discountPerCent: 50,
        quantity: 3,
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
        id: 'women',
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
]


