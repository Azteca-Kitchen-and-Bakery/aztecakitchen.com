const BreakfastMenuData = {
    breakfast:[
        {
            type:"title",
            value:`Served till noon`
        },
        {
            type:"description",
            value:`All plates served with beans & your choice of tortilla or bread.`
        },
        {
            type:"table",
            size:[1,1/2],
            columns:2,
            value:[
                {type:"columnHeadings",value:["Burro","Torta","Plate"]},
                {type:"title",value:"Potatos"},
                {type:"columns",value:[
                    {label:"Chorizo", value:["4.75","4.95","6.50"]},
                    {label:"item 2", value:["4.75","4.95","6.50"]},
                    {label:"item 3", value:["4.75","4.95","6.50"]},
                ]
                }
            ]
        }
    ]
}
export default BreakfastMenuData;