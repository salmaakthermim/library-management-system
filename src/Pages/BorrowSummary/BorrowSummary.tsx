import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBorrowQuery } from "@/redux/features/borrow/borrowApi";
const BorrowSummary = () => {
  const { data } = useGetBorrowQuery(undefined);
  const borrowSummary = data?.data;
  console.log(borrowSummary);
  return (
    <div className="container mx-auto px-7 min-h-[calc(100vh-365px)]">
      <div className="text-xl font-medium uppercase mt-4">Borrow Summary</div>

      <div className="my-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>NO.</TableHead>
              <TableHead>Book Title</TableHead>

              <TableHead>
                Total Quantity Borrowed
              </TableHead>
              <TableHead>ISBN</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {borrowSummary?.map((borrow, idx: number) => (
              <TableRow>
                <TableCell className="font-medium">{idx + 1}</TableCell>
                <TableCell>{borrow?.book[0]?.title}</TableCell>
                <TableCell>
                  {borrow?.totalQuantity}
                </TableCell>
                <TableCell>{borrow?.book[0]?.isbn}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BorrowSummary;
