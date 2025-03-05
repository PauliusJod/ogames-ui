import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className='flex flex-col h-screen overflow-hidden bg-gradient-to-r from-slate-400 to-slate-500'>
      <header className='w-full text-center bg-gradient-to-b from-slate-500 to-slate-600 p-4'>
        <Navbar></Navbar>
      </header>
      <main className='flex-1 overflow-y-scroll'>
        <div className='min-h-screen'>[HOME Main container] </div>
      </main>
      <footer className='w-full text-center p-4'>[footer container]</footer>
    </div>
  );
}
