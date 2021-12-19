import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import { useSelector } from "react-redux";

// const data = [
//   {
//     correct_count: 10,
//     quiz: "Quiz 2",
//     quiz_number: 1,
//     timeout_count: 5,
//     wrong_count: 2,
//   },
//   {
//     correct_count: 10,
//     quiz: "Quiz 3",
//     quiz_number: 1,
//     timeout_count: 5,
//     wrong_count: 2,
//   },
//   {
//     correct_count: 10,
//     quiz: "Quiz 4",
//     quiz_number: 1,
//     timeout_count: 5,
//     wrong_count: 2,
//   },
//   {
//     correct_count: 10,
//     quiz: "Quiz ",
//     quiz_number: 1,
//     timeout_count: 5,
//     wrong_count: 2,
//   },
// ];

const BasicBarChart = ({ apiData }) => {
  const [data, setData] = useState([]);

  // const renderCustomizedLabel = (props) => {
  //   const { x, y, width, value, index } = props;

  //   const radius = 10;

  //   let labelKey = "";

  //   switch (Math.floor(index / 3)) {
  //     case 0:
  //       labelKey = "correct_count";
  //       break;

  //     case 1:
  //       labelKey = "timeout_count";
  //       break;

  //     case 2:
  //       labelKey = "wrong_count";
  //       break;

  //     default:
  //       break;
  //   }
  //   console.log(labelKey, data[Math.floor(index / 3)]);

  //   // console.log(labelKey);
  //   // console.log(Math.floor(index / 3));

  //   // console.log(data[Math.floor(index / 3)].total_count);
  //   // console.log(data[Math.floor(index / 3)][labelKey]);

  //   return (
  //     <g>
  //       {/* <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" /> */}
  //       <text
  //         x={x + width / 2}
  //         y={y - radius * 3}
  //         // fill="#fff"
  //         textAnchor="middle"
  //         dominantBaseline="middle"
  //       >
  //         {`${Math.floor(
  //           (data[Math.floor(index / 3)][labelKey] / data[Math.floor(index / 3)].total_count) * 100
  //         )}%`}
  //       </text>
  //       <text
  //         x={x + width / 2}
  //         y={y - radius}
  //         // fill="#fff"
  //         textAnchor="middle"
  //         dominantBaseline="middle"
  //       >
  //         {value}
  //       </text>
  //     </g>
  //   );
  // };

  const renderValueAndRateLabel = (props) => {
    const { x, y, width, value, index } = props;

    const radius = 10;

    // console.log(Math.floor(data[index].correct_rate));
    const correct_rate = Math.floor(data[index].correct_rate);

    return (
      <g>
        {/* <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" /> */}

        <text
          x={x + width / 2}
          y={y - radius * 3}
          textAnchor="middle"
          dominantBaseline="middle"
          font-size="20"
          fontWeight={500}
          fill="#FFD344"
        >
          {`${correct_rate}%`}
        </text>
        <text
          x={x + width / 2}
          y={y - radius}
          // fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {new Intl.NumberFormat().format(value)}
        </text>
      </g>
    );
  };

  const renderValueLabel = (props) => {
    const { x, y, width, value, index } = props;
    // console.log({ props });

    const radius = 10;

    return (
      <g>
        {/* <defs>
          <path id="text-line" d="M100,350 L300,250 " />
        </defs> */}

        <text
          x={x + width / 2}
          y={y - radius}
          // fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {new Intl.NumberFormat().format(value)}
          {/* <textPath xlinkHref="#text-line">
            SVG text can use the textPath element and path data to draw text that flows along the
            path.
          </textPath> */}
        </text>
      </g>
    );
  };

  useEffect(() => {
    // console.log({ apiData });
    let tempData = JSON.parse(JSON.stringify(apiData));
    // tempData.map((x) => {
    //   delete x.percent;
    // });
    const numberdTempData = tempData.map((x) => {
      let numberedItem = {};
      Object.keys(x)
        .filter((x) => x !== "quiz")
        .map((y) => {
          numberedItem = {
            ...numberedItem,
            [y]: Number(x[y]),
          };
          return;
        });
      return {
        ...numberedItem,
        quiz: x.quiz,
        total_count:
          numberedItem.correct_count + numberedItem.timeout_count + numberedItem.wrong_count,
      };
    });

    setData([...data].concat(numberdTempData));
  }, [apiData]);

  useEffect(() => {
    console.log({ data });
  }, [data]);

  return (
    <div style={{ width: "100%", height: 360 }}>
      <ResponsiveContainer>
        <BarChart
          width={"100%"}
          height={"100%"}
          data={data}
          // data={[...data].map((x) => {
          //   // console.log({ x });
          //   return {
          //     correct_count: x.correct_count,
          //     wrong_count: x.wrong_count,
          //     timeout_count: x.timeout_count,
          //   };
          // })}
          margin={{ top: 50 }}
          barCategoryGap={25}
        >
          <XAxis
            dataKey="quiz"
            axisLine={{ strokeWidth: "1px", strokeOpacity: 0.3 }}
            tickLine={false}
          />
          <YAxis type="number" domain={[0, "dataMax"]} hide />
          <Bar
            dataKey="correct_count"
            fill="#FFD344"
            minPointSize={1}
            // barSize={10}
          >
            <LabelList dataKey="correct_count" content={renderValueAndRateLabel} />
          </Bar>
          <Bar dataKey="wrong_count" fill="#999999" minPointSize={1}>
            <LabelList dataKey="wrong_count" content={renderValueLabel} angle="45" />
          </Bar>
          <Bar dataKey="timeout_count" fill="#540AA8" minPointSize={1}>
            <LabelList dataKey="timeout_count" content={renderValueLabel} angle="45" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default BasicBarChart;
