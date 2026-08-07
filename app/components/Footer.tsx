import { BiSolidHeart } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="max-w-3xl mx-auto px-6 py-8 border-t border-subtle">
      <p className="text-xs text-muted text-center flex items-center justify-center gap-1">
        © {new Date().getFullYear()} Vinay Joshi. Built with
        <BiSolidHeart className="text-red-500" />
      </p>
    </footer>
  );
}
 
