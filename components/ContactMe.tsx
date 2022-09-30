import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = { pageInfo: PageInfo };

const ContactMe = ({ pageInfo }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${pageInfo.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className="relative h-screen mx-auto max-w-screen">
      <div className="absolute grid items-center justify-center w-full grid-cols-1 gap-4 text-center top-24">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center">
          Contact
        </h3>
        <div className="flex flex-col space-y-3">
          <h4 className="text-sm font-semibold md:text-xl">
            I have got just what you need.{" "}
            <span className="underline decoration-[#FFD600]">Lets Talk</span>
          </h4>

          <div className="space-y-1 md:space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <PhoneIcon className="text-[#FFD600] w-4 h-4 md:h-7 md:w-7 animate-pulse" />
              <p className="text-sm md:text-xl">{pageInfo.phoneNumber}</p>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <EnvelopeIcon className="text-[#FFD600] w-4 h-4 md:h-7 md:w-7 animate-pulse" />
              <p className="md:text-xl">{pageInfo.email}</p>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <MapPinIcon className="text-[#FFD600] w-4 h-4 md:h-7 md:w-7 animate-pulse" />
              <p className="md:text-xl">{pageInfo.address}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full max-w-3xl px-10 mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md space-y-2"
          >
            <div className="flex flex-row items-center justify-center w-full space-x-2">
              <input
                {...register("name")}
                type="text"
                placeholder="Name"
                className="contactInput"
              />
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="contactInput"
              />
            </div>

            <input
              {...register("subject")}
              type="text"
              placeholder="Subject"
              className="contactInput"
            />
            <textarea
              {...register("message")}
              className="contactInput"
              placeholder="Message"
            />
            <button
              type="submit"
              className="bg-[#FFD600] py-4 px-6 rounded-md text-black font-bold text-lg w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
