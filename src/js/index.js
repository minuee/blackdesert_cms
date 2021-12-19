// date-fns
import { format, formatISO9075, formatDuration, intervalToDuration } from "date-fns";

export const getDuration = (props) => {
  const { start, end } = props;

  const duration = intervalToDuration({
    start: start,
    end: end,
  });
  console.log({ duration });

  // const result = Object.keys(duration).map((x)=>{
  //     // switch (x) {
  //     //     case "value":

  //     //         break;

  //     //     default:
  //     //         break;
  //     // }
  //     return
  // })
  let result = formatDuration({ ...duration });
  console.log({ result });

  return result;
};
