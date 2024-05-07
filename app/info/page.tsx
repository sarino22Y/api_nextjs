"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./posts/Post";
import CreatePost from "./posts/CreatePost";
import { Skeleton } from "@/components/ui/skeleton";

// https://dumbstockapi.com/stock?exchanges=NYSE

const url = "https://dumbstockapi.com/stock?exchanges=NYSE";

const page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // Nettoyage au demontage du composant
    };
  });

  const LoandingComponent = () => {
    return (
      <div className="w-[288px] animate-pulse rounded shadow-xl border-[1px]">
        <div className="bg-gray-800/20 rounded w-full h-[168px]"></div>
        <div className="p-4 flex flex-col gap-4">
        <div className="bg-gray-800/20 rounded h-4 w-[90%]"></div>
        <section className="flex flex-col gap-3">
          <div>
            <div className="bg-gray-800/20 rounded h-4 w-16"></div>
            <div className="bg-gray-800/20 rounded h-4 w-16"></div>
          </div>
          <div>
            <div className="bg-gray-800/20 rounded h-4 w-16"></div>
            <div className="bg-gray-800/20 rounded h-4 w-16"></div>
          </div>
          <div>
            <div className="bg-gray-800/20 rounded h-4 w-16"></div>
            <div className="bg-gray-800/20 rounded h-4 w-16"></div>
          </div>
        </section>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <CreatePost />
      </div>
      {loading ? (
        Array(2)
        .fill(null)
        .map((d, i) => 
          <div className="w-[450px]">
            <LoandingComponent key={i}/>
            </div>
      )        
      ) : data.length <= 0 ? (
        <h2>VOUS N'ETES PAS CONNECTE</h2>
      ) : (
        <div className="w-[450px]">
          <ul>
            {data &&
              data.slice(0, 10).map((item: any) => (
                <li key={item.ticker}>
                  {item.ticker} - {item.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default page;
