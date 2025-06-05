import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#1a2748] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-center items-center gap-2">
            <img src="/logo.png" alt="logo" className="h-16 w-16 pt-2" />

            <h2 className="text-2xl font-semibold text-white"> Future Group</h2>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/properties" className="text-white hover:text-blue-100">
              Properties
            </Link>
            <Link href="/about" className="text-white hover:text-blue-100">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-100">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
