import { isAxiosError } from "axios";
import { ChangePwdType } from "../types";
import { serverAxios } from "./axios";

/** 비밀번호 변경 */
export const memberChangePwd = async (
  props: ChangePwdType,
  memberId: string
) => {
  try {
    const res = await serverAxios.patch("/member/password", props, {
      headers: {
        memberId: memberId,
      },
    });
    return res;
  } catch (error) {
    if (isAxiosError(error)) alert(error.response?.data.message);
    else {
      console.log(error, "unknown error: memberChangePwd");
    }
  }
};
