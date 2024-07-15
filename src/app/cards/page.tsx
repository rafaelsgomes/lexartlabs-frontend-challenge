"use client"
import Link from "next/link"
import {
  MoreHorizontal,
  Search,
} from "lucide-react"

import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
} from "@/components/ui/tabs"
import { useState } from "react"
import EditDialog from "@/components/EditProductDialog"
import DeleteDialog from "@/components/DeleteProductDialog"
import CreateProductDialog from "@/components/CreateProductDialog"

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

const Cards: React.FC = () => {
  enum Dialogs {
    editDialog = 'editDialog',
    deleteDialog = 'deleteDialog',
  }
  const [dialog, setDialog] = useState('')

  return (
    <Link href={'/'}>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
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
                {/* <Image
                  src="/placeholder-user.jpg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                /> */}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <div className="ml-auto flex items-center gap-2">
              {CreateProductDialog()}
              </div>
            </div>
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Created at</TableHead>
                        <TableHead className="hidden md:table-cell">
                        Updated at
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map((product) => (
                        <TableRow key={product.id}>
                        <TableCell className="hidden sm:table-cell">
                          <img
                            alt={`${product.description}`}
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src={`${product.image_url}`}
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          {product.name}
                        </TableCell>
                        <TableCell>
                          {product.description}
                        </TableCell>
                        <TableCell>
                          {product.created_at.toString()}
                        </TableCell>
                        <TableCell>
                          {product.updated_at.toString()}
                        </TableCell>
                        <TableCell>
                        <Dialog>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                          <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel>
                              Label
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DialogTrigger
                              asChild
                              onClick={() => {
                                setDialog(Dialogs.editDialog)
                              }}
                            >
                              <DropdownMenuItem>
                                Edit
                              </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogTrigger
                              asChild
                              onClick={() => {
                                setDialog(Dialogs.deleteDialog)
                              }}
                            >
                              <DropdownMenuItem>
                                Delete
                              </DropdownMenuItem>
                            </DialogTrigger>
                          </DropdownMenuContent>
                        </DropdownMenu>
                          {dialog ===  Dialogs.editDialog ? EditDialog(product): DeleteDialog(product.id) }
                        </Dialog>
                      </TableCell>
                    </TableRow>
                    ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
    </Link>
  )
}

export default Cards