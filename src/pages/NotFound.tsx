
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
        <div className="text-9xl font-extrabold text-gray-900">404</div>
        <h1 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h1>
        <p className="text-muted-foreground text-center max-w-md mb-8">
          Sorry, we couldn't find the page you're looking for. The URL may be misspelled or the page you're looking for may no longer be available.
        </p>
        <div className="flex gap-4">
          <Button asChild variant="default">
            <Link to="/">Return to Homepage</Link>
          </Button>
          <Button asChild variant="outline">
            <a href="mailto:support@example.com">Contact Support</a>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
