import React, { createContext, useEffect, useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import PageNotFound from "../pages/404";
import OneUserInfo from "../pages/OneUserInfo";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/Services";

export const userContext = createContext();
function router() {
  const [userInfo, setUserInfo] = useState([]);
  const { data, isLoading, error } = useQuery(["getUser"], getUser);
  useEffect(() => {
    setUserInfo(data?.data.users);
  }, [data]);
  return (
    <userContext.Provider value={{ data, isLoading, userInfo }}>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/user-info/:id" element={<OneUserInfo />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </userContext.Provider>
  );
}

export default router;
