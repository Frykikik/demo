import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import NoPage from "../pages/NoPage";

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        {/* 将 Header 放置在页面中 */}
        <Layout />

        {/* 使用 Outlet 渲染子路由内容到 main 的位置 */}
      
          <Outlet />
       

        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}