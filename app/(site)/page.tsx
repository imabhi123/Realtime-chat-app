import Image from "next/image";
import AuthForm from "./components/AuthForm";

const Auth = () => {
  return (
    <div 
      className="
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8 
        bg-gray-100
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height="48"
          width="48"
          className="mx-auto w-auto"
<<<<<<< HEAD
          src="/images/logoo.png"
=======
          src="/images/logo.png"
>>>>>>> 867ff84e7efde6625a2791d8014b1535aeba7073
          alt="Logo"
        />
        <h2 
          className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-gray-900
          "
          >
            Sign in to your account
        </h2>
      </div>
<<<<<<< HEAD
      <AuthForm />
=======
      <AuthForm />      
>>>>>>> 867ff84e7efde6625a2791d8014b1535aeba7073
  </div>
  )
}

export default Auth;