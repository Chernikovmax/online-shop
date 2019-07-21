import React, { Component } from 'react';
import { HOME, WOMEN, MEN, JEWELRY, SHOES } from '../../../routes';
import { MainMenuItem } from './'
import './Navigation.css';

export class Navigation extends Component {

    render() {
        return (
            <div className="main-menu-wrapper">
                <div className="main-menu">
                    <MainMenuItem 
                        route={{routeName: "Home", routeLink: HOME}}
                        linksToSections={
                            [
                                {
                                    sectionName: "Lorem ipsum",
                                    link: "/products_etc",
                                    id: "9168d76e-fe1a-4738-b4f2-0f0860fce57a"
                                },
                                {
                                    sectionName: "Dolor sit amet",
                                    link: "/products_etc",
                                    id: "aba5917a-3fb0-4c7b-ac80-78ffee638684"
                                },
                                {
                                    sectionName: "Consectetur adipisicing",
                                    link: "/products_etc",
                                    id: "a3993e38-6096-40fd-8949-92effb540bb8"
                                },
                                {
                                    sectionName: "Elit",
                                    link: "/products_etc",
                                    id: "eb0fe14e-ce14-4b77-ab7c-c57bfa2385de"
                                }
                            ]
                        }
                    />
                    <MainMenuItem 
                        route={{routeName: "Women", routeLink: WOMEN}}
                        linksToSections={
                            [
                                {
                                    sectionName: "Saepe perferendis nam",
                                    link: "/products_etc",
                                    id: "c3c8c746-6235-4d8a-b45b-06d271c4c190"
                                },
                                {
                                    sectionName: "Eaque dicta",
                                    link: "/products_etc",
                                    id: "ee16f6d2-b9b7-4135-b14e-0ef7abfee6c1"
                                },
                                {
                                    sectionName: "Possimus alias id",
                                    link: "/products_etc",
                                    id: "f33da68c-0c41-4a92-b588-628243398d81"
                                },
                                {
                                    sectionName: "Atque sed sunt",
                                    link: "/products_etc",
                                    id: "98a1d30e-4e88-4ca1-9c11-f430e202c1ba"
                                },
                                {
                                    sectionName: "Asperiores nemo nulla",
                                    link: "/products_etc",
                                    id: "1487a275-6aaa-4cb4-8895-b1801374d821"
                                }
                            ]
                        }
                    />
                    <MainMenuItem 
                        route={{routeName: "Men", routeLink: MEN}}
                        linksToSections={
                            [
                                {
                                    sectionName: "Corporis quas",
                                    link: "/products_etc",
                                    id: "970096b4-f019-4c23-a0ab-e0a8328adc6d"
                                },
                                {
                                    sectionName: "Perferendis",
                                    link: "/products_etc",
                                    id: "508c8b60-4644-4e50-9295-444664b2e82a"
                                },
                                {
                                    sectionName: "Quasi unde accusamus",
                                    link: "/products_etc",
                                    id: "7e500f95-fafb-4ff2-aeb2-b44e3ab89355"
                                },
                                {
                                    sectionName: "Sint non",
                                    link: "/products_etc",
                                    id: "288e8c87-4392-41f1-8410-408a8b505914"
                                }
                            ]
                        }
                    />
                    <MainMenuItem 
                        route={{routeName: "Jewelry", routeLink: JEWELRY}}
                        linksToSections={
                            [
                                {
                                    sectionName: "Lorem ipsum dolor",
                                    link: "/products_etc",
                                    id: "f5c1f873-b2ad-4afa-b820-c605d232d4c1"
                                },
                                {
                                    sectionName: "Sit amet",
                                    link: "/products_etc",
                                    id: "f29276e9-4284-4a47-b76b-f53ebefd7fe6"
                                },
                                {
                                    sectionName: "Consectetur",
                                    link: "/products_etc",
                                    id: "825e526f-f86c-4dbb-b128-c4d54ad3c25e"
                                }
                            ]
                        }
                    />
                    <MainMenuItem 
                        route={{routeName: "Shoes", routeLink: SHOES}}
                        linksToSections={
                            [
                                {
                                    sectionName: "Ammet amosit",
                                    link: "/products_etc",
                                    id: "8e76e5ad-ea62-4203-b39b-648405e2d4e4"
                                },
                                {
                                    sectionName: "Consectetur",
                                    link: "/products_etc",
                                    id: "fdaa6f82-528e-4f6d-803a-6628bbcf8cae"
                                },
                                {
                                    sectionName: "Iipsum dolor",
                                    link: "/products_etc",
                                    id: "b7d6aae8-a9ee-4165-853a-25aed07dc5d6"
                                },
                                {
                                    sectionName: "Sit amet",
                                    link: "/products_etc",
                                    id: "e6e063b9-ccaa-4e39-916f-6e04b3b74483"
                                },
                            ]
                        }
                    />
                </div>
            </div>
        );
    }
}
