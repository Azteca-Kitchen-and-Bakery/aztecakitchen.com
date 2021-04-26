const FamilyMenuData = {
    familyDinner:[
        {type:"title",value:"Family dinners"},
        {type:"description",value:`Pre-order only!`},
        {
            type:"table",
            size:[1,1/2],
            columns:2,
            value:[
                {label:"#1<br/>1 Doz. Mini Burros - 4 Red, 4 Green, 4 Bean & Cheese, 16oz Salsa, 1lb Chips", value:"40.00"},
                {label:"#2<br/>15 Cheese Enchiladas, 2lb Beans, 2lb Rice, 4oz sour cream",value:"45.00"},
                {label:"#3<br/>2lbs Machaca, 2lbs Beans, 2lbs Rice, 8oz Salsa, 1doz Tortillas",value:"45.00"}
            ]
        }
    ],
    byThePound:[
        {type:"title",value:"By the pound"},
        {type:"description",value:`Pre-order only!`},
        {
            type:"table",
            size:[1,1/2],
            columns:2,
            value:[
                {label:"Machaca (Shredded Beef)", value:"13.50/lb"},
                {label:"Carnitas (Pork Roast)", value:"13.50/lb"},
                {label:"Red Chili & Beef", value:"12.50/lb"},
                {label:"Green Chili & Beef", value:"12.50/lb"},
                {label:"Beans", value:"4.50/lb"},
                {label:"Rice", value:"4.50/lb"},
                {label:"Mini Platter", value:"40 Items 55.00"}

            ]
        }
    ],
    grilledSpecials:[
        {type:"title",value:"Grilled Specials"},
        {
            type:"table",
            size:[1,1/2],
            columns:2,
            value:[
                {label:"1 lb. Fajitas (Beef or Chicken) w/ 1lb. Beans, 1lb. Rice, 8oz Salsa & 6 torillas", value:"23.00"},

            ]
        }
    ]
}
export default FamilyMenuData;