import Head from "next/head";
import React from "react";

const Home = () => {
  return (
    <>
      <Head>
        <title>Linkz Asia - Home Page</title>
      </Head>
      <div className="p-4">
        <div className="navbar bg-base-100 rounded-md">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Home Pages</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
