import { Icons } from "@/components/icons";
import { NavItem, SidebarNavItem } from "@/types";
import { User } from "lucide-react";

export type Conducteur = {
  nom: string;
  prenom: string;
  cin: string;
  marqueVoiture: string;
};

export const conducteurs: Conducteur[] = [
  {
    nom: "ahmed",
    prenom: "mohammed",
    cin: "AB12345",
    marqueVoiture: "Renault",
  },
  {
    nom: "bouazza",
    prenom: "fatima",
    cin: "CD67890",
    marqueVoiture: "Peugeot",
  },
  {
    nom: "hassan",
    prenom: "karim",
    cin: "EF45678",
    marqueVoiture: "Dacia",
  },
  {
    nom: "el mansouri",
    prenom: "hicham",
    cin: "GH98765",
    marqueVoiture: "Toyota",
  },
  {
    nom: "kadiri",
    prenom: "laila",
    cin: "IJ23456",
    marqueVoiture: "Ford",
  },
  {
    nom: "ait benali",
    prenom: "ali",
    cin: "KL78901",
    marqueVoiture: "Nissan",
  },
  {
    nom: "tazi",
    prenom: "hafsa",
    cin: "MN34567",
    marqueVoiture: "Volkswagen",
  },
  {
    nom: "zerouali",
    prenom: "karima",
    cin: "OP89012",
    marqueVoiture: "Mercedes-Benz",
  },
  {
    nom: "cherkaoui",
    prenom: "nadia",
    cin: "QR56789",
    marqueVoiture: "BMW",
  },
  {
    nom: "el fassi",
    prenom: "abdelaziz",
    cin: "ST01234",
    marqueVoiture: "Hyundai",
  },
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

// export const navItems: NavItem[] = [
//   {
//     title: "Dashboard",
//     href: "/dashboard",
//     icon: "dashboard",
//     label: "Dashboard",
//   },
//   {
//     title: "User",
//     href: "/dashboard/user",
//     icon: "user",
//     label: "user",
//   },
//   {
//     title: "Employee",
//     href: "/dashboard/employee",
//     icon: "employee",
//     label: "employee",
//   },
//   {
//     title: "Profile",
//     href: "/dashboard/profile",
//     icon: "profile",
//     label: "profile",
//   },
//   {
//     title: "Kanban",
//     href: "/dashboard/kanban",
//     icon: "kanban",
//     label: "kanban",
//   },
//   {
//     title: "Login",
//     href: "/",
//     icon: "login",
//     label: "login",
//   },
// ];
