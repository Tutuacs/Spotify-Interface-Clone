import { HomeIcon, Library, Search } from "lucide-react";

export function Slidebar() {
    return (
        <aside className="w-64 bg-zinc-950 p-6">
            <div className='flex items-center gap-2'>
                <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
            </div>

            <nav className='space-y-5 mt-10'>
                <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'>
                    <HomeIcon />
                    Home
                </a>
                <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'>
                    <Search />
                    Search
                </a>
                <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'>
                    <Library />
                    Your Library
                </a>
            </nav>

            <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-2'>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>TIKTOK PHONK SONGS 2023 HITS</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>who hurt u?</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Phonk Brazileño</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Your Top Songs 2022</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Aesthetics</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>wkt [bat]</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>academia!!!</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Japanese songs</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>[bat]</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Tutuca</a>
            </nav>
        </aside>
    )
}