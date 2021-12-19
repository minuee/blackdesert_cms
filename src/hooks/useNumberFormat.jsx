import React, { useRef } from "react";
import NumberFormat from "react-number-format";

// const NumberFormatComponent = () => {
//   const ref = useRef(null)
//   return
//       <NumberFormat
//         value={totalCount}
//         displayType={"text"}
//         thousandSeparator={true}
//         // suffix={"원"}
//       />
// }

export default function useNumberFormat({ value }) {
  const ref = useRef(null);
  const numberFormat = (
    <NumberFormat
      value={value}
      displayType={"text"}
      thousandSeparator={true}
      // suffix={"원"}
      ref={ref}
    />
  );

  return null;
}
