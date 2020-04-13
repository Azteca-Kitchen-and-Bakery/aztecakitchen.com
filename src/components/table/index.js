import React from 'react';
import { Flex, Text} from 'rebass';
import styles from './table.module.scss';

function breakHalfway(i,l){
    let style = "";
    if( i === Math.floor(l/2) ){
        style = {
            breakAfter: "always"
        };
    }else{
        style = {
            breakAfter: "avoid"
        };
    }
    return style;
}
function columnCount(c){
    if (c === 1 ){
        return styles.column1;
    } else {
        return styles.column2;
    }
}

class Table extends React.Component {
    
    render(){
        const {data,className,size,columns} = this.props;
        return (
            <div className={columnCount(columns)}>
            {data.map(({ label, value }, index) => (
                <Flex width={size} key={index} pr={4} pb={2} className={styles.item} style={breakHalfway(index,data.length)}>
                    <Text className={styles.label} width={[2/3]} textAlign="left" dangerouslySetInnerHTML={{__html: label}} />
                    <Text className={styles.value} width={[1/3]} textAlign="right" dangerouslySetInnerHTML={{__html: value}} />
                </Flex>
            ))}
            </div>
        );
        
    }
};

export default Table;
