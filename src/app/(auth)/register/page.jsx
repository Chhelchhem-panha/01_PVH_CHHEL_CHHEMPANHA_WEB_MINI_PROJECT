import { registerService } from "@/service/auth.service";
import Image from "next/image";

const RegisterPage = () => {
  async function handleRegister(userInfo) {
    "use server";
    const newUserInfo = {
      firstname: userInfo.get("firstname"),
      lastname: userInfo.get("lastname"),
      gender: userInfo.get("gender"),
      profile_url: userInfo.get("profile_url"),
      email: userInfo.get("email"),
      password: userInfo.get("password"),
    };

    const data = await registerService(newUserInfo);

    console.log("newUserInfo: ", newUserInfo);
  }
  return (
    <main className="w-full   min-h-screen flex box-border justify-center items-center mx-auto ">
      <div className="w-3/4">
        <div className="mb-14">
          <Image src={"/assets/icons/logo.svg"} width={250} height={200} />
        </div>
        <form className="grid grid-cols-3 gap-10" action={handleRegister}>
          <div className="col-span-1 w-full">
            <div className="mb-5">
              <label
                for="firstName"
                className="block mb-2 text-sm font-medium text-[#555555] dark:text-white"
              >
                First Name :
              </label>
              <input
                type="firstname"
                id="firstname"
                name="firstname"
                className="bg-[#EEEEEE] text-[#555555]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your name.."
                required
              />
            </div>

            <div className="mb-5">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-[#555555] dark:text-white"
              >
                Email :
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="bg-[#EEEEEE] text-[#555555] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="info@xyz.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-[#555555] dark:text-white"
              >
                Password :
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="bg-[#EEEEEE] text-[#555555] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="xxxxxxxxxxx"
                required
              />
            </div>

            <button
              type="signUp"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
            >
              Sign Up
            </button>
          </div>
          <div className="col-span-1 w-full">
            <div className="mb-5">
              <label
                for="firstName"
                className="block mb-2 text-sm font-medium text-[#555555] dark:text-white"
              >
                Last Name :
              </label>
              <input
                type="lastName"
                id="lastName"
                name="lastname"
                className="bg-[#EEEEEE] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your name.."
                required
              />
            </div>

            <div className="mb-5">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-[#555555] dark:text-white"
              >
                Gender :
              </label>
              <select
                id="gender"
                name="gender"
                className="bg-[#EEEEEE] text-[#555555] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option className="hidden">Choose Your Gender</option>
                <option>Male</option>
                <option>female</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-[#555555] dark:text-white"
              >
                Confirm Password :
              </label>
              <input
                type="password"
                id="password"
                className="bg-[#EEEEEE] text-[#555555] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="xxxxxxxxxxx"
                required
              />
            </div>
          </div>

          <div className="relative w-full col-span-1">
            <Image src={"/assets/icons/sign-up.svg"} fill className="p-0.5" />
          </div>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
