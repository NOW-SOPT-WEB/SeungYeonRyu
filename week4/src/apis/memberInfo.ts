import { serverAxios } from "./axios";

/** 회원 정보 */
export const memberInfo = async (memberId: number) => {
  try {
    const res = await serverAxios.get("/member/info", {
      headers: {
        memberId: memberId,
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
