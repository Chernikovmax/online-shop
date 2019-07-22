import React from 'react';
import { TopSlider } from '../../components/topSlider';
import woman1 from '../../content/images/woman1.jpg';
import woman2 from '../../content/images/woman2.jpg';

const topProducts = [
    {
        productTitle: "new arrivals",
        productName: "denim jackets",
        productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`,
        productCost: "29$",
        imageURL: woman1,
    },
    {
        productTitle: "new arrivals",
        productName: "denim jackets",
        productDescription: `Ea minim consectetur eiusmod officia nisi pariatur consequat sunt veniam. Cillum adipisicing sint ullamco nulla non aliqua incididunt voluptate minim. Aliquip laboris excepteur cillum nulla. Duis nostrud velit nisi excepteur. Commodo minim nulla cupidatat nostrud elit duis elit qui enim excepteur velit. Ullamco veniam eu quis ea sint et incididunt tempor occaecat anim aliqua nisi ut.`,
        productCost: "29$",
        imageURL: woman2,
    },
];

export function HomePage() {
    return (
        <TopSlider
            products={topProducts}
        />
    );
}
