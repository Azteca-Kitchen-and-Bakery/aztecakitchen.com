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
    { type: "subtitle", value: "Potatos" },
    {
      type: "columns",
      value: [
        { label: "Chorizo", value: ["4.75", "4.95", "6.50"] },
        { label: "Machaca", value: ["4.75", "4.95", "6.50"] },
        { label: "Eggs", value: ["4.75", "4.95", "6.50"] }
      ]
    },
    { type: "subtitle", value: "Eggs" },
    {
      type: "columns",
      value: [
        { label: "Chorizo", value: ["4.75", "4.95", "6.50"] },
        { label: "Machaca", value: ["4.75", "4.95", "6.50"] },
        { label: "Rancheros", value: ["4.75", "4.95", "6.50"] },
        { label: "Ham", value: ["4.75", "4.95", "6.50"] },
        { label: "Bacon", value: ["4.75", "4.95", "6.50"] },
        { label: "Asada", value: ["5.75", "", ""] }
      ]
    },
    { type: "subtitle", value: "Omlette" },
    {
      type: "columns",
      value: [
        { label: "Cheese", value: ["", "", "6.50"] },
        { label: "Machaca", value: ["", "", "6.50"] },
        { label: "Eggs", value: ["", "", "6.50"] }
      ]
    },
    { type: "divide", value: "" },
    {
      type: "columns",
      value: [
        { label: "Burros Chicos (Small)<br/>Choose 2 items only", value: ["3.00", "", ""] },
        { label: "Cheese $ .25", value: ["", "", ""] }
      ]
    }
  ]
}
export default BreakfastMenuData;