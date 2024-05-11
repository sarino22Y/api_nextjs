import Link from "next/link";
import React from "react";
import { Button } from "react-day-picker";
import { buttonVariants } from "@/components/ui/button";

const CV = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center">
        <Link href="/cv/1" className="mx-4 hover:underline">Aller sur votre CV : 1 </Link> /
        <Link href="/cv/2" className="mx-4 hover:underline">Aller sur votre CV : 2 </Link> /
        <Link href="/cv/3" className="ml-4 hover:underline">Aller sur votre CV : 3 </Link>

        <Link href="/" className={buttonVariants({ variant: "outline" })}><span>{"<"}</span> Retour</Link>
      </div>
      <div>
        <h1 className="text-3xl font-bold underline text-center">CV {id}</h1>
      </div>
    </div>
  );
};

export default CV;
