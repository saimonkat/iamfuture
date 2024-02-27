"use client";
import { Button } from "@/UI/button";
import { useState, useEffect, useContext } from "react";
import { HeaderContext } from "@/app/Context";

const Cookie: React.FC = () => {
  const { email, setEmail } = useContext(HeaderContext);
  const [isPermanentSaveMode, setIsPermanentSaveMode] =
    useState<boolean>(false);

  const [visible, setVisible] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    const savedState = localStorage.getItem("cookieNotificationVisible");
    if (savedState === "false") {
      setVisible(false);
    }
    setLoading(false);
  }, []);

  const handleAccept = () => {
    setIsPermanentSaveMode(true);
    localStorage.setItem("cookieNotificationVisible", "false");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieNotificationVisible", "false");
    setVisible(false);
  };

  const cookieName = "email";

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isPermanentSaveMode && email) {
        document.cookie = `${cookieName}=${email}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
      }
    }
  }, [isPermanentSaveMode, email, visible]);

  useEffect(() => {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [key, value] = cookie.trim().split("=");
      if (key === "email" && value !== "") {
        setEmail(value);
        break;
      }
    }
  }, []);

  if (loading) {
    return null; 
  }


  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex w-fit max-w-[40.4vh] flex-col gap-2 rounded-lg bg-blue-primary-800 p-6">
      <p>This website uses cookies to ensure maximum convenience</p>
      <div>
        <Button onClick={handleAccept} variant={"gradient"}>
          Accept
        </Button>
        <Button onClick={handleReject} variant={"default"}>
          Reject
        </Button>
      </div>
    </div>
  );
};

export default Cookie;
