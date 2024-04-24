import { headerToken } from "@/app/api/headerToken";



export const getAllWorkspaceService = async () => {
  const header = await headerToken();
  console.log("Teses: ",header);

  const res = await fetch('http://110.74.194.123:8989/api/todo/v1/workspaces', {
    // headers: header,
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2huLTJAbWFpbC5jb20iLCJpYXQiOjE3MTM5NTU1NTYsImV4cCI6MTcxMzk3MzU1Nn0.3xQyvD0ccBtwAFp2HnRVydRsjaDkwadFVHnufDcsOeo'
    },
    next: { tags: ["workspace"] },
  });

  if (!res.ok) {
    console.error("Error fetching workspaces: ", res.statusText);
    return null;
  }

  const data = await res.json();
  return data;
};

export const addWorkspace = async (workspaceDetails) => {
  console.log("workspace detail name : ", workspaceDetails);
  try {
    const { workspaceName } = workspaceDetails;
    const header = await headerToken();
    console.log("header in service ",header);

    const res = await fetch(
      url,
      {
        method: "POST",
        body: JSON.stringify(workspaceName),
        headers: header,
      }
    );

    const data = await res.json();
    console.log("data in addworkspace service ", data);
    return data; 
  } catch (err) {
    console.log("error in service add :", err);
  }
};

