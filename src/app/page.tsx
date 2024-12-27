import Home from "@/app/(user)/home-page/home-page";
import UserLayout from "@/app/(user)/layout";

export default function LandingPage() {
    return (
        <div>
            <UserLayout>
                <Home />
            </UserLayout>
        </div>
    );
}
