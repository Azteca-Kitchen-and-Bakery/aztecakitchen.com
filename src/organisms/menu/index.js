import React from 'react';
import {Heading, Text, Box} from 'rebass';
import Table from '../../molecules/table';
import styles from './menu.module.scss';


class Menu extends React.Component {
  constructor(props){
      super(props);
  }
  render(){
        const {items} = this.props;
        return (
            <Box className={styles.section}>
                {items.map(({ type, value }, index) => (
                    <Box width={1} key={index}>
                    {type === "title" && <Heading className={styles.heading} width={1} mt={4} mb={0}>{value}</Heading>}
                    {type === "description" && <Text className={styles.description} width={1} mt={0} mb={0} dangerouslySetInnerHTML={{__html: value}} />}
                    {type === "table" && <Table className={styles.table} data={value} />}
                    </Box>
                ))}
            </Box>
        )
    }
}
  export default Menu;