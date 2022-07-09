import { txt } from "@utils/text";
import { Navbar } from "./Navbar";

/**
 * @remarks
 * Setup for later use with NextJS's getLayout function (if the app were to have multiple pages)
 */
export const Layout = ({ children }: { children: JSX.Element }) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="p-12">
      <Navbar />
      <main className="flex justify-center">{children}</main>
      <footer className="mt-6">
        <span>
          {txt.copyright} &copy; {currentYear} Adam Kecskes
        </span>
      </footer>
    </div>
  );
};
