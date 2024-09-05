import { serverAxios } from "./axios";

/** 회원 정보 */
export const memberInfo = async (memberId: string) => {
  try {
    const res = await serverAxios.get("/member/info", {
      headers: {
        memberId: memberId,
      },
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
