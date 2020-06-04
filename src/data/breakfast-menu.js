const BreakfastMenuData = {
  breakfast: [
    {
      type: "title",
      value: `Served till noon`
    },
    {
      type: "description",
      value: `All plates served with beans & your choice of tortilla or bread.`
    },
    { type: "columnHeadings", value: ["Burro", "Torta", "Plate"] },
    { type: "subtitle", value: "Potatoes" },
    {
      type: "columns",
      value: [
        { label: "Chorizo", value: ["5.25", "4.95", "7.00"] },
        { label: "Machaca", value: ["5.25", "4.95", "7.00"] },
        { label: "Eggs", value: ["5.00", "4.95", "7.00"] }
      ]
    },
    { type: "subtitle", value: "Eggs" },
    {
      type: "columns",
      value: [
        { label: "Chorizo", value: ["5.25", "4.95", "7.00"] },
        { label: "Machaca", value: ["5.25", "4.95", "7.00"] },
        { label: "Rancheros", value: ["5.25", "4.95", "7.00"] },
        { label: "Ham", value: ["5.25", "4.95", "7.00"] },
        { label: "Bacon", value: ["5.25", "4.95", "7.00"] },
        { label: "Asada", value: ["6.25", "", "7.75"] }
      ]
    },
    { type: "subtitle", value: "Omlette" },
    {
      type: "columns",
      value: [
        { label: "Cheese", value: ["", "", "7.00"] },
        { label: "Machaca", value: ["", "", "7.00"] },
        { label: "Eggs", value: ["", "", "7.00"] }
      ]
    },
    { type: "divide", value: "" },
    {
      type: "columns",
      value: [
        { label: "Burros Chicos (Small)<br/>Choose 2 items only", value: ["3.50", "", ""] },
        { label: "Cheese $ .25", value: ["", "", ""] }
      ]
    }
  ]
}
export default BreakfastMenuData;