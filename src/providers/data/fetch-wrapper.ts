import { GraphQLFormattedError } from "graphql";

// Type 
type Error = {
  message: string;
  statusCode: string;
};

// Custom fetch function
const customFetch = async (url: string, options: RequestInit) => {
  // AccessToken from LocalStorage
  const accessToken = localStorage.getItem("access_token");

  const headers = options.headers as Record<string, string>;

  return await fetch(url, {
    ...options,
    headers: {
      ...headers,
      Authorization: headers?.Authorization || `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Apollo-Require-Preflight": "true",
    },
  });
};

const getGraphErrors = (body: Record<"errors", GraphQLFormattedError[] | undefined>): Error | null => {
  if(!body) {
    return {
      message: "Unknown error",
      statusCode: "INTERNAL_SERVER_ERROR"
    }
  }

  

  return null;
};

export const fetchWrapper = async (url: string, options: RequestInit) => {
  
  const response = await customFetch(url, options);

  const responseClone = response.clone();
  const body = await responseClone.json();
  
  const error = getGraphErrors(body);

  if(error) {
    throw error;
  }

  return response;
};
