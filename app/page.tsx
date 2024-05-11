"use client";

import { Button } from "@/components/ui/button";
import DialogUtils from "@/src/features/utils/DialogUtils";
import CalendarUtils from "@/src/features/utils/CalendarUtils";
import { CardWithForm } from "@/src/features/utils/cardWithForm";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center">WELCOME</h1>
      <main className="flex min-h-screen flex-col items-start justify-space-evenly p-5">
        <div className="flex py-4">
          <div className="py-2 mx-6">
            <DialogUtils />
          </div>
          <div className="py-2 mx-6">
            <CalendarUtils />
          </div>
          <div className="py-2 mx-6">
            <CardWithForm />
          </div>
          <div className="py-2 mx-6">
            <Button asChild>
              <Link href="/cv/0">Aller vers votre CV</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
