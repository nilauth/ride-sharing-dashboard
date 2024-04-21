import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import { z } from "zod";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { UserNav } from "./components/user-nav";
import { conducteurSchema } from "./data/schema";
// import { c } from "@/app/(conducteurs)/data/schema";
// import { conducteurs } from "@/constants/data";

export const metadata: Metadata = {
  title: "Liste des conducteurs",
  description: "",
};

// Simulate a database read for conducteurs.
async function getConducteurs() {
  const data = await fs.readFile(path.join(process.cwd(), "app/conducteurs/(conducteurs)/data/conducteurs.json"));

  const conducteurs = JSON.parse(data.toString());

  return z.array(conducteurSchema).parse(conducteurs);
}

export default async function ConducteurPage() {
  const conducteurs = await getConducteurs();

  return (
    <>
      <div className='md:hidden'>
        <Image
          src='/examples/conducteurs-light.png'
          width={1280}
          height={998}
          alt='Playground'
          className='block dark:hidden'
        />
        <Image
          src='/examples/conducteurs-dark.png'
          width={1280}
          height={998}
          alt='Playground'
          className='hidden dark:block'
        />
      </div>
      <div className='hidden h-full flex-1 flex-col py-8 md:flex mt-[-26px]'>
        <div className='flex items-center justify-between space-y-2'>
          {/* <div className='flex items-center space-x-2'>
            <UserNav />
          </div> */}
        </div>
        <DataTable data={conducteurs} columns={columns} />
      </div>
    </>
  );
}
