import React from "react";
import Link from "next/link";

const LinkNotFound = () => {
  return (
    <div>
      <h1>404 | Link Not Found</h1>
      <Link href="/">
        <p>Go Home</p>
      </Link>
    </div>
  );
};

export default LinkNotFound;
