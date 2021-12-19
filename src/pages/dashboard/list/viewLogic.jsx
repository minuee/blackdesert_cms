import React, { useEffect, useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// apiObject
import { apiObject } from "api";
import { Storage } from "@psyrenpark/storage";
import { v4 as uuidv4 } from "uuid";

// hooks
import useLoadingFunction from "hooks/useLoadingFunction";

export const useViewLogic = ({ reducer_key }) => {
  const reducer = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const loadingFunction = useLoadingFunction();

  const listCompany = async () => {
    let filter = {
      and: [
        {
          inst_dt: {
            between: [
              `${reducer[
                reducer_key
              ].list_params.filter_start_dt.toISOString()}`,
              `${reducer[reducer_key].list_params.filter_end_dt.toISOString()}`,
            ],
          },
        },
      ],
    };

    try {
      let responseListCompany = await apiObject.listCompany(
        {
          orderBy: { company_no: "ASC" },
          // page: customers.list_params.current_page,
          page: 1,
          limit: 10,
          filter: filter,
        },
        loadingFunction
      );
      console.log({ responseListCompany });

      const data = responseListCompany;

      dispatch({
        type: "LIST_ADVERTISER",
        payload: {
          data: {
            current_page: data.current_page,
            list_data: data.items,
            limit: data.limit,
            next_token: data.next_token,
            total_count: data.total_count,
            total_page: data.total_page,
          },
        },
      });
    } catch (error) {
      // alert(error);
      console.log({ error });
    }
  };

  const createCompany = async (params) => {
    let result = { statusCode: "none" };
    try {
      console.log({ params });
      let responseCreateCompany = await apiObject.createCompany(
        {
          ...params,
        },
        loadingFunction
      );
      console.log({ responseCreateCompany });
      listCompany();
      result = { ...result, statusCode: 200 };
      return result;
    } catch (error) {
      console.log({ error });
      result = {
        ...result,
        statusCode: error.response.data.statusCode,
        message: error.response.data.message,
      };
      return result;
      // if (error.response.data.statusCode == "406") {
      //   setError(Object.keys(data)[0], {
      //     type: "duplicated",
      //     message: `⚠️${error.response.data.message}`,
      //   });
      // }
    }
  };

  const deleteCompany = async (params) => {
    try {
      let responseDeleteCompany = await apiObject.deleteCompany(
        {
          ...params,
        },
        loadingFunction
      );
      console.log({ responseDeleteCompany });
      listCompany();
    } catch (error) {
      // alert(error);
      console.log({ error });
    }
  };

  return {
    listCompany,
    deleteCompany,
    createCompany,
  };
};
