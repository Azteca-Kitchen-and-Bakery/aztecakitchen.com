import React from 'react';
import {Heading, Text, Box} from 'rebass';
import Table from '../table';
import styles from './menu.module.scss';


class Menu extends React.Component {
  render(){
        const {items} = this.props;
        return (
            <div className={styles.section}>
                {items.map(({ type, value, size, columns }, index) => (
                    <>
                    {type === "title" && <h3 className={styles.heading}>{value}</h3>}
                    {type === "description" && <p className={styles.description} dangerouslySetInnerHTML={{__html: value}} />}
                    {type === "table" && <Table data={value} size={size} columns={columns} />}
                    </>
                ))}
            </div>
        )
    }
}
  export default Menu;