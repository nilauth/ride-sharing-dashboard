import { z } from "zod";

export const conducteurSchema = z.object({
  CIN: z.string(), 
  "Nom et Prénom": z.string(), 
  status: z.string(),
  label: z.string(), 
  "Marque de la voiture": z.string(),
});

export type Conducteur = z.infer<typeof conducteurSchema>;
