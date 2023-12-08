import { Typography } from "@material-tailwind/react";

export function Footer(props: any) {
  return (
    <footer className="mt-4 h-fit bg-white dark:bg-darkPrimary">
      <div className="flex flex-col items-center justify-center p-6 text-3xl">
        {/* <h1 className="flex h-32 items-center text-5xl font-bold dark:text-contrast">BudgetBuddy</h1> */}
        <img src="https://i.ibb.co/wy5Qgzj/favicon-ico.png" alt="BudgetBuddy Logo" className="w-auto h-20" />
        <h1 className="flex text-xl dark:text-blue-gray-400 text-contrast relative">an app made with love</h1>
      </div>
    </footer>
  );
}