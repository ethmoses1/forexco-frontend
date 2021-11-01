import React, { FC, createContext } from "react";
import { useQuery, gql } from "@apollo/client";

type dataType = {
  data: {
    getPosts: [{
    id: string;
    title: string;
    cover: string;
    body: string;
    authorname: string;
    authorcountry: string;
    catagoryname: string;
    username: string;
    image: string;
    createdAt: string;
  }]};
};

export const Context = createContext<dataType>({} as dataType);

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      title
      cover
      body
      authorname
      authorcountry
      image
      createdAt
    }
  }
`;

const Store: FC = ({ children }) => {
  const { data } = useQuery(FETCH_POSTS_QUERY);

  return <Context.Provider value={{ data }}>{children}</Context.Provider>;
};
export default Store;