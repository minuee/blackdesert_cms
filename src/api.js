const { PanoramaFishEyeSharp } = require("@material-ui/icons");
const { Api } = require("@psyrenpark/api");
// const axios = require("axios");

const projectName = "bdeadmin";
const projectEnv = "dev";

const v1Api = `${projectName}-${projectEnv}-api-v1`;
const v1Cdn = `${projectName}-${projectEnv}-cdn-v1`;
const v1NoneAuth = `${projectName}-${projectEnv}-noneauth-v1`;
const v1Cms = `${projectName}-${projectEnv}-cms-v1`;

exports.apiObject = {
  getTest: () => {
    return Api.getAxios().get("https://www.google.com");
  },

  // ================= common =================
  // createImage: ({ image_type_code_id, image_file_path }, loadingCallback) => {
  //   var apiName = v1NoneAuth;
  //   var path = "/images";
  //   var myInit = {
  //     headers: {},
  //     queryStringParameters: {},
  //     body: {
  //       image_type_code_id,
  //       image_file_path,
  //     },
  //   };
  //   return Api.post(apiName, path, myInit, loadingCallback);
  // },

  // ================= accounts =================
  getAdminInfo: ({ noParam }, loadingCallback) => {
    var apiName = v1Api;
    var path = "/admins/my-info";
    var myInit = {
      headers: {},
      queryStringParameters: {},
    };
    return Api.get(apiName, path, myInit, loadingCallback);
  },

  // =======================================================
  // excel

  // getExcelFileUrl: (
  //   { orderBy, filter, campaign_no, excelColumns },
  //   loadingCallback
  // ) => {
  //   console.log({ excelColumns });
  //   var apiName = v1Cms;
  //   var path = `/reports/excel/${campaign_no}`;
  //   var myInit = {
  //     headers: {},
  //     queryStringParameters: {
  //       orderBy: JSON.stringify(orderBy),
  //       filter: JSON.stringify(filter),
  //       excelDataFormat: JSON.stringify(excelColumns),
  //     },
  //   };
  //   return Api.get(apiName, path, myInit, loadingCallback);
  // },

  // =======================================================
  // 사용페이지표기

  getCodeType: ({ locale }, loadingCallback) => {
    var apiName = v1Cdn;
    var path = "/code-types";
    var myInit = {
      headers: {},
      queryStringParameters: {},
    };
    return Api.get(apiName, path, myInit, loadingCallback);
  },

  putAdminInit: ({ uuid }, loadingCallback) => {
    var apiName = v1Api;
    var path = `/admins/init/${uuid}`;
    var myInit = {
      headers: {},
      queryStringParameters: {},
      body: {},
    };
    return Api.put(apiName, path, myInit, loadingCallback);
  },

  postEvent: ({ locale }, loadingCallback) => {
    var apiName = v1Cms;
    var path = `/events`;
    var myInit = {
      headers: {},
      queryStringParameters: {},
      body: {},
    };
    return Api.post(apiName, path, myInit, loadingCallback, null, 2);
  },

  openEvent: ({ locale }, loadingCallback) => {
    var apiName = v1Cms;
    var path = `/events`;
    var myInit = {
      headers: {},
      queryStringParameters: {},
      body: {
        is_open: true,
      },
    };
    return Api.put(apiName, path, myInit, loadingCallback, null, 2);
  },

  closeEvent: ({ locale }, loadingCallback) => {
    var apiName = v1Cms;
    var path = `/events`;
    var myInit = {
      headers: {},
      queryStringParameters: {},
      body: {
        is_open: false,
      },
    };
    return Api.put(apiName, path, myInit, loadingCallback, null, 2);
  },

  postQuizStatus: ({ quiz_status, quiz_data }, loadingCallback) => {
    var apiName = v1Cms;
    var path = `/quiz-status`;
    var myInit = {
      headers: {},
      queryStringParameters: {},
      body: {
        quiz_status,
        quiz_data,
      },
    };
    return Api.post(apiName, path, myInit, loadingCallback, null, 2);
  },

  // =======================================================
  // statistics

  getStatisticsAll: ({ locale }, loadingCallback) => {
    var apiName = v1Cms;
    var path = "/charts/all";
    var myInit = {
      headers: {},
      queryStringParameters: {},
      // body: {},
    };
    return Api.get(apiName, path, myInit, loadingCallback, null, 2);
  },
};
