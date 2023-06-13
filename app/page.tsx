import { Footer } from "@/public/Components/Footer";
import { Slidebar } from "@/public/Components/Slidebar";
import { ChevronLeft, ChevronRight, Play, Search } from "lucide-react";

export default function Home() {
  return (
    <main>
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">
          <Slidebar />
          <main className="flex-1 p-6 ml-60">
            <div className="flex items-center gap-4">
              <button className="rounded-full bg-black/40 p-1">
                {" "}
                <ChevronLeft />{" "}
              </button>
              <button className="rounded-full bg-black/40 p-1">
                {" "}
                <ChevronRight />{" "}
              </button>
            </div>
            <h1 className="font-semibold text-3xl  mt-10">Good Afternoon</h1>
            <div className="grid grid-cols-3 gap-6 mt-4">
              <a
                href="#"
                className="group bg-white/5 rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
              >
                <img
                  src="/IMG/B_lock.jpg"
                  width={96}
                  height={96}
                  alt="Capa do álbum Blue Lock"
                />
                <strong>Blue Lock</strong>

                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill="bg-black" />
                </button>
              </a>
              <a
                href="#"
                className="group bg-white/5 rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
              >
                <img
                  src="/IMG/B_lock.jpg"
                  width={96}
                  height={96}
                  alt="Capa do álbum Blue Lock"
                />
                <strong>Blue Lock</strong>

                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill="bg-black" />
                </button>
              </a>
              <a
                href="#"
                className="group bg-white/5 rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
              >
                <img
                  src="/IMG/B_lock.jpg"
                  width={96}
                  height={96}
                  alt="Capa do álbum Blue Lock"
                />
                <strong>Blue Lock</strong>

                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill="bg-black" />
                </button>
              </a>
              <a
                href="#"
                className="group bg-white/5 rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
              >
                <img
                  src="/IMG/B_lock.jpg"
                  width={96}
                  height={96}
                  alt="Capa do álbum Blue Lock"
                />
                <strong>Blue Lock</strong>

                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill="bg-black" />
                </button>
              </a>
              <a
                href="#"
                className="group bg-white/5 rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
              >
                <img
                  src="/IMG/B_lock.jpg"
                  width={96}
                  height={96}
                  alt="Capa do álbum Blue Lock"
                />
                <strong>Blue Lock</strong>

                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill="bg-black" />
                </button>
              </a>
              <a
                href="#"
                className="group bg-white/5 rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
              >
                <img
                  src="/IMG/B_lock.jpg"
                  width={96}
                  height={96}
                  alt="Capa do álbum Blue Lock"
                />
                <strong>Blue Lock</strong>

                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill="bg-black" />
                </button>
              </a>
            </div>
            <h2 className="font-semibold text-3xl mt-10">
              Made for Arthur Azevedo da Silva
            </h2>
            <div className="grid grid-cols-6 gap-4 mt-4">
              <div className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10">
                <img
                  src="/IMG/B_lock.jpg"
                  className="w-full rounded"
                  width={120}
                  height={120}
                  alt="Capa do álbum Blue Lock"
                />
                <strong className="font-semibold">Daily Mix - 1</strong>
                <span className="text-sm text-zinc-500">
                  artista 1, artista 2, artista 3{" "}
                </span>
              </div>
              <div className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10">
                <img
                  src="/IMG/B_lock.jpg"
                  className="w-full rounded"
                  width={120}
                  height={120}
                  alt="Capa do álbum Blue Lock"
                />
                <strong className="font-semibold">Daily Mix - 2</strong>
                <span className="text-sm text-zinc-500">
                  artista 1, artista 2, artista 3, artista 4{" "}
                </span>
              </div>
              <div className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10">
                <img
                  src="/IMG/B_lock.jpg"
                  className="w-full rounded"
                  width={120}
                  height={120}
                  alt="Capa do álbum Blue Lock"
                />
                <strong className="font-semibold">Daily Mix - 3</strong>
                <span className="text-sm text-zinc-500">artista 1 </span>
              </div>
              <div className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10">
                <img
                  src="/IMG/B_lock.jpg"
                  className="w-full rounded"
                  width={120}
                  height={120}
                  alt="Capa do álbum Blue Lock"
                />
                <strong className="font-semibold">Daily Mix - 4</strong>
                <span className="text-sm text-zinc-500">
                  artista 1, artista 2, artista 3, artista 4 , artista 5
                </span>
              </div>
              <div className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10">
                <img
                  src="/IMG/B_lock.jpg"
                  className="w-full rounded"
                  width={120}
                  height={120}
                  alt="Capa do álbum Blue Lock"
                />
                <strong className="font-semibold">Daily Mix - 5</strong>
                <span className="text-sm text-zinc-500">
                  artista 1, artista 2, artista 3, artista 4{" "}
                </span>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </main>
  );
}
