import { serverAxios } from "./axios";
type Props = {
  previousPassword: string;
  newPassword: string;
  newPasswordVerification: string;
};
/** 비밀번호 변경 */
export const memberChangePwd = async (props: Props) => {
  const data = {
    previousPassword: props.previousPassword,
    newPassword: props.newPassword,
    newPasswordVerification: props.newPasswordVerification,
  };
  try {
    const res = await serverAxios.patch("/member/password", data);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
