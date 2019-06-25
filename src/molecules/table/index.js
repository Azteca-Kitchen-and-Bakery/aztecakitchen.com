import React from 'react';
import { Flex, Text} from 'rebass';


class Table extends React.Component {
    
    render(){
        const {data} = this.props;
        
        return (
            <Flex flexWrap='wrap'>
            {data.map(({ label, value }, index) => (
                <Flex width={[1,1/2]} key={index} pr={4} pb={2}>
                    <Text width={[1/2]} textAlign="left">{label}</Text>
                    <Text width={[1/2]} textAlign="right">{value}</Text>
                </Flex>
            ))}
            </Flex>
        );
        
    }
};

export default Table;
