import Container from "./ui/container";
import Link from "next/link";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavBarActions from "@/components/navb-araction";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="flex h-16 items-center px-4">
          <Link
            href="/"
            className="font-bold text-2xl mr-8"
          >
            STORE
          </Link>

          <MainNav data={categories} />

          <div className="ml-auto">
            <NavBarActions />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;