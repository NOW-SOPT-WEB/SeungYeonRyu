import { serverAxios } from "./axios";
type Props = {
  authenticationId: string;
  password: string;
  nickname: string;
  phone: string;
};
/** 회원가입 */
export const memberJoin = async (props: Props) => {
  const data = {
    authenticationId: props.authenticationId,
    password: props.password,
    nickname: props.nickname,
    phone: props.phone,
  };
  try {
    const res = await serverAxios.post("/member/join", data);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
