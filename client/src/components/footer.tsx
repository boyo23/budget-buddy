import { Typography } from "@material-tailwind/react";

export function Footer(props: any) {
  return (
    <footer className="mt-4 h-fit bg-white dark:bg-darkPrimary">
      <div className="flex justify-center p-6 text-3xl">
        <h1 className="flex h-32 items-center text-5xl font-bold dark:text-contrast">FOOTER</h1>
      </div>
    </footer>
  );
}