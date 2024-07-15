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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import CreateProductDialog from "./CreateProductDialog"
import { MoreHorizontal } from "lucide-react"
import EditDialog from "./EditProductDialog"
import DeleteDialog from "./DeleteProductDialog"
import DetailsProductDialog from "./DetailsProductDialog"
import GenereteProductsTestButton from "./GenereteProductsTestButton"
import DeleteAllUserProductsButton from "./DeleteAllUserProductsButton"

export type Product = {
  id: string
  name: string
  description: string
  image_url: string
  user_id: string
  created_at: Date | string
  updated_at: Date | string
}


const ListProductsTabs = (products: Product[], type: string) => {
  return (
    <Tabs defaultValue="all">
            <div className="flex items-center">
              <div className="ml-auto flex items-center gap-2">
              {type === 'userProducts' ? GenereteProductsTestButton() : <></>}
              {type === 'userProducts' ? DeleteAllUserProductsButton() : <></>}
              {type === 'userProducts' ? <CreateProductDialog/> : <></>}
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
                            <DropdownMenuLabel className="text-center text-2xs">
                              Actions
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <div className="w-full">
                            <DetailsProductDialog product={product} />
                            {type === 'userProducts' ?
                             <><EditDialog product={product} /> 
                                <DeleteDialog productId={product.id} />
                                  </>
                             : <></>}
                            </div>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
  )
}

export default ListProductsTabs