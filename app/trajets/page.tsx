import { Separator } from "@/components/ui/separator";

export default function SettingsNotificationsPage() {
  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>Trajets</h3>
        <p className='text-sm text-muted-foreground'>
          Ici, vous trouverez la liste de tous les les trajets créés par les
          conducteurs. Vous pouvez effectuer des opérations CRUD (Créer, Lire,
          Mettre à jour, Supprimer).
        </p>
      </div>
      <Separator />
      <div>Form trajets</div>
    </div>
  );
}
