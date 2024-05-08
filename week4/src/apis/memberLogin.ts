import { isAxiosError } from "axios";
import { LoginType } from "../types";
import { serverAxios } from "./axios";

/** 로그인 */
export const memberLogin = async (props: LoginType) => {
  try {
    const res = await serverAxios.post("/member/login", props);
    return res;
  } catch (error) {
    if (isAxiosError(error)) alert(error.response?.data.message);
    else {
      console.log(error, "unknown error: memberLogin");
    }
    return false;
  }
};
