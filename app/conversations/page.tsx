"use client";
import React from "react";
import clsx from "clsx";
import useConversation from "../hooks/useConversation";
import EmptyState from "../components/EmptyState";
const Home = () => {
    const {isOpen}=useConversation();
  return (
    <div>
      <p></p>
    </div>
  );
};

export default Home;
