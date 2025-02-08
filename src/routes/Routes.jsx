import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../pages/auth/SignInPage";
import ForgetPassword from "../pages/auth/ForgetPassword";
import VerificationCode from "../pages/auth/VerificationCode";
import ResetPassword from "../pages/auth/ResetPassword";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/forgate-password",
    element: <ForgetPassword />,
  },
  {
    path: "/verification-code",
    element: <VerificationCode />,
  },
  {
    path: "/new-password",
    element: <ResetPassword />,
  },

  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },

      {
        path: "/request-management",
        element: <ManagementPage />,
      },
      {
        path: "/invoice",
        element: <InvoicePage />,
      },
      {
        path: "/add-service",
        element: <AddServicePage />,
      },
      {
        path: "/make-admin",
        element: <MakeAdminPage />,
      },

      // user management
      {
        path: "/user-management",
        element: <UserManagementPage />,
      },
      {
        path: "/technician",
        element: <Technician />,
      },
      {
        path: "/admin-client",
        element: <AdminClient />,
      },
      {
        path: "/client-supervisor",
        element: <ClientSupervisor />,
      },

      // settings
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/privacy-policy",
        element: <Policy />,
      },
      {
        path: "/terms-and-condition",
        element: <TermsConditionPage />,
      },

      // header nav

      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/notification",
        element: <NotificationPage />,
      },
    ],
  },
]);

export default router;
