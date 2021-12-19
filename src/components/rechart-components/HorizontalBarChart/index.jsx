import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";

// const data = [
//   {
//     name: "compare",
//     pc: 1724,
//     mobile: 1,
//   },
// ];

const renderCustomizedLabelinner = (props) => {
  const { x, y, width, height, value, message, color } = props;

  const radius = 10;

  // console.log({ props });

  return (
    <g>
      {/* <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" /> */}
      <text
        x={x + width / 2}
        y={y + height / 2}
        fill={color}
        textAnchor="end"
        dominantBaseline="middle"
      >
        {/* {`${message} ${((value / 1725) * 100).toFixed(0)}%`} */}
        {`${((value / 1725) * 100).toFixed(0)}%`}
      </text>
    </g>
  );
};

const renderLeftMeassageRightPercentage = (props) => {
  const { x, y, width, height, value, message, color, total_count } = props;
  // console.log(props);
  // console.log(`value / total_count: ${value / total_count} `);

  return (
    <g>
      {/* <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" /> */}
      <text
        x={x - 10}
        y={y + height / 2 + 1}
        // fill="#fff"
        font-size="18"
        textAnchor="end"
        dominantBaseline="middle"
      >
        {message}
      </text>
      <text
        x={x + width + 48}
        y={y + height / 2 + 2}
        fill={color}
        textAnchor="end"
        dominantBaseline="middle"
      >
        {/* {`${message} ${((value / 1725) * 100).toFixed(0)}%`} */}
        {/* {`${((value / 1725) * 100).toFixed(0)}%`} */}
        {`${((value / total_count) * 100).toFixed(1)}%`}
        {/* {`${
          (value / total_count) * 100 > 1
            ? Math.round((value / total_count) * 100)
            : Math.ceil((value / total_count) * 100)
        }%`} */}
      </text>
    </g>
  );
};

const HorizontalBarChart = ({ apiData, COLORS }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let tempData = JSON.parse(JSON.stringify(apiData));
    if (Object.keys(tempData).length > 0) {
      setData([...data].concat(tempData));
    }
  }, [apiData]);

  return (
    <div style={{ width: "100%", height: 100 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            // top: 20
            right: 40,
            left: 120,
            // bottom: 5
          }}
          layout="vertical"
          // barCategoryGap={20}
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
            dataKey="pc_console_count"
            fill={"#FFD344"}
            // radius={[15, 15, 15, 15]}
            // radius={[5, 5, 5, 5]}
            label={(props) => {
              return renderLeftMeassageRightPercentage({
                ...props,
                total_count: data[0].total_count,
                message: "PC & Console",
              });
            }}
            minPointSize={1}
            // barSize={30}
          >
            {/* <LabelList dataKey="pv" content={renderCustomizedLabel} /> */}
          </Bar>
          <Bar
            dataKey="mobile_count"
            fill={"#540AA8"}
            // radius={[15, 15, 15, 15]}
            // radius={[5, 5, 5, 5]}
            label={(props) => {
              return renderLeftMeassageRightPercentage({
                ...props,
                total_count: data[0].total_count,
                message: "Mobile",
              });
            }}
            minPointSize={1}
            // barSize={30}
          >
            {/* <LabelList dataKey="pv" content={renderCustomizedLabel} /> */}
          </Bar>
          {/* <Bar
        dataKey="mobile"
        // stackId="a"
        fill="#540AA8"
        radius={[0, 15, 15, 0]}
        label={(props) => {
          return renderCustomizedLabel({
            ...props,
            message: "Mobile",
            color: "white",
          });
        }}
      /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default HorizontalBarChart;
