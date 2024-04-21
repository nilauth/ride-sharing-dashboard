"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
// import { User } from "@/constants/data";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";
import { Conducteur } from "@/constants/data";

interface ProductsClientProps {
  data: Conducteur[];
}

export const UserClient: React.FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className='flex items-start justify-between'>
        <Heading
          title={`Conducteurs (${data.length})`}
          description='Ici, vous trouverez la liste de tous les conducteurs. Vous pouvez effectuer des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer).'
        />
        <Button
          className='text-xs md:text-sm'
          onClick={() => router.push(`/dashboard/user/new`)}
        >
          <Plus className='mr-2 h-4 w-4' /> Ajouter conducteur
        </Button>
      </div>
      <Separator />
      <DataTable searchKey='name' columns={columns} data={data} />
    </>
  );
};
