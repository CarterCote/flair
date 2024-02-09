// 'use client';

// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { User } from "@supabase/supabase-js";
// import { Button } from "@/components/ui/button"

// export default function LoginPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const router = useRouter();
//     const [user, setUser] = useState<User | null>(null);
//     const [loading, setLoading] = useState(true);

//     const supabase = createClientComponentClient();

//     useEffect(() => {
//         async function getUser() {
//             const { data } = await supabase.auth.getUser();
//             // const {data: {user}} = await supabase.auth.getUser();
//             setUser(data.user);
//             setLoading(false);
            
//         } 

//         getUser();
//     }, []);

//     const handleSignUp = async () => {
//         const { data, error } = await supabase.auth.signUp({
//             email,
//             password,
//             options: {
//                 emailRedirectTo: `${location.origin}/auth/callback`
//             }
//         })
//         if (error) {
//             console.log("sign up error: ", error);
//         } else {
//             setUser(data.user);
//             router.replace('/'); // Adjust the path as needed
//         }
//         // router.refresh();
//         setEmail('');
//         setPassword('');
//         setLoading(false);
//     }

//     const handleSignIn = async () => {
//         setLoading(true);
//         const { error } = await supabase.auth.signInWithPassword({
//             email,
//             password
//         });
//         console.log("hi")

//         if (error) {
//             console.log("sign up error: ", error);
//             setLoading(false);
//         } else {
//             router.replace('/'); // Adjust the path as needed
//         }
//         setEmail('');
//         setPassword('');
//         setLoading(false);
//     }

//     const handleLogout = async () => {
//         setLoading(true);
//         const { error } = await supabase.auth.signOut();
//         if (error) {
//             console.error('Logout error:', error);
//         } else {
//             setUser(null);
//             router.replace('/login'); // Or wherever you want to redirect to after logout
//         }

//         setLoading(false);
//     }

//     console.log({loading, user})

//     if (loading) {
//         return <h1>Loading...</h1>
//     }

//     if (user) {
//         return (
//             <div>
//                 <div>
//                     <h1>You're already logged in</h1>
//                     <button onClick={handleLogout}>
//                         Logout
//                     </button>
//                 </div>
//             </div>
//         )
//     }

//     return (
//         <main className="h-screen flex item-center justify-center bg-gray-800 p-6">
//             <div className = "bg-gray-900 p-8 rounder-lg shadow-md w-96">
//                 <input
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
//                 />
//                 <input
//                 type="password"
//                 name="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"

//                 />
//                 {/* <Button onClick={handleSignUp} variant="outline">Sign Up</Button> */}
//                 <Button onClick={handleSignIn} variant="outline">Sign In</Button>

//             </div>
//         </main>
//     )
// }