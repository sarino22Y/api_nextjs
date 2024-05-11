"use client"

import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// https://dumbstockapi.com/stock?exchanges=NYSE

const url = "https://dumbstockapi.com/stock?exchanges=NYSE";

const Post = () => {
      const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const jsonData = await res.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <div>
          {posts.map((post: any) => (
            <p key={post.id}>{post.title}</p>
          ))}
        </div> */}
      <div>
        {loading ? (
          <SkeletonCard />
        ) : (
          <div className="w-[450px]">
            <ul>
              {data.slice(0, 10).map((item: any, index: number) => (
                <div key={index}>{item.name}</div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;

function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 w-full">
      {/* <Skeleton className="h-[125px] w-[250px] rounded-xl" /> */}
      <div className="space-y-2">
        {
            Array(10).fill(0).map((_, index) => (
                <Skeleton className="h-4 w-[450px]" key={index}/>
            ))
        }
      </div>
    </div>
  );
}


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