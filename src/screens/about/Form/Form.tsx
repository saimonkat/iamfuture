'use client'
import React, { ChangeEvent, FormEvent, useEffect, useState, useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/UI/select";
import Link from "next/link";
import { Button } from "@/UI/button";
import { Input } from "@/UI/input";
import { Textarea } from "@/UI/textarea";
import { Icons } from "@/components/icons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/UI/dialog";
import { contactLinks } from "@/constants/contactLinks";
import { HeaderContext } from "@/app/Context";
import ImgWithFallback from "@/hoc/ImgWithFallback";

interface SectionProps {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

interface FormProps {
  [name: string]: string;
}

const initialState: FormProps = {
  subject: "Blockchain Integration",
  email: "",
  name: "",
  message: "",
};

const Form: React.FC<SectionProps> = ({ sectionRef }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [values, setValues] = useState<FormProps>(initialState);
  const {email, setEmail} = useContext(HeaderContext);
  const [emailError, setEmailError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return email.match(pattern);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);

    if (emailError && validateEmail(value)) {
      setEmailError(null);
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    const textValue = value.replace(/[^A-Za-z-\s]/g, "");
    const textareaValue = value.replace(
      /[^a-zA-Z0-9\s@#$%^&*()_+=[\]{}|\\,.?:-]/g,
      "");

    if (name === "email" && emailError && validateEmail(value)) {
      setEmailError(null);
    }

    setValues({
      ...values,
      [name]:
        name === "name" || name === "subject" || name === "message"
          ? textValue
          : textareaValue
    });
  };

  const handleChangeSelect = (value: string) => {
    setValues({
      ...values,
      subject: value,
    });
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Incorrect email");
      return false;
    } else {
      emailError && setEmailError(null);
    }

    try {
      const response = await fetch("https://iamfuture.finance/Feedback.php", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      });

      if (response.ok) {
        setOpen(true);
      } else {
        return await response.json().then((err) => Promise.reject(err));
      }
    } catch (error) {
      console.error("Request error: ", error);
      throw new Error();
    }
  };

  useEffect(() => {
    if (!open) {
      setValues(initialState);
    }
  }, [open]);

  return (
    <div
      className="mb-10 mt-[72px] box-content  shrink-0 xl:mt-48.5 md:px-10 xl:px-0 xl:min-w-158.5 xl:pl-30 xl:pr-52"
      ref={sectionRef}
      id='form'
    >
      <h3 className="mb-6 bg-brand-gradient bg-clip-text text-4xl font-bold text-transparent xl:text-5xl">
        Have a Question?
      </h3>
      <div className="mb-8 flex flex-col items-start justify-between gap-2 md:flex-row md:items-center xl:mb-10 xl:flex-row xl:items-center">
        <div className="flex flex-col gap-2 ">
          <Link
            href="mailto:team@iamfuture.io"
            className="w-fit text-base font-normal"
          >
            hello@iamfuture.club
          </Link>
        </div>
        <a rel="noreferrer" target="_blank" href={contactLinks.discord.main}>
          <div className="mt-4 flex flex-row-reverse items-center gap-[14px] md:flex-row md:mt-0 xl:mt-0 xl:flex-row xl:items-start xl:gap-0 xl:space-x-3.5">
            <div className="relative rounded-full bg-blue-primary-300 px-5 py-2 font-bold text-blue-primary-900 xl:font-semibold">
              <span className="text-base md:text-sm">Ask in Discord Chat</span>
              <div className="absolute -left-[8px] top-1/2 -translate-y-1/2 translate-x-[70%] -rotate-180 border-b-[0.8vh] border-l-[0.8vh] border-t-[0.8vh] border-b-transparent border-l-blue-primary-300 border-t-transparent md:top-1/2 md:left-auto xl:left-auto md:right-0 xl:right-0 md:rotate-0 xl:rotate-0" />
            </div>
            {/* Discord icon */}
            <div className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full bg-[#5865f2] dark:bg-[#6d6f73] xl:h-12 xl:w-12">
              <div className="relative h-[26px] w-[26px]  text-white xl:h-[2vh] xl:w-[2.6vh]">
                <Icons.SMedia.Discord />
              </div>
            </div>
          </div>
        </a>
      </div>
      <form className="flex flex-col gap-8" onSubmit={handleFormSubmit}>
        <Select
          name="subject"
          value={values.subject}
          onValueChange={(value) => handleChangeSelect(value)}
        >
          <SelectTrigger className="flex h-12 w-full items-center border-0 bg-blue-primary-800 px-6.5 py-3 text-lg font-normal leading-6">
            <SelectValue placeholder="Blockchain Integration" />
          </SelectTrigger>
          <SelectContent className="border-none bg-blue-primary-800">
            <SelectItem
              className="text-white focus:text-white"
              value="Blockchain Integration"
            >
              Blockchain Integration
            </SelectItem>
            <SelectItem
              className="text-white focus:text-white"
              value="Security and Encryption"
            >
              Security and Encryption
            </SelectItem>
            <SelectItem
              className="text-white focus:text-white"
              value="Transaction Management"
            >
              Transaction Management
            </SelectItem>
          </SelectContent>
        </Select>
        <div className="relative">
        <Input
          className={emailError ? "border border-red-400 text-red-400 text-[16px]" : 'text-[16px]'}
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
          {emailError && (
            <span className="absolute top-[105%] text-sm text-red-400">
              {emailError}
            </span>
          )}
        </div>
        <Input
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={handleInputChange}
          className="md:text-sm text-[16px]"
        />
        <Textarea
          placeholder="Message"
          name="message"
          value={values.message}
          onChange={handleInputChange}
          style={{ resize: "none" }}
          className="md:text-sm text-[16px]"
        />
        <Button
          type="submit"
          variant="gradient"
          className="flex min-h-fit w-fit items-center gap-1.5 px-6 py-4 text-base font-bold"
        >
          Submit
        </Button>
      </form>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          hideCloseIcon
          className="flex w-auto flex-col items-center space-y-4 border-none bg-transparent"
        >
          <ImgWithFallback
            src={"/images/about/success.webp"}
            fallback={"/images/about/success.png"}
            width={91}
            height={97}
            alt="success"
          />
          <DialogTitle className="text-4.4xl font-bold">Awesome!</DialogTitle>
          <DialogDescription className="text-lg text-white text-center">
            Your message has been sent successfully
          </DialogDescription>
          <DialogClose className="mt-10">
            <Button
              variant="outline"
              className="relative flex h-10 w-fit items-center gap-1.5 px-6.5 py-6 text-base font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:z-10 after:contents after:h-full after:w-full after:bg-black"
            >
              Go Back
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Form;
