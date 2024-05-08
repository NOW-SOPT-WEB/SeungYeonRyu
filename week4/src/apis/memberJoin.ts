import { isAxiosError } from "axios";
import { JoinType } from "../types";
import { serverAxios } from "./axios";

/** 회원가입 */
export const memberJoin = async (props: JoinType) => {
  try {
    const res = await serverAxios.post("/member/join", props);
    return res;
  } catch (error) {
    if (isAxiosError(error)) alert(error.response?.data.message);
    else {
      console.log(error, "unknown error: memberJoin");
    }
  }
};
