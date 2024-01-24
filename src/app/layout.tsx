import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { cn } from '@/lib/utils'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Decidiwise - 1:1 Mentorship ',
  description: 'Be the first to experience Decidiwise. Sign up now for early access and revolutionize the way you approach college decisions!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Toaster />
      <body className={cn(
            'min-h-screen font-sans grainy antialiased bg-white/80 backdrop-filter backdrop-blur-sm bg-opacity-80',
            inter.className
          )}>
        
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
