import React from 'react';
import { Flex, Box, Text } from 'rebass';
import MenuData from '../../data/breakfast-menu';
import Styles from './menu.module.scss';
import tableStyles from '../table/table.module.scss';

function columnHeadings(data){
  return (
    <Flex width={1} pr={4} pb={3} className={tableStyles.item}>
      <Text className={tableStyles.label} width={[2/5]} textAlign="left"></Text>
      {data.map((item,index) => (
          
        <Text key={index} className={tableStyles.value, Styles.columnHeadings} width={[1/5]} textAlign="right">{item}</Text>
          
      ))}
      
    </Flex>
  )
}
function menuTable(data){
  return(
    <>
    {data.map((item,index) => (
      <Flex width={1} pr={4} pb={2} className={tableStyles.item}>
          <Text className={tableStyles.label} width={[2/5]} textAlign="left"  dangerouslySetInnerHTML={{__html: item.label}} />
          {item.value.map((item,index) => (
            
            <Text key={index} className={tableStyles.value} width={[1/5]} textAlign="right">{item}</Text>
            
          ))}
      </Flex>
    ))}
    </>
  )
}

const BreakfastMenu = () => (
  <Flex flexWrap="wrap" justifyContent="space-between" alignItems="top">
    <Box mb={4} className={Styles.menu} width={1}>
      {MenuData.breakfast.map(({ type, value }, index) => (
          <>
          {type === "title" && <h3 className={Styles.heading}>{value}</h3>}
          {type === "description" && <p className={Styles.description} dangerouslySetInnerHTML={{__html: value}} />}
          {type === "divide" && <hr className={Styles.slimDivide}/>}
          {type === "subtitle" && <p className={Styles.suhead}>{value}</p>}
          {type === "columnHeadings" && columnHeadings(value)}
          {type === "columns" && menuTable(value) }
          </>
      ))}
    </Box>
  </Flex>
);

export default BreakfastMenu;
