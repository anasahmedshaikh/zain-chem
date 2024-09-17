import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpenIcon, GraduationCapIcon, NewspaperIcon } from "lucide-react"
import zain from '../images/zain.jpg'

export default function Component() {
  
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Main content remains the same */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Prof. Zain Chemistry Lab
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Exploring the frontiers of chemistry and inspiring the next generation of scientists.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Research Highlights</Button>
                <Button variant="outline">Contact Me</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                src={zain}
                alt="Professor Zain Chem"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:-order-none"
                height="550"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Prof. Zain</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Dr. Zain Ul Abdeen, Ph.D. in (Chemistry) from University of Karachi. Recently serving in Govt. Dehli College Karachi. The purpose of blog is to provide assistance in study the basic chemistry through easy, self explanatory & downloadable notes, Lab Manuals, Lab Demonstration Videos, Theory Lectures and much more available soon …
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <GraduationCapIcon className="h-5 w-5" />
                    <span>
                    M.Phil/Ph.D. Research Scholar from Univercity Of Karachi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpenIcon className="h-5 w-5" />
                    <span>Doctor of Philosophy in Chemistry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <NewspaperIcon className="h-5 w-5" />
                    <span>Over 100 peer-reviewed publications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay Connected</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join our mailing list to receive updates on our latest research, publications, and upcoming events.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}