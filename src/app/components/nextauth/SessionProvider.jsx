"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const SessionContext = createContext(undefined);

export const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};

export default function SessionProviderComp({
  children,
  session = null,
  initialStatus = "loading",
}) {
  const [data, setData] = useState(session);
  const [status, setStatus] = useState(initialStatus);

  useEffect(() => {
    setData(session);
    setStatus(session ? "authenticated" : "unauthenticated");
  }, [session]);

  const update = (newSession) => {
    setData(newSession);
    setStatus(newSession ? "authenticated" : "unauthenticated");
  };

  const value = {
    data,
    status,
    update,
  };

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
}
