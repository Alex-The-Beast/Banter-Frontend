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
import { useNavigate } from "react-router-dom";

export const SigninCard = () => {
  const navigate = useNavigate();
  const [signinForm, setSigninForm] = useState({
    email: "",
    password: "",
  });
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Sign In</CardTitle>
        <CardDescription className="text-center mt-2">
          Sign in to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-3">
          {/* for email input */}
          <Input
            placeholder="email"
            required
            onChange={(e) =>
              setSigninForm({ ...signinForm, email: e.target.value })
            }
            value={signinForm.email}
            type="email"
            disabled={false}
          ></Input>

          {/* for password input */}
          <Input
            placeholder="password"
            required
            onChange={(e) =>
              setSigninForm({ ...signinForm, password: e.target.value })
            }
            value={signinForm.password}
            type="password"
            disabled={false}
          ></Input>

          <Button disabled={false} size="lg" type="submit" className="w-full">
            Continue
          </Button>
        </form>

        <Separator className="my-5" />

        <p className="text-s text-muted-foreground mt-4">
          Doesn't have an account?{" "}
          <span
            className="text-sky-600 hover:underline cursor-pointer"
            onClick={() => navigate("/auth/signup")}
          >
            Sign Up
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

// we have to complete card formation stop due to tab discharge .approx 30 min was completed.
