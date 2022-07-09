import { Navbar } from "./Navbar";

/**
 * @remarks
 * Setup for later use with NextJS's getLayout function (if the app were to have multiple pages)
 */
export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <Navbar />
      <main>
        <div>{children}</div>
      </main>
    </div>
  );
};
