"use client"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BeakerIcon, ChevronDownIcon, MenuIcon, XIcon } from "lucide-react"

export default function Header(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return(


        <div>
            <header className="px-4 lg:px-6 h-20 flex items-center">
            <Link className="flex items-center justify-center" href="/">
            <BeakerIcon className="h-6 w-6 mr-2" />
            <span className="font-bold">Prof. Zain Chem</span>
            </Link>
            <nav className="ml-auto items-center gap-4 sm:gap-6 hidden md:flex">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
                Home
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
                About
            </Link>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:underline underline-offset-4">
                Books
                <ChevronDownIcon className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link href="/projects">MDCAT / ECAT</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/lab">Book Resources</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="#collaborations">Handouts</Link>
                </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#publications">
                Publications
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#teaching">
                Teaching
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
                Contact
            </Link>
            </nav>
            <Button
            className="ml-auto md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
            {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </Button>
        </header>
        {mobileMenuOpen && (
            <div className="md:hidden">
            <nav className="flex flex-col items-center gap-4 p-4 bg-gray-100 dark:bg-gray-800">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
                    Home
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
                    About
                </Link>
                <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:underline underline-offset-4">
                    Books
                    <ChevronDownIcon className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                    <Link href="/projects">MDCAT / ECAT</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    <Link href="/lab">Book Resources</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    <Link href="#collaborations">Handouts</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#publications">
                Publications
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#teaching">
                Teaching
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
                Contact
                </Link>
            </nav>
            </div>
        )}
      </div>
        )
    }