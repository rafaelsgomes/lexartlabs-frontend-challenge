"use client"

import {
  Search,
  CircleUserRound
} from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ListProductsTabs from "@/components/ListProductsTabs"
import { useEffect, useState } from "react"
import UserProductsDialog from "@/components/UserProductsDialog"
import { Drawer } from "@/components/ui/drawer"
import AccountSettingsDrawer, { User } from "@/components/AccountSettingsDrawer"

type Product = {
  id: string
  name: string
  description: string
  image_url: string
  user_id: string
  created_at: Date | string
  updated_at: Date | string
}

export const products: Product[] = [
  {
    id: "fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10",
    name: "Product 01",
    description: "Product description 01",
    image_url: "https://samsungbrshop.vtexassets.com/arquivos/ids/228354-600-auto?v=638411055391430000&width=600&height=auto&aspect=true",
    user_id: 'fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10',
    created_at: '2024-02-03T06:38:34.000Z',
    updated_at: '2024-04-03T09:28:04.000Z '
  },
  {
    id: "fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10",
    name: "Product 02",
    description: "Product description 01",
    image_url: "https://samsungbrshop.vtexassets.com/arquivos/ids/228354-600-auto?v=638411055391430000&width=600&height=auto&aspect=true",
    user_id: 'fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10',
    created_at: '2024-02-03T06:38:34.000Z',
    updated_at: '2024-04-03T09:28:04.000Z '
  },
  {
    id: "fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10",
    name: "Product 03",
    description: "Product description 01",
    image_url: "https://samsungbrshop.vtexassets.com/arquivos/ids/228354-600-auto?v=638411055391430000&width=600&height=auto&aspect=true",
    user_id: 'fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10',
    created_at: '2024-02-03T06:38:34.000Z',
    updated_at: '2024-04-03T09:28:04.000Z '
  },
  {
    id: "fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10",
    name: "Product 04",
    description: "Product description 01",
    image_url: "https://samsungbrshop.vtexassets.com/arquivos/ids/228354-600-auto?v=638411055391430000&width=600&height=auto&aspect=true",
    user_id: 'fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10',
    created_at: '2024-02-03T06:38:34.000Z',
    updated_at: '2024-04-03T09:28:04.000Z '
  },
  {
    id: "fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10",
    name: "Product 05",
    description: "Product description 01",
    image_url: "https://samsungbrshop.vtexassets.com/arquivos/ids/228354-600-auto?v=638411055391430000&width=600&height=auto&aspect=true",
    user_id: 'fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10',
    created_at: '2024-02-03T06:38:34.000Z',
    updated_at: '2024-04-03T09:28:04.000Z '
  },
  {
    id: "fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10",
    name: "Product 06",
    description: "Product description 01",
    image_url: "https://samsungbrshop.vtexassets.com/arquivos/ids/228354-600-auto?v=638411055391430000&width=600&height=auto&aspect=true",
    user_id: 'fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10',
    created_at: '2024-02-03T06:38:34.000Z',
    updated_at: '2024-04-03T09:28:04.000Z '
  },
  {
    id: "fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10",
    name: "Product 07",
    description: "Product description 01",
    image_url: "https://samsungbrshop.vtexassets.com/arquivos/ids/228354-600-auto?v=638411055391430000&width=600&height=auto&aspect=true",
    user_id: 'fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10',
    created_at: '2024-02-03T06:38:34.000Z',
    updated_at: '2024-04-03T09:28:04.000Z '
  },
  {
    id: "fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10",
    name: "Product 08",
    description: "Product description 01",
    image_url: "https://samsungbrshop.vtexassets.com/arquivos/ids/228354-600-auto?v=638411055391430000&width=600&height=auto&aspect=true",
    user_id: 'fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10',
    created_at: '2024-02-03T06:38:34.000Z',
    updated_at: '2024-04-03T09:28:04.000Z '
  },
  {
    id: "fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10",
    name: "Product 09",
    description: "Product description 01",
    image_url: "https://samsungbrshop.vtexassets.com/arquivos/ids/228354-600-auto?v=638411055391430000&width=600&height=auto&aspect=true",
    user_id: 'fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10',
    created_at: '2024-02-03T06:38:34.000Z',
    updated_at: '2024-04-03T09:28:04.000Z '
  },
  {
    id: "fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10",
    name: "Product 10",
    description: "Product description 01",
    image_url: "https://samsungbrshop.vtexassets.com/arquivos/ids/228354-600-auto?v=638411055391430000&width=600&height=auto&aspect=true",
    user_id: 'fa9fb2f0-4d3d-48a3-bd79-a9750bcc8d10',
    created_at: '2024-02-03T06:38:34.000Z',
    updated_at: '2024-04-03T09:28:04.000Z '
  },
]
export const user: User = {
  email: 'test@email.com',
  name: 'test'
}

const Cards: React.FC = () => {
  return (
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <span className="text-2xl font-bold">Products Manager</span>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <CircleUserRound className="w-full h-full" color="#6e6e6e" strokeWidth={1.25}/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="grid h-full">
                <AccountSettingsDrawer user={user}/>
                <UserProductsDialog />
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {ListProductsTabs(products, 'listProducts')}
        </main>
      </div>
    </div>
  )
}

export default Cards