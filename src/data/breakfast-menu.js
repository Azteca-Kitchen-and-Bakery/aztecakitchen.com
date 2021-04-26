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
        { label: "Chorizo", value: ["6.25", "5.95", "7.75"] },
        { label: "Machaca", value: ["6.25", "5.95", "7.75"] },
        { label: "Eggs", value: ["6.00", "5.95", "7.75"] }
      ]
    },
    { type: "subtitle", value: "Eggs" },
    {
      type: "columns",
      value: [
        { label: "Chorizo", value: ["6.25", "5.95", "7.75"] },
        { label: "Machaca", value: ["6.25", "5.95", "7.75"] },
        { label: "Rancheros", value: ["6.25", "5.95", "7.75"] },
        { label: "Ham", value: ["6.25", "5.95", "7.75"] },
        { label: "Bacon", value: ["6.25", "5.95", "7.75"] },
        { label: "Asada", value: ["7.75", "", "8.25"] }
      ]
    },
    { type: "subtitle", value: "Omlette" },
    {
      type: "columns",
      value: [
        { label: "Cheese", value: ["", "", "8.00"] },
        { label: "Machaca", value: ["", "", "8.00"] },
        { label: "Eggs", value: ["", "", "8.00"] }
      ]
    },
    { type: "divide", value: "" },
    {
      type: "columns",
      value: [
        { label: "Burros Chicos (Small)<br/>Choose 2 items only", value: ["4.00", "", ""] },
        { label: "Cheese", value: ["1.00", "", ""] }
      ]
    }
  ]
}
export default BreakfastMenuData;