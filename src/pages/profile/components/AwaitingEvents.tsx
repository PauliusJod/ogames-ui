import { MdEventNote } from "react-icons/md";

interface Props {
  awaitingEvents: any[];
}

export default function AwaitingEvents({ awaitingEvents }: Props) {
  const showEventImage = (imgLink: string) => {
    if (imgLink) {
      return (
        <img
          className='w-8 h-8 rounded-full'
          src={imgLink}
          alt='Neil image'
        />
      );
    } else {
      return <MdEventNote></MdEventNote>;
    }
  };

  return (
    <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
      <p className='text-md text-center font-semibold pb-3'>Awaiting events</p>
      <ul className='max-w-md divide-y divide-gray-200 dark:divide-gray-700 max-h-[200px] min-h-[200px] overflow-y-auto'>
        {awaitingEvents &&
          awaitingEvents.map((i, j) => (
            <li
              className='pb-1 sm:p-2'
              key={j}>
              <div className='flex items-center space-x-4 rtl:space-x-reverse'>
                <div className='shrink-0'>{showEventImage("")}</div>
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                    Neil Sims
                  </p>
                  <p
                    className='text-sm text-gray-500 truncate dark:text-gray-400'
                    title='group'>
                    Group-name
                  </p>
                </div>
                <div
                  className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'
                  title='group ranking'>
                  #x
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
