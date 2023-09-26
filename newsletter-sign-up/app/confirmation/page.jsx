"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Button from "@components/Button";

import { useEmail } from "@context/EmailContext";

const ThankYouPage = () => {
  const { email, setEmail } = useEmail();
  const router = useRouter();

  const handleClick = (e) => {
    setEmail("");
    router.push("/");
  };

  return (
    <div className="thankyou-container">
      <Image
        src="/icon-success.svg"
        alt=""
        width={64}
        height={64}
        className="icon-success"
      />

      <h1>Thanks for subscribing!</h1>

      <p>
        A confirmation email has been sent to{" "}
        <span className="thankyou__email-address">{email}</span>. Please open it
        and click the button inside to confirm your subscription.
      </p>

      <Button onClick={handleClick}>Dismiss message</Button>
    </div>
  );
};

export default ThankYouPage;
