import React from 'react';


class RestaurantSchema extends React.Component {
  constructor(props){
      super(props);
  }
  render(){
        const {items} = this.props;
        return (
            {
                "@context": "http://schema.org",
                "@type": "Restaurant",
                "name": "Your Restaurant's Name",
                "url": "http://your-restaurant.com/",
                "image": "http://your-restaurant.com/",
                "telephone": "(408) 714-1489",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Sunnyvale",
                    "addressRegion": "CA",
                    "postalCode": "94086",
                    "streetAddress": "1901 Lemur Ave"
                },
                "openingHours": [
                    "Mo-Sa 11:00-14:30",
                    "Mo-Th 17:00-21:30",
                    "Fr-Sa 17:00-22:00"
                ],
                "priceRange": "$$",
                "servesCuisine": [
                    "Middle Eastern",
                    "Mediterranean"
                ]
            }
        )
    }
}
  export default RestaurantSchema;