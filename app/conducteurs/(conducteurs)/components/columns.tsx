"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { labels, marques, statuses } from "../data/data";
import { Conducteur } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

// generate labels conditionally

function generateLabelSpan(label: string) {
  switch (label) {
    case "Occupé":
      return (
        <span className='bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300'>
          {label}
        </span>
      );
    case "Disponible":
      return (
        <span className='bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400'>
          {label}
        </span>
      );
    case "Hors service":
      return (
        <span className='bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500'>
          {label}
        </span>
      );
    default:
      return ``;
  }
}

export const columns: ColumnDef<Conducteur>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        // className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        // className='traslate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "CIN",
    header: ({ column }) => <DataTableColumnHeader column={column} title='Conducteur' />,
    cell: ({ row }) => <div className='w-[80px]'>{row.getValue("CIN")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Nom et Prénom",
    header: ({ column }) => <DataTableColumnHeader column={column} title='Nom et Prénom' />,
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label);

      return (
        <div className='flex space-x-2'>
          <span className='max-w-[500px] truncate font-medium'>{row.getValue("Nom et Prénom")}</span>
          {/* {label && <Badge variant='outline'>{label.label}</Badge>} */}
          {/* colored badge because why not */}
          {label && generateLabelSpan(label.label)}
        </div>
      );
    },
  },
  // {
  //   accessorKey: "status",
  //   header: ({ column }) => <DataTableColumnHeader column={column} title='Status' />,
  //   cell: ({ row }) => {
  //     const status = statuses.find((status) => status.value === row.getValue("status"));
  //     if (!status) {
  //       return null;
  //     }

  //     return (
  //       <div className='flex w-[100px] items-center'>
  //         {status.icon && <status.icon className='mr-2 h-4 w-4 text-muted-foreground' />}
  //         <span>{status.label}</span>
  //       </div>
  //     );
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id));
  //   },
  // },
  {
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title='Status' />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label);

      return (
        <div className='flex space-x-2'>
          {/* {label && <Badge variant='outline'>{label.label}</Badge>} */}
          <span className='max-w-[500px] truncate font-medium'>{row.getValue("status")}</span>
        </div>
      );
    },
  },
  // {
  //   accessorKey: "Marque de la voiture",
  //   header: ({ column }) => <DataTableColumnHeader column={column} title='Marque de la voiture' />,
  //   cell: ({ row }) => {
  //     const marque = marques.find((marque) => marque.value === row.getValue("marque"));

  //     if (!marque) {
  //       return null;
  //     }

  //     return (
  //       <div className='flex items-center'>
  //         {marque.icon && <marque.icon className='mr-2 h-4 w-4 text-muted-foreground' />}
  //         <span>{marque.label}</span>
  //       </div>
  //     );
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id));
  //   },
  // },
  {
    accessorKey: "Marque de la voiture",
    header: ({ column }) => <DataTableColumnHeader column={column} title='Marque de la voiture' />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label);

      return (
        <div className='flex space-x-2'>
          {/* {label && <Badge variant='outline'>{label.label}</Badge>} */}
          <span className='max-w-[500px] truncate font-medium'>{row.getValue("Marque de la voiture")}</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
