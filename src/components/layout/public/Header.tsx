"use client"
import Logo from "@/app/assets/svg/Logo";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { useGetMe, useLogout } from "@/hooks";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

export default function Header() {
    const routes = [
        { name: "Home", url: "/" },
        { name: "About us", url: "/about-us" },
    ];

    const { data, isLoading } = useGetMe()
    const { mutate: logout } = useLogout()

    const queryClient = useQueryClient()

    const handleLogout = () => {
        logout(undefined, {
            onSuccess: () => {
                toast.add({
                    title: "Logout successfully",
                    description: "you have been logged out.",
                    type: "success",
                })
                queryClient.removeQueries({ queryKey: ["user"] })
            },
            onError: (err) => {
                toast.add({
                    title: "Logout failed",
                    description: "something went wrong. please try again.",
                    type: "error"
                })
            }
        })
    }

    return (
        <header className="w-full h-16 border border-b">
            <div className="flex justify-between items-center h-full max-w-7xl mx-auto">
                <Logo />
                <div>PH Healthcare</div>
                <nav className="flex gap-5">
                    {routes.map((route) => (
                        <Link key={route.url} href={route.url}>
                            {route.name}
                        </Link>
                    ))}
                </nav>
                <div>
                    {!data && !isLoading && (
                        <Button
                            variant="outline"
                            render={<Link href="/login">Login</Link>}
                            nativeButton={false}
                        >
                            login
                        </Button>
                    )}
                    {!isLoading && data && (
                        <Button
                            variant="destructive"
                            onClick={handleLogout}
                        >
                            logout
                        </Button>
                    )}
                </div>
            </div>
        </header>
    );
}