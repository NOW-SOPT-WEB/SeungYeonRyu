import { serverAxios } from "./axios";
type Props = {
  authenticationId: string;
  password: string;
};
/** 로그인 */
export const memberLogin = async (props: Props) => {
  const data = {
    authenticationId: props.authenticationId,
    password: props.password,
  };
  try {
    const res = await serverAxios.post("/member/login", data);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
