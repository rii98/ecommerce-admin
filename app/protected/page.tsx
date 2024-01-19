import { UserButton } from "@clerk/nextjs";
import React from "react";

const Protected = () => {
  return (
    <>
      <h1>This is the protected route</h1>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};

export default Protected;
