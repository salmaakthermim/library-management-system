import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import type { IBook } from "@/type";
import { useAddBorrowMutation } from "@/redux/features/borrow/borrowApi";
import { toast } from "sonner";
import { useNavigate } from "react-router";

interface BorrowBookProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  book: IBook; // or bookId: string;
}

const BorrowBook = ({ open, onOpenChange, book }: BorrowBookProps) => {
  const navigate = useNavigate();
  const [addBorrow] = useAddBorrowMutation();
  const form = useForm({
    defaultValues: {
      quantity: "",
      dueDate: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (book && book.copies > 0) {
      if (book.copies >= data.quantity) {
        const borrow = {
          ...data,
          book: book._id,
        };
        addBorrow(borrow);
        toast("Book borrowed successfully");
        navigate("/borrow-summary");
        onOpenChange(false);
        form.reset({
          quantity: "",
          dueDate: "",
        });
      } else {
        toast("Quantity not available");
      }
    } else {
      toast("Book not available");
    }
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Borrow Book</DialogTitle>
            <DialogDescription>
              Make changes to your Book Information here. Click save to Borrow
              books.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Form {...form}>
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter Quantity"
                        {...field}
                        className="mb-4"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col mb-5">
                    <FormLabel>Due Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={
                            field.value ? new Date(field.value) : undefined
                          }
                          onSelect={field.onChange}
                          // disabled={(date) =>
                          //   date > new Date() || date < new Date("1900-01-01")
                          // }
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
            </Form>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default BorrowBook;
