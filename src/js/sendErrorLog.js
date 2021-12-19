import { Analytics } from "aws-amplify";

const sendErrorLog = (fileName, functionName, error, state) => {
  const occurr_at = new Date().toISOString();
  console.log({
    occurr_at: occurr_at,
    fileName: fileName,
    error_msg: functionName,
    error: error,
    state: state,
  });

  try {
    Analytics.record(
      {
        data: {
          occurr_at: occurr_at,
          fileName: fileName,
          error_msg: functionName,
          error: error,
          state: state,
        },
        streamName: "bde-dev-data",
      },
      "AWSKinesisFirehose"
    );
  } catch (error) {
    console.log({ error });
  }
};

export default sendErrorLog;
