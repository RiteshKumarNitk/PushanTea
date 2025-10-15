import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function AdminMemberCartPage({ params }: { params: { userId: string } }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">User Cart Details</h1>
      <Card>
        <CardHeader>
          <CardTitle>User: John Doe (ID: {params.userId})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Classic English Breakfast Black Tea</TableCell>
                <TableCell>2</TableCell>
                <TableCell>$12.99</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Himalayan Green Tea</TableCell>
                <TableCell>1</TableCell>
                <TableCell>$14.99</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
