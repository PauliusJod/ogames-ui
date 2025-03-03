import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProfileCard from "./components/ProfileCard";
import AwaitingEvents from "./components/AwaitingEvents";
import PastEvents from "./components/PastEvents";
import ProfileGroup from "./components/ProfileGroup";
interface ProfilePageProps {
  awaitingEvents: any[];
  pastEvents: any[];
  members: any[];
}

export default function Home({
  awaitingEvents,
  pastEvents,
  members,
}: ProfilePageProps) {
  return (
    <div className='flex flex-col h-screen overflow-hidden bg-gradient-to-r from-slate-400 to-slate-500'>
      <header className='w-full text-center bg-gradient-to-b from-slate-500 to-slate-600 p-4'>
        <Navbar></Navbar>
      </header>
      <main className='flex-1 overflow-y-scroll'>
        <div className='min-h-screen'>
          [Profile main container]
          <div className='grid grid-cols-6 gap-4'>
            <div className='col-span-4 col-start-2'>
              <ProfileCard></ProfileCard>
            </div>
            <div className='col-span-4 col-start-2 bg-red-200'>
              <ProfileGroup members={members}></ProfileGroup>
            </div>
            {/* <div className='col-span-2 col-end-6 bg-red-200'>05</div> */}
            <div className='col-start-2 col-end-4'>
              <AwaitingEvents awaitingEvents={awaitingEvents}></AwaitingEvents>
            </div>
            <div className='col-span-2 col-end-6'>
              <PastEvents pastEvents={pastEvents}></PastEvents>
            </div>
            <div className='col-start-1 col-end-7 bg-red-200'>06</div>
          </div>
        </div>
      </main>
      <footer className='w-full text-center p-4'>[footer container]</footer>
    </div>
  );
}

export async function getStaticProps() {
  const req = await fetch("http://localhost:3000/dataProfile.json");
  const data = await req.json();
  const { awaitingEvents, pastEvents, members } = data;
  return { props: { awaitingEvents, pastEvents, members } };
}
