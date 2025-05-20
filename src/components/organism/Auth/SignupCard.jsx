import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LucideLoader2, TriangleAlert } from "lucide-react";
import { FaCheck } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export const SignupCard = ( { signupForm, setSignupForm , validationError,onSignupFormSubmit,error,isPending,isSuccess }) => {
  const navigate = useNavigate();

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Sign Up</CardTitle>
        <CardDescription className="text-center mt-2">
          SignUp to access your account
        </CardDescription>
        
        {validationError &&(
            <div className="bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                <TriangleAlert className="size-4" />
                <p>{validationError.message}</p>    

            </div>
        )}

          {error &&(
            <div className="bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                <TriangleAlert className="size-4" />
                <p>{error.message}</p>    

            </div>
        )}

        {isSuccess && (
            <div className="bg-primary/20 p-3 rounded-md flex items-center gap-x-2 text-sm text-primary mb-6">
                <FaCheck className="size-5" />
                <p>Successfully signed up. You will be redirected to login page in a few seconds.</p>
                <LucideLoader2 className="animate-spin ml-2 " />
            </div>
        )}

      </CardHeader>
      <CardContent>
        <form className="space-y-3 " onSubmit={onSignupFormSubmit}>
          {/* for username input */}

          <Input
            placeholder="Your username"
            required
            onChange={(e) =>
              setSignupForm({ ...signupForm, username: e.target.value })
            }
            value={signupForm.username}
            type="text"
            disabled={isPending}
          ></Input>

          {/* for email input */}
          <Input
            placeholder="email"
            required
            onChange={(e) =>
              setSignupForm({ ...signupForm, email: e.target.value })
            }
            value={signupForm.email}
            type="email"
            disabled={isPending}
          ></Input>

          {/* for password input */}
          <Input
            placeholder="password"
            required
            onChange={(e) =>
              setSignupForm({ ...signupForm, password: e.target.value })
            }
            value={signupForm.password}
            type="password"
            disabled={isPending}
          ></Input>

          {/* for confirm password input */}
          <Input
            placeholder="confirm password"
            required
            onChange={(e) =>
              setSignupForm({ ...signupForm, confirmPassword: e.target.value })
            }
            value={signupForm.confirmPassword}
            type="password"
            disabled={isPending}
          ></Input>

          <Button disabled={isPending} size="lg" type="submit" className="w-full">
            Continue
          </Button>
        </form>

        <Separator className="my-5" />

        <p className="text-s text-muted-foreground mt-4">
          Already have an account? {' '}
          <span className="text-sky-600 hover:underline cursor-pointer" onClick={() => navigate("/auth/signin")}>Sign In</span>
        </p>
      </CardContent>
    </Card>
  );
};

// we have to complete card formation stop due to tab discharge .approx 30 min was completed.
