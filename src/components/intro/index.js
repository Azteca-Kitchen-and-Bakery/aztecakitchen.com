import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Styles from './intro.module.scss';
import RestaurantSchema from '../schema/restaurant'

function Intro(props) {
  const config = props;
  return (
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
      render={(data) => <div className={Styles.intro}>
        {config.minimal !== true &&
          <div className={Styles.section}>
            <h2 className={Styles.body}>Serving authentic Mexican family recipe&nbsp;<br className={Styles.hideMdDown}/>for Breakfast, Lunch and Dinner.&nbsp;<br className={Styles.hideMdDown}/>All-natural ingredients. No Preservatives.</h2>
          </div>
        }
        <div className={Styles.section}>
          <p className={Styles.heading}>{data.site.siteMetadata.business.openingHours.formatted[0]}<br/>{data.site.siteMetadata.business.openingHours.formatted[1]}</p>
        </div>
        {config.minimal !== true &&
          <div className={Styles.section}>
            <p className={Styles.body}>FRESH TORTILLAS DAILY</p>
          </div>
        }
        {config.minimal !== true &&
          <div className={Styles.section}>
            <p className={Styles.body}>Full selection of traditional Mexican&nbsp;<br className={Styles.hideMdDown}/>pastries and Bolillo (Mexican white bread)&nbsp;<br className={Styles.hideMdDown}/>baked fresh daily!</p>
          </div>
      }
        <div className={Styles.subsection} id="#contact">
          <div className={Styles.section}>
            <p className={Styles.heading}><a href={`https://maps.google.com?q=${data.site.siteMetadata.business.address.streetAddress}${data.site.siteMetadata.business.address.addressLocality}, ${data.site.siteMetadata.business.address.addressRegion} ${data.site.siteMetadata.business.address.postalCode}`}>{data.site.siteMetadata.business.address.streetAddress}<br/>{data.site.siteMetadata.business.address.addressLocality}, {data.site.siteMetadata.business.address.addressRegion} {data.site.siteMetadata.business.address.postalCode}</a></p>
          </div>
          <div className={Styles.section}>
            <p className={Styles.heading}>Call to order<br/>P <a href={`tel:${data.site.siteMetadata.business.telephone}`}>{data.site.siteMetadata.business.telephone}</a><br/>F {data.site.siteMetadata.business.fax}</p>
          </div>
        </div>
        <script type="application/ld+json">
          {JSON.stringify(RestaurantSchema)}
        </script>
      </div>}
    />
  )
};

export default Intro;