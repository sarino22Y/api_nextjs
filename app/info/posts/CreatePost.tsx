"use client"

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const CreatePost = () => {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  const {register, handleSubmit, formState: {errors} } = useForm(); // formState: {errors} : Gestion des erreurs

  const [data, setData] = useState("");

  const onSubmit = (dataForm:any) => {
    setData(JSON.stringify(dataForm));
  };

//   useEffect(() => {
//       setData("")
//   }, [])

//   useEffect(() => {
//     if (title.length > 0 && content.length > 0) {      
//       setData(`Titre : ${title} Post : ${content}`)
//     } else {
//       setData("")
//     }
// }, [content, title])

  return (
    <div className="bg-slate-50 rounded-3xl py-6  h-[400px] w-[450px] flex flex-col text-slate-800">
      <h1 className="text-3xl text-center">Nouveau post</h1>
      <div className="mx-8 mt-4 mb-6">
        <form className="flex flex-col gap-4 " onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("title", {
              required: true,
              // patern : exemple
              // maxLength: 4, TODO : Ne marche pas pour le moment.
            })}
            placeholder="Titre"
          />
          {errors.title && errors.title.type === "required" && <p className="text-red-500">Ce champ est obligatoire</p>}
          <Textarea
           {...register("content", {
            required: true,
          })}
            placeholder="Post"/>
            {errors.content && errors.content.type === "required" && <p className="text-red-500">Ce champ est obligatoire</p>}
            <p>{data}</p>

          <button className="bg-slate-50 rounded-full p-1 border border-slate-400 text-slate-400 hover:text-slate-500 text-base hover:ring-0 hover:ring-slate-100 hover:border-slate-500">
            Créer
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
