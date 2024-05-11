"use client"

import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

const DialogUtils = () => {
  return (
    <div>
        
      <Dialog>
        <DialogTrigger asChild>
          <Button>Dialog</Button>
        </DialogTrigger>
        <DialogContent className="p-0">
          <DialogHeader className="p-4 bg-zinc-300">
            <DialogTitle>Titre de dialog</DialogTitle>
          </DialogHeader>
          <p className="p-4 pt-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            temporibus facilis eveniet sapiente ab, quae dolorem quaerat
            exercitationem eius deleniti maxime architecto omnis atque dolor
            praesentium iusto rerum numquam tenetur.
          </p>
          <DialogFooter className="p-4">
            <DialogClose asChild>
              <Button variant="outline">Fermer</Button>
            </DialogClose>
            <Button variant="destructive">Supprimer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DialogUtils