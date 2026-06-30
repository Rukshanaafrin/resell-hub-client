"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";

export default function RoleRoute({ children, role }) {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    if (session?.user?.email) {
      fetch(
        `https://resell-hub-server.onrender.com/users/${session.user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setUserRole(data.role);
        });
    }
  }, [session]);

  if (isPending) {
    return <h1 className="text-center mt-10">Loading...</h1>;
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  if (userRole && userRole !== role) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold text-red-500">
          Access Denied
        </h1>
      </div>
    );
  }

  return children;
}