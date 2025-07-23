import ActionButton from "@/components/layout/ActionButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBookQuery } from "@/redux/features/books/bookApi";
import type { IBook } from "@/type";


const AllBook = () => {
  const { data } = useGetBookQuery(undefined);
  const books = data?.data;
  return (
    <div className="container mx-auto px-7 min-h-[calc(100vh-365px)]">
      <div className="text-xl font-medium uppercase mt-4">All Books</div>

      <div className="my-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Copies</TableHead>
              <TableHead>Availability</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books?.map((book: IBook, idx: number) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.copies}</TableCell>
                <TableCell>
                  {book.copies > 0 ? "Available" : "Unavailable"}
                </TableCell>
                <TableCell>
                  <ActionButton book={book}></ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllBook;
