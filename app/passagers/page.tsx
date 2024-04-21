import { Separator } from "@/components/ui/separator";


export default function SettingsAppearancePage() {
  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>Passagers</h3>
        <p className='text-sm text-muted-foreground'>
          Ici, vous trouverez la liste de tous les passagers. Vous pouvez
          effectuer des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer).
        </p>
      </div>
      <Separator />
      <div>Form passagers</div>
    </div>
  );
}
