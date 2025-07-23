import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  useEditBookMutation,
  useGetSingleBookQuery,
} from "@/redux/features/books/bookApi";
import { ArrowBigLeft } from "lucide-react";
import { useEffect } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "sonner";

const EditBook = () => {
  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id);
  const navigate = useNavigate();

  const book = data?.data;
  const form = useForm({
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      isbn: "",
      description: "",
      copies: 0,
    },
  });
  useEffect(() => {
    if (book) {
      form.reset({
        title: book.title,
        author: book.author,
        genre: book.genre,
        isbn: book.isbn,
        description: book.description,
        copies: book.copies,
      });
    }
  }, [book, form]);
  const [editBook] = useEditBookMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await editBook({ _id: book?._id, data }).unwrap();
      toast("Book Edit successfully");
      navigate("/")
    } catch (error) {
      console.error("Failed to edit book:", error);
    }
  };
  return (
    <div className="container mx-auto lg:w-1/2 bg-gray-200 px-7">
      <div className="flex items-center gap-2 py-4">
        <Link to="/">
          <ArrowBigLeft></ArrowBigLeft>
        </Link>
        <span className="text-xl font-medium uppercase">Edit Books</span>
      </div>
      <div className="py-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="Author" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Genre</FormLabel>
                  <FormControl>
                    <Input placeholder="Genre" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isbn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ISBN</FormLabel>
                  <FormControl>
                    <Input placeholder="ISBN" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Description" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="copies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Copies</FormLabel>
                  <FormControl>
                    <Input placeholder="Copies" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EditBook;
