import { MdEventNote } from "react-icons/md";
import { PiCrownSimpleBold } from "react-icons/pi";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";

interface Props {
  groups: any[];
}

export default function ProfileGroup({ groups }: Props) {
  const [curGroup, setCurGroup] = useState<string>("undefined");
  const [inviting, setInviting] = useState<boolean>(true);
  useEffect(() => {
    if (groups.length > 0 && groups[1]) setCurGroup(groups[0].group_name);
  }, []);
  const bordersStyle = (index: number) => {
    console.log("groups: ", groups.length > 1 && index == groups.length - 1);
    console.log("index: ", index);
    if (!groups || groups.length === 0) return "rounded-t-lg";
    if (groups.length === 1) return "rounded-t-lg";
    if (index === 0) return "rounded-tl-lg";
    if (index === groups.length - 1) return "rounded-tr-lg";
    return "";
  };
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
  const sendInvite = () => {
    setInviting(true);
    setTimeout(() => {
      setInviting(false);
    }, 2000);
  };
  return (
    <div>
      <div className='w-full flex border-b border-gray-200 dark:border-gray-700 text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
        {groups &&
          groups.map((tab, index) => (
            // rounded-tl-lg
            <div
              key={index}
              className={`flex-1 pt-1 px-4 text-slate-950 bg-white ${bordersStyle(
                index
              )}`}>
              {tab.group_name}
            </div>
          ))}
      </div>

      <div className='w-full bg-white border border-gray-200 rounded-b-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 grid grid-cols-6 gap-4'>
        <div
          className='col-span-6 text-center font-semibold'
          key={curGroup}>
          {/* [Profile Group] */}
          {curGroup}
        </div>
        <div className='col-start-1 col-end-4 p-2'>
          {/* border-r-4 border-slate-200 */}
          <p className='text-md font-semibold text-center'>Members</p>
          <ul className='max-w-md divide-y divide-gray-200 dark:divide-gray-700 max-h-[200px] min-h-[200px] overflow-y-auto'>
            {/* groups[0].members */}
            {groups &&
              groups.map((i, j) => (
                <li
                  className='pb-1 sm:p-2'
                  key={j}>
                  <div className='flex items-center space-x-4 rtl:space-x-reverse'>
                    <div className='shrink-0'>
                      {showEventImage(
                        "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                      )}
                    </div>
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
                      title='Actions'>
                      <button>
                        <PiCrownSimpleBold
                          size={20}
                          className='text-amber-600'></PiCrownSimpleBold>
                      </button>
                      <button>
                        <FaRegSquarePlus
                          size={20}
                          className='text-green-700'></FaRegSquarePlus>
                      </button>
                      <button>
                        <FaRegSquareMinus
                          size={20}
                          className='text-red-700'></FaRegSquareMinus>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className='col-span-3'>
          <p className='text-center font-semibold'>Invite new member</p>
          <div className='relative z-0 mx-4 my-2'>
            <input
              id='player_invite_id'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              maxLength={12}
              type='string'
            />
            <label
              htmlFor='player_invite_id'
              className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'>
              Player ID
            </label>
            <button
              className='absolute right-2 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-1 text-sm rounded-md hover:bg-slate-700 hover:cursor-pointer'
              onClick={() => sendInvite()}>
              <FaPlus
                size={16}
                className={`text-slate-200 ${
                  !inviting ? "visible" : "hidden"
                }`}></FaPlus>
              <Spinner visible={inviting}></Spinner>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
