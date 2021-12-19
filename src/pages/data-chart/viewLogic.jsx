import React, { useEffect, useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// apiObject
import { apiObject } from "api";
import { Storage } from "@psyrenpark/storage";
import { v4 as uuidv4 } from "uuid";

// hooks
import useLoadingFunction from "hooks/useLoadingFunction";

export const useViewLogic = () => {
  // const reducer = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const loadingFunction = useLoadingFunction();

  const getStatisticsAll = async () => {
    try {
      let responseGetStatisticsAll = await apiObject.getStatisticsAll({}, loadingFunction);

      console.log({ responseGetStatisticsAll });

      dispatch({
        type: "GET_STATISTICS",
        payload: {
          data: {
            ...responseGetStatisticsAll,
          },
        },
      });
    } catch (error) {
      console.log({ error });
    }
  };

  return {
    getStatisticsAll,
  };
};
