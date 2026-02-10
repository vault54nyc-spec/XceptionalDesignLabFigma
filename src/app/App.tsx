import { useState } from "react";
import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./routes";
import { EntranceAnimation } from "./components/EntranceAnimation";
import { ServicesCartProvider } from "./context/ServicesCartContext";

export default function App() {
  const [showEntrance, setShowEntrance] = useState(() => {
    const hasSeenAnimation = sessionStorage.getItem("xdl-entrance-seen");
    return !hasSeenAnimation;
  });

  const handleEntranceComplete = () => {
    sessionStorage.setItem("xdl-entrance-seen", "true");
    setShowEntrance(false);
  };

  if (showEntrance) {
    return <EntranceAnimation onComplete={handleEntranceComplete} />;
  }

  return (
    <HelmetProvider>
      <ServicesCartProvider>
        <div className="min-h-screen w-full overflow-x-hidden relative">
          <RouterProvider router={router} />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#0A0A0A",
                border: "1px solid rgba(212,175,55,0.3)",
                color: "#FAFAFA",
              },
            }}
          />
        </div>
      </ServicesCartProvider>
    </HelmetProvider>
  );
}