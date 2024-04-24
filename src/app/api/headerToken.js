import { getServerSession } from "next-auth";
// import { authOption } from "./auth/[...nextauth]/route";
import { authOption } from "./auth/[...nextauth]/route";

export const headerToken = async () => {

  const session = await getServerSession(authOption);
  console.log("Session: ", session)
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${session?.user?.token}`,
  };
};
