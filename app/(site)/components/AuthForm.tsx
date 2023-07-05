"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/input/Input";
import { useCallback, useEffect, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-hot-toast";
import {signIn, useSession} from 'next-auth/react'
import { useRouter } from "next/navigation";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const router=useRouter()
  const session=useSession();
  const [variant, setVariant] = useState<Variant>("REGISTER");
  const [isLoading, SetIsLoading] = useState(false);
  
  useEffect(() => {
    if(session?.status==='authenticated'){
      console.log('abhishk');
      router.push('/users')
    }
  
  }, [session?.status])
  

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else setVariant("LOGIN");
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async(data) => {
    SetIsLoading(true);
    if (variant === "REGISTER") {
      axios.post('/api/register',data).then(()=>signIn('credentials',data)).catch(()=>toast.error('something went wrong')).finally(()=>SetIsLoading(false));
    } else {
      signIn('credentials',{
        ...data,
        redirect:false
      })
      .then((callback)=>{
        if(callback?.error){
          toast.error('Invalid credentials');
        }
        if(callback?.ok && !callback?.error){
          toast.success('Logged in!');
          router.push('/users');
        }
      }).finally(()=>SetIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    SetIsLoading(true);
    console.log('abhishek')
    signIn(action,{redirect:false})
    .then((callback)=>{
      if(callback?.error){
        toast.error('Invalid credentials');
      }
      if(callback?.ok&&!callback?.error){
        toast.success('Logged in!');
      }
    })
    .finally(()=>SetIsLoading(false));
  };

  return (
    <>
      {variant === "LOGIN" && (
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2> 
      )}
      {variant === "REGISTER" && (
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Create your account
        </h2>
      )}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {variant === "REGISTER" && (
              <Input
                label="Name"
                register={register}
                id="name"
                errors={errors}
              />
            )}
            <Input
              label="Email address"
              register={register}
              id="email"
              type="email"
              errors={errors}
            />
            <Input
              label="Password"
              register={register}
              id="password"
              type="password"
              errors={errors}
            />
            <div>
              <Button disabled={isLoading} fullWidth type="submit">
                {variant === "LOGIN" ? "Sign in" : "Register"}
              </Button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div
                className="
                absolute 
                inset-0 
                flex 
                items-center
              "
              >
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <AuthSocialButton
                icon={BsGithub}
                onClick={() => socialAction("github")}
              />
              <AuthSocialButton
                icon={BsGoogle}
                onClick={() => socialAction("google")}
              />
            </div>
          </div>

          <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
            <div>
              {variant == "LOGIN" ? "New to Realtime-chat?" : "Already an user"}
            </div>
            <div onClick={toggleVariant} className="underline cursor-pointer">
              {variant == "LOGIN" ? "Create an Account?" : "Login"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
