import { Button } from "@material-ui/core";
import CustomizedTypography from "components/CustomizedTypography";
import { setDate } from "date-fns/esm";
import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Label } from "recharts";
import { intlFormat } from "date-fns";

let defaultData = [
  { language: "Group A", each_count: 14 },
  { language: "Group B", each_count: 9 },
  { language: "Group C", each_count: 8 },
  { language: "Group D", each_count: 3 },
  { language: "Group D", each_count: 18 },
  { language: "Group D", each_count: 12 },
  { language: "Group D", each_count: 19 },
  { language: "Group D", each_count: 17 },
];
// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = (props) => {
  const { cx, cy, midAngle, outerRadius, percent } = props;
  const radius = outerRadius + 30;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      <text
        x={x}
        y={y}
        // fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </g>
  );
};

const renderCenterLabel = (props) => {
  const { totalCount } = props;
  const thousandSeparatorNumber = new Intl.NumberFormat().format(totalCount);

  return (
    <g>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy={12}
        font-size="26"
        fontWeight={500}
        // fill="#FFD344"
      >
        {thousandSeparatorNumber}
      </text>
    </g>
  );
};

const BasicPieChart = ({ apiData, COLORS, totalCount }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let tempData = JSON.parse(JSON.stringify(apiData));
    tempData.map((x) => {
      delete x.percent;
    });

    setData([...data].concat(tempData));
  }, [apiData]);

  return (
    <>
      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <PieChart
          // width={340} height={340}
          >
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="70%"
              // fill="#8884d8"
              nameKey="language"
              dataKey="each_count"
              label={renderCustomizedLabel}
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}

              <Label
                position="center"
                content={(props) => {
                  return renderCenterLabel({ ...props, totalCount: totalCount });
                }}
              />
            </Pie>

            {/* <Legend layout="vertical" align="right" verticalAlign="middle" /> */}
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default BasicPieChart;
