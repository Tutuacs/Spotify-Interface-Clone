import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between sticky bottom-0">
            <div className='flex items-center gap-1'>
                <img className='rounded' src="/IMG/B_lock.jpg" width={56} height={56} alt="Capa do álbum Blue Lock" />

                <div className='flex flex-col '>
                    <strong className='font-normal'>Music Name</strong>
                    <span className='text-xs text-zinc-400' >Band name</span>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <div className='flex items-center gap-6'>
                    <Shuffle size={20} className='text-zinc-200 hover:text-green-400' />
                    <SkipBack size={20} className='text-zinc-200 hover:text-green-400' />
                    <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black hover:bg-green-400'>
                        <Play fill='bg-black' />
                    </button>
                    <SkipForward size={20} className='text-zinc-200 hover:text-green-400' />
                    <Repeat size={20} className='text-zinc-200 hover:text-green-400' />
                </div>
                <div className='flex items-center gap-2 group'>
                    <span className='text-xs text-zinc-500'>0:31</span>
                    <div className="h-1 rounded-full w-96 bg-zinc-600">
                        <div className='bg-zinc-200 w-40 h-1 rounded-full group-hover:bg-green-400'></div>
                    </div>
                    <span className='text-xs text-zinc-500'>2:14</span>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <Mic2 size={20} />
                <LayoutList size={20} />
                <Laptop2 size={20} />
                <div className='flex items-center gap-2 group'>
                    <Volume size={20} />
                    <div className="h-1 rounded-full w-24 bg-zinc-600">
                        <div className='bg-zinc-200 w-10 h-1 rounded-full group-hover:bg-green-400'></div>
                    </div>
                </div>
                <Maximize2 size={20} />
            </div>
        </footer>
    )
}