"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Login() {
  const { data: session } = useSession()

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.3)" },
    tap: { scale: 0.95 },
  }

  const quotes = [
    "Believe you can and you're halfway there.",
    "Dream big, work hard, stay focused.",
    "Success is not for the lazy.",
    "Your only limit is your mind.",
    "Stay positive, work hard, make it happen.",
  ]
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-purple-900 via-slate-800 to-blue-900 text-white">
      {/* Left side - Welcome + Quote */}
      <div className="flex-1 flex flex-col justify-center items-center p-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          className="max-w-md text-center"
        >
          <h1 className="text-5xl font-bold mb-6">Welcome Back!</h1>
          <p className="text-lg text-gray-200 mb-6 italic">"{randomQuote}"</p>
          <img
            src="https://source.unsplash.com/300x300/?welcome,technology"
            alt="Welcome Illustration"
            className="mx-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* Right side - Glassmorphic login card */}
      <div className="flex-1 flex items-center justify-center p-10">
        <motion.div
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-10 w-full max-w-sm text-center"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          {session ? (
            <>
              <h2 className="text-2xl font-bold mb-4 text-white">Signed In</h2>
              <p className="mb-6 text-gray-200">{session.user.email}</p>
              <motion.button
                onClick={() => signOut()}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition"
                whileHover={buttonVariants.hover}
                whileTap={buttonVariants.tap}
              >
                Sign out
              </motion.button>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-6 text-white">Sign In</h2>
              <p className="text-gray-200 mb-6">Choose a provider to login</p>
              <div className="flex flex-col gap-4">
                <motion.button
                  onClick={() => signIn("github")}
                  className="flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition"
                  whileHover={buttonVariants.hover}
                  whileTap={buttonVariants.tap}
                >
                  <FaGithub /> Sign in with GitHub
                </motion.button>

                <motion.button
                  onClick={() => signIn("google")}
                  className="flex items-center justify-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
                  whileHover={buttonVariants.hover}
                  whileTap={buttonVariants.tap}
                >
                  <FaGoogle /> Sign in with Google
                </motion.button>

                <motion.button
                  onClick={() => signIn("facebook")}
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                  whileHover={buttonVariants.hover}
                  whileTap={buttonVariants.tap}
                >
                  <FaFacebook /> Sign in with Facebook
                </motion.button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}
