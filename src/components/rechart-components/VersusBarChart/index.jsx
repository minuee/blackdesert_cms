import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList } from "recharts";

const data = [
  {
    name: "Page A",
    pc: 10,
    mobile: 40,
  },
];

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value, message, color } = props;

  const radius = 10;

  console.log({ props });

  return (
    <g>
      {/* <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" /> */}
      <text
        x={x + width / 2}
        y={y + height / 2}
        fill={color}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {`${message} ${((value / 1725) * 100).toFixed(0)}%`}
        {/* {value} */}
      </text>
      <div>hihi</div>
    </g>
  );
};

const VersusBarChart = () => {
  return (
    <BarChart
      width={600}
      height={100}
      data={data}
      // margin={{
      //   top: 20
      //   // right: 30,
      //   // left: 20,
      //   // bottom: 5
      // }}
      // layout="vertical"

      layout="vertical"
      barCategoryGap={1}
    >
      <XAxis type="number" hide />
      <YAxis
        type="category"
        width={150}
        // padding={{ left: 20 }}
        dataKey="name"
        hide
      />
      {/* <Tooltip /> */}
      {/* <Legend /> */}
      <Bar
        dataKey="pc"
        stackId="a"
        fill="#FFD344"
        radius={[15, 0, 0, 15]}
        label={(props) => {
          return renderCustomizedLabel({
            ...props,
            message: "PC & Console",
            color: "#333333",
          });
        }}
      >
        {/* <LabelList dataKey="pv" content={renderCustomizedLabel} /> */}
      </Bar>
      <Bar
        dataKey="mobile"
        stackId="a"
        fill="#540AA8"
        radius={[0, 15, 15, 0]}
        label={(props) => {
          return renderCustomizedLabel({
            ...props,
            message: "Mobile",
            color: "white",
          });
        }}
      />
    </BarChart>
  );
};
export default VersusBarChart;
