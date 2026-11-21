/* 
Header 
    - left side logo 
    - right side nav items (Home, About, Contact, Cart)
Body 
    - body container 
    - search bar
    - restaurant container
        -  restaurant card
            - image
            - name of restaurant
            - rating
            - cuisine
    - footer
        - copyright
        - links
        - address   
        - contact info
*/

import { RestaurantCard } from "./RestaurantCard";

export const Header = () => {
    return (
        <div className="main">
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.magnific.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" alt="Logo" />
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/cart">Cart</a></li>
                </ul>
            </nav>
        </div>
        </div>
    );
}

export const Body = () => {

    const restaurants = [{
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "93837",
                                            "name": "Sree Krishna Cafe",
                                            "cloudinaryImageId": "gn6wumbdveydhk1kvkpw",
                                            "locality": "Uthukuli Main Road",
                                            "areaName": "Kangayam Cross Road",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "South Indian",
                                                "Beverages",
                                                "Snacks",
                                                "Indian"
                                            ],
                                            "avgRating": 4.2,
                                            "veg": true,
                                            "parentId": "18288",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "8.0K+",
                                            "sla": {
                                                "deliveryTime": 29,
                                                "lastMileTravel": 2.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "2.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-11-21 16:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "Serves only 100% vegetarian food, with no non-veg items."
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Serves only 100% vegetarian food, with no non-veg items.",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                                    "theme": ""
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {},
                                                "commsStyling": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                            "priceComparisonComms": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-8373e37a-fed5-4425-9014-4fc38988c34f"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/tirupur/sree-krishna-cafe-uthukuli-main-road-kangayam-cross-road-rest93837",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "613166",
                                            "name": "Sree Saravana Bhavan",
                                            "cloudinaryImageId": "nvxbtcmc2eqruhljkjxo",
                                            "locality": "New Market Street",
                                            "areaName": "South Tirupur",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "South Indian",
                                                "Indian",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.6,
                                            "veg": true,
                                            "parentId": "193221",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "2.4K+",
                                            "sla": {
                                                "deliveryTime": 21,
                                                "lastMileTravel": 0.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "0.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-11-21 21:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "Serves only 100% vegetarian food, with no non-veg items."
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Serves only 100% vegetarian food, with no non-veg items.",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                                    "theme": ""
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {},
                                                "commsStyling": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                            "priceComparisonComms": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-8373e37a-fed5-4425-9014-4fc38988c34f"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/tirupur/sree-saravana-bhavan-new-market-street-south-tirupur-rest613166",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "1404829",
                                            "name": "Hotel Gowri Kkrishna (Take Away Kitchen)",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/8/751a5629-085a-49fd-b7d3-fc7cab6d96e7_1404829.jpg",
                                            "locality": "North Tirupur",
                                            "areaName": "North Tirupur",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "South Indian",
                                                "North Indian",
                                                "Indian",
                                                "Biryani"
                                            ],
                                            "avgRating": 4.2,
                                            "veg": true,
                                            "parentId": "816970",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "209",
                                            "sla": {
                                                "deliveryTime": 29,
                                                "lastMileTravel": 5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "5.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-11-21 22:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {},
                                                "commsStyling": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "isNewlyOnboarded": true,
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                            "priceComparisonComms": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-8373e37a-fed5-4425-9014-4fc38988c34f"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/tirupur/hotel-gowri-kkrishna-take-away-kitchen-north-tirupur-rest1404829",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "1032001",
                                            "name": "Hotel Gowri Shankar",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/22/96a3f4d2-e6b5-44a1-bc8a-e03748669490_1032001.JPG",
                                            "locality": "Central Tirupur",
                                            "areaName": "Central Tirupur",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "Biryani",
                                                "Chettinad",
                                                "Desserts",
                                                "Indian"
                                            ],
                                            "avgRating": 4.1,
                                            "veg": true,
                                            "parentId": "327908",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "1.2K+",
                                            "sla": {
                                                "deliveryTime": 27,
                                                "lastMileTravel": 1.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "1.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-11-21 22:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {},
                                                "commsStyling": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                            "priceComparisonComms": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-8373e37a-fed5-4425-9014-4fc38988c34f"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/tirupur/hotel-gowri-shankar-central-tirupur-rest1032001",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "1416735",
                                            "name": "Hotel Gowri Kkrishna",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/19/a457beaa-d95f-49e5-b042-ca7d664ecdae_1047679.jpg",
                                            "locality": "South Tirupur",
                                            "areaName": "South Tirupur",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "Chettinad",
                                                "South Indian",
                                                "Chaat",
                                                "North Indian",
                                                "Kerala",
                                                "Indian"
                                            ],
                                            "avgRating": 4.3,
                                            "veg": true,
                                            "parentId": "477047",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "248",
                                            "sla": {
                                                "deliveryTime": 34,
                                                "lastMileTravel": 2.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "2.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-11-21 22:01:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {},
                                                "commsStyling": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "isNewlyOnboarded": true,
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                            "priceComparisonComms": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-8373e37a-fed5-4425-9014-4fc38988c34f"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/tirupur/hotel-gowri-kkrishna-south-tirupur-rest1416735",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "72463",
                                            "name": "A2B - Adyar Ananda Bhavan",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/11/17/633dc96b-79fd-492a-b712-381acb2fbaeb_72463.JPG",
                                            "locality": "Karuvampalayam",
                                            "areaName": "Tiruppur",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "South Indian",
                                                "North Indian",
                                                "Sweets",
                                                "Chinese"
                                            ],
                                            "avgRating": 4.5,
                                            "veg": true,
                                            "parentId": "22",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "36K+",
                                            "sla": {
                                                "deliveryTime": 25,
                                                "lastMileTravel": 1.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "1.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-11-21 22:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "brand_cards/Badges%202026/26_Best%20in%20North%20Indian2026.png",
                                                        "description": "Top-rated for North Indian, based on user votes."
                                                    },
                                                    {
                                                        "imageId": "brand_cards/Badges%202026/32_Best%20in%20South%20Indian2026.png",
                                                        "description": "Top-rated for South Indian, based on user votes."
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Top-rated for North Indian, based on user votes.",
                                                                    "imageId": "brand_cards/Badges%202026/26_Best%20in%20North%20Indian2026.png",
                                                                    "theme": ""
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Top-rated for South Indian, based on user votes.",
                                                                    "imageId": "brand_cards/Badges%202026/32_Best%20in%20South%20Indian2026.png",
                                                                    "theme": ""
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {},
                                                "commsStyling": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                            "priceComparisonComms": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-8373e37a-fed5-4425-9014-4fc38988c34f"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/tirupur/a2b-adyar-ananda-bhavan-karuvampalayam-tiruppur-rest72463",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "484533",
                                            "name": "Annapoorna",
                                            "cloudinaryImageId": "h73wp0kk8dwo175bhfb1",
                                            "locality": "Laxmi Nagar",
                                            "areaName": "Railway Station",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "South Indian",
                                                "Chinese"
                                            ],
                                            "avgRating": 4.4,
                                            "veg": true,
                                            "parentId": "3791",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "20K+",
                                            "sla": {
                                                "deliveryTime": 22,
                                                "lastMileTravel": 1.9,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "1.9 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-11-21 22:50:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "brand_cards/Badges%202026/26_Best%20in%20North%20Indian2026.png",
                                                        "description": "Top-rated for North Indian, based on user votes."
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Top-rated for North Indian, based on user votes.",
                                                                    "imageId": "brand_cards/Badges%202026/26_Best%20in%20North%20Indian2026.png",
                                                                    "theme": ""
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {},
                                                "commsStyling": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                            "priceComparisonComms": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-8373e37a-fed5-4425-9014-4fc38988c34f"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/tirupur/annapoorna-laxmi-nagar-railway-station-rest484533",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    },
                                    {
                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                                        "info": {
                                            "id": "760203",
                                            "name": "Sree Annapoorna",
                                            "cloudinaryImageId": "ff71e4424876f4f0a39c3a60291c3f5e",
                                            "locality": "Near Covai Byepass",
                                            "areaName": "Avinashi",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "South Indian",
                                                "Indian",
                                                "North Indian",
                                                "Chinese",
                                                "Beverages",
                                                "Juices"
                                            ],
                                            "avgRating": 4.5,
                                            "veg": true,
                                            "parentId": "4732",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "6.9K+",
                                            "sla": {
                                                "deliveryTime": 56,
                                                "lastMileTravel": 13.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-60 mins",
                                                "lastMileTravelString": "13.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-11-21 22:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "brand_cards/Badges%202026/32_Best%20in%20South%20Indian2026.png",
                                                        "description": "Top-rated for South Indian, based on user votes."
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Top-rated for South Indian, based on user votes.",
                                                                    "imageId": "brand_cards/Badges%202026/32_Best%20in%20South%20Indian2026.png",
                                                                    "theme": ""
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "orderabilityCommunication": {
                                                "title": {},
                                                "subTitle": {},
                                                "message": {},
                                                "customIcon": {},
                                                "commsStyling": {}
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                            "priceComparisonComms": {}
                                        },
                                        "analytics": {
                                            "context": "seo-data-8373e37a-fed5-4425-9014-4fc38988c34f"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/tirupur/sree-annapoorna-near-covai-byepass-avinashi-rest760203",
                                            "text": "RESTAURANT_MENU",
                                            "type": "WEBLINK"
                                        },
                                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                    }];

    const {cloudinaryImageId, name, cuisines, avgRating} = restaurants[0].info;                                

    return (
        <div className="body-container">
            <div className="search-bar">
                <input type="text" placeholder="Search for food..." />
                <button>Search</button>
            </div>
            <div className="restaurant-container">
                {restaurants.map((restaurant) => { 
                    const {id, cloudinaryImageId, name, cuisines, avgRating} = restaurant.info;
                    return (
                        <RestaurantCard key={id} cloudinaryImageId={cloudinaryImageId} 
                            name={name} cuisines={cuisines} avgRating={avgRating} />
                    );
                })} 
            </div>
            <div className="footer" style={{backgroundColor: "lightgray", borderRadius: "5px", padding: "10px", textAlign: "center"}}>
                <p>&copy; 2024 FoodApp. All rights reserved.</p>
                <ul>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                </ul>
            </div>
        </div>
    );
}

export const FoodApp = () => {
return ( 
    <>
    <Header />
    <Body />
    </>
)
}