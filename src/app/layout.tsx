import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Deepika Jakati — Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer with 2.5+ years building production web apps with React, Angular, TypeScript, Node.js, Python/Flask, .NET/C#, SQL and MongoDB. Based in San Jose, CA.",
  openGraph: {
    title: "Deepika Jakati — Full Stack Software Engineer",
    description: "React · Angular · TypeScript · Node.js · Python · .NET · SQL & NoSQL",
    type: "website"
  }
};

// Sets the theme before first paint so there is no light/dark flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div className="bg-aurora flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
