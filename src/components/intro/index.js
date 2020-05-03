import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Styles from './intro.module.scss';
import RestaurantSchema from '../schema/restaurant'

const Intro = () => (
    <StaticQuery
      query={graphql`
        query IntroQuery {
          site {
            siteMetadata {
                business{
                    address{
                        addressLocality
                        addressRegion
                        postalCode
                        streetAddress
                    }
                    openingHours{
                        formatted
                    }
                    telephone
                    fax
                }
            }
          }
        }
      `}
      render={data => {
        const {address,openingHours,telephone,fax} = data.site.siteMetadata.business;
        
        return (
            <div className={Styles.intro}>
                <h2 className={Styles.body}>Serving authentic Mexican family recipe&nbsp;<br className={Styles.hideMdDown}/>for Breakfast, Lunch and Dinner.&nbsp;<br className={Styles.hideMdDown}/>All-natural ingredients. No Preservatives.</h2>
                <div className={Styles.section}>
                  <p className={Styles.heading}>{openingHours.formatted[0]}<br/>{openingHours.formatted[1]}</p>
                </div>
                <p className={Styles.body}>FREE Delivery with a $35 minumum.</p>
                <p className={Styles.body}>Stop in to see (and smell!) our full selection&nbsp;<br className={Styles.hideMdDown}/>of traditional Mexican pastries and bolillo&nbsp;<br className={Styles.hideMdDown}/>(Mexican white bread) baked fresh daily!</p>
                <div className={Styles.section} id="#contact">
                  <div className={Styles.section}>
                    <p className={Styles.heading}><a href={`maps://?q=${address.streetAddress}${address.addressLocality}, ${address.addressRegion} ${address.postalCode}`}>{address.streetAddress}<br/>{address.addressLocality}, {address.addressRegion} {address.postalCode}</a></p>
                  </div>
                  <div className={Styles.section}>
                    <p className={Styles.heading}>Call to order<br/>P <a href={`tel:${telephone}`}>{telephone}</a><br/>F {fax}</p>
                  </div>
                </div>
                <script type="application/ld+json">
                  {JSON.stringify(RestaurantSchema)}
                </script>
            </div>
        );
      }}
    />
  );

export default Intro;