import { Separator } from "@/components/ui/separator";
import AdminForm from "./admin-form";

export default function SettingsProfilePage() {
  return (
    <div className='space-y-6 max-w-2xl'>
      <div>
        <h3 className='text-lg font-medium'>Profile Admin</h3>
        <p className='text-sm text-muted-foreground'>
          Voici comment les autres vous verront sur le site en tant
          qu&apos;administrateur.
        </p>
      </div>
      <Separator />
      <AdminForm />
    </div>
  );
}
