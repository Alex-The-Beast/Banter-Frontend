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
import { useState } from "react";

export const SignupCard = () => {
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Sign Up</CardTitle>
        <CardDescription className="text-center mt-2">
          SignUp to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-3">
          {/* for username input */}

          <Input
            placeholder="Your username"
            required
            onChange={(e) =>
              setSignupForm({ ...signupForm, username: e.target.value })
            }
            value={signupForm.username}
            type="text"
            disabled={false}
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
            disabled={false}
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
            disabled={false}
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
            disabled={false}
          ></Input>

          <Button disabled={false} size="lg" type="submit" className="w-full">
            Continue
          </Button>
        </form>

        <Separator className="my-5" />

        <p className="text-s text-muted-foreground mt-4">
          Already have an account? {' '}
          <span className="text-sky-600 hover:underline cursor-pointer">Sign In</span>
        </p>
      </CardContent>
    </Card>
  );
};

// we have to complete card formation stop due to tab discharge .approx 30 min was completed.
