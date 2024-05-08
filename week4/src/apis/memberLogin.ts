import { LoginType } from "../types";
import { serverAxios } from "./axios";

/** 로그인 */
export const memberLogin = async (props: LoginType) => {
  try {
    const res = await serverAxios.post("/member/login", props);
    return res.data.response.data;
  } catch (error) {
    if (error) {
      throw error;
    }
  }
};
