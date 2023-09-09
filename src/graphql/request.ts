import request, { RequestDocument } from "graphql-request";
import { API_URL } from "../../constants";
import { toast } from "react-hot-toast";

export async function makeRequest(
  query: RequestDocument,
  body: any,
) {
  try {
    const data = await request(
      API_URL,
      query,
      body
    );
    return data;
  } catch (error: any) {
    const errormsg = error.response?.errors[0]?.message;
    ClassifyError(errormsg)
    return null;
  }
}

function ClassifyError(msg: any) {
  switch (msg) {
    case ErrorMsgs.ErrWrongToken:
      toast.error("Please login to continue");
      break;
    case ErrorMsgs.ErrUserNotFound:
      toast.error("Please create an account to continue");
      break;
    case ErrorMsgs.ErrDepositWait:
      toast.success("Your deposit is being processed")
      break
    case undefined || null || "":
      toast.error("network error");
      break
    default:
      toast.error(msg);
      break;
  }
}

var ErrorMsgs = {
  ErrWrongCreds: "invalid phone or password",
  ErrWrongToken: "invalid token",
  ErrUserNotFound: "user not found",
  ErrUnverified: "user not verified",
  ErrDepositWait: "your deposit is being processed"
}