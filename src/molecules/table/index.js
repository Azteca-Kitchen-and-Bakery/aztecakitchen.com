import React from 'react';
import { Flex, Text} from 'rebass';
import styles from './table.module.scss';


class Table extends React.Component {
    
    render(){
        const {data,className} = this.props;
        console.log(this.props)
        return (
            <Flex flexWrap='wrap' className={className}>
            {data.map(({ label, value }, index) => (
                <Flex width={[1,1/2]} key={index} pr={4} pb={2} className={styles.item}>
                    <Text className={styles.label} width={[1/2]} textAlign="left" dangerouslySetInnerHTML={{__html: label}} />
                    <Text className={styles.value} width={[1/2]} textAlign="right" dangerouslySetInnerHTML={{__html: value}} />
                </Flex>
            ))}
            </Flex>
        );
        
    }
};

export default Table;
