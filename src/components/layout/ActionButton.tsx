import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDeleteBookMutation } from "@/redux/features/books/bookApi";
import type { IBook } from "@/type";
import { Edit, Ellipsis, Trash } from "lucide-react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { toast } from "sonner";
import BorrowBook from "./BorrowBook";
import { useState } from "react";

interface ActionButtonProps {
  book: IBook;
}

function ActionButton({ book }: ActionButtonProps) {
  const [deleteBook] = useDeleteBookMutation();
  const [openBorrowDialog, setOpenBorrowDialog] = useState(false);
  const handleDelete = (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteBook(id).unwrap();
          toast("Book deleted successfully");
        }
      });
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Ellipsis></Ellipsis>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel>Book Actions</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link
                to={`/edit-book/${book?._id}`}
                className="flex justify-between items-center w-full"
              >
                Edit Book
                <DropdownMenuShortcut>
                  <Edit />
                </DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem onSelect={() => handleDelete(book?._id)}>
              Delete Book
              <DropdownMenuShortcut>
                <Trash />
              </DropdownMenuShortcut>
            </DropdownMenuItem>

            <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault();
                setOpenBorrowDialog(true);
              }}
            >
              Borrow Book
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>

        </DropdownMenuContent>
      </DropdownMenu>
      <BorrowBook open={openBorrowDialog} onOpenChange={setOpenBorrowDialog} book={book} />
    </>
  );
}

export default ActionButton;
