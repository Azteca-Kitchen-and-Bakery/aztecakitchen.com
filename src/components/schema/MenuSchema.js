import React from 'react';


class MenuSchema extends React.Component {
  constructor(props){
      super(props);
  }
  render(){
        const {items} = this.props;
        return (
            {
                "@context":"http://schema.org",
                "@type":"Menu",
                "name": "Our Menu",
                "url": "http://your-restaurant.com/menu/",
                "mainEntityOfPage": "http://your-restaurant.com/menu/",
                "inLanguage":"English",
                "offers": {
                    "@type": "Offer",
                    "availabilityStarts": "T17:00",
                    "availabilityEnds": "T23:00"
                },
                "hasMenuSection": [
                    {
                        "@type": "MenuSection",
                        "name": "Appetizers",
                        "hasMenuItem": [
                            {
                                "@type": "MenuItem",
                                "name": "Fried Eggplant",
                                "description": "Served with Italian red gravy.",
                                "offers": {
                                    "@type": "Offer",
                                    "price": "7.95",
                                    "priceCurrency": "USD"
                                }
                            }
                        ]
                    }
                ]
            }
        )
    }
}
  export default RestaurantSchema;