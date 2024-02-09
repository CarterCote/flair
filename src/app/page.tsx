import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { cookies } from "next/headers";
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RocketIcon } from "@radix-ui/react-icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


export default async function Home() {

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const { data: {user} } = await supabase.auth.getUser();
  console.log({user});

  if (!user) {
    return(
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/login"}>
        You are not logged in. Click here to go login.
      </Link>
    </main>
    )
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          SIGN UP FOR THE WAITLIST TODAY
        </AlertDescription>
      </Alert>

      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed center-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          SIGN UP FOR THE WAITLIST TODAY
        </p>
      </div> */}

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/flair.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>


    </main>
  );
}
