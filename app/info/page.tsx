import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./posts/Post";
import CreatePost from "./posts/CreatePost";
import { Skeleton } from "@/components/ui/skeleton";

const page = () => {
 
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <CreatePost />
      </div>
        <div>
        <Post />
        </div>
    </div>
  );
};

export default page;

