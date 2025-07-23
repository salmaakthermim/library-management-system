import EditBook from "@/components/layout/EditBook";
import Root from "@/Layouts/Root";
import AddBooks from "@/Pages/AddBooks/AddBooks";
import AllBook from "@/Pages/AllBooks/AllBook";
import BorrowSummary from "@/Pages/BorrowSummary/BorrowSummary";
import ErrorPage from "@/Pages/ErrorPage/ErrorPage";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AllBook />,
      },
      {
        path: "/add-books",
        element: <AddBooks />,
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummary />,
      },
      {
        path: "/edit-book/:id",
        element: <EditBook />,
      },
    ],
  },
]);

export default router;
