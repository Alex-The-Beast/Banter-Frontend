import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100 px-4">
      <Card className="w-full max-w-lg text-center shadow-lg p-6">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800">
            404 - Page Not Found
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            The page you are looking for does not exist or has been moved.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6">

            <img
            className="rounded-lg shadow-s"
              src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000" alt="404"
            />
          <Button
          variant="outline"
            onClick={() => navigate(-1)}
            className="bg-sky-700 text-white hover:bg-sky-800 transition mt-4"
          >
            Go Back
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
