import Navbar from "@/components/Navbar";
import ProfileCard from "./components/ProfileCard";
import AwaitingEvents from "./components/AwaitingEvents";
import PastEvents from "./components/PastEvents";
import ProfileGroupsSection from "./components/ProfileGroupsSection";
interface ProfilePageProps {
  userInfo: any;
  awaitingEvents: any[];
  pastEvents: any[];
  groups: any[];
}

export default function Home({
  userInfo,
  awaitingEvents,
  pastEvents,
  groups,
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
              <ProfileCard user={userInfo}></ProfileCard>
            </div>
            <div className='col-span-4 col-start-2'>
              <ProfileGroupsSection groups={groups}></ProfileGroupsSection>
            </div>
            <div className='col-start-2 col-end-4'>
              <AwaitingEvents awaitingEvents={awaitingEvents}></AwaitingEvents>
            </div>
            <div className='col-span-2 col-end-6'>
              <PastEvents pastEvents={pastEvents}></PastEvents>
            </div>
            <div className='col-start-2 col-end-6'>
              <div className='w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
                <p className='text-sm text-center text-slate-700 pb-3'>
                  [Additional content place for later..]
                </p>
              </div>
            </div>
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
  const { userInfo, awaitingEvents, pastEvents, groups } = data;
  return { props: { userInfo, awaitingEvents, pastEvents, groups } };
}
