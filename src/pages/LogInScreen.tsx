import { MessageSquare, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FormEvent, useState } from "react";

import { NavLink } from "react-router-dom";
import OAuth from "../components/OAuth";
import { useAuth } from "../hooks/useAuth";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Loader from "../ui/loader";

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const { isLoading } = useSelector((state: RootState) => state.auth);
  const [formData, setFormData] = useState({
    emailOrUserName: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(formData);
    setFormData({
      emailOrUserName: "",
      password: "",
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen ">
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-4">
          <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <MessageSquare className="size-6 text-primary" />
          </div>
          <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
          <p className="text-sm text-muted-foreground">
            Sign in to your account
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  Email or User Name
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="size-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  placeholder="Enter your email or user name"
                  className="input input-bordered w-full pl-10"
                  value={formData.emailOrUserName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      emailOrUserName: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="size-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input input-bordered w-full pl-10 pr-10"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <Eye className="size-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Sign in
            </button>
          </form>
          <div className="flex justify-center items-center gap-2">
            <p>Don't have an account?</p>
            <NavLink to="/signup" className="text-sm text-primary">
              Sign up
            </NavLink>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <OAuth />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
