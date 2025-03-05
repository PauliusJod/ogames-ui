import { MdEventNote } from "react-icons/md";
import { PiCrownSimpleBold } from "react-icons/pi";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  group: {
    group_id: number;
    group_name: string;
    group_ranking: string;
    members: any[];
  };
}
const schema = z.object({
  invited_player_id: z.string().min(0).max(4),
});

type FormFields = z.infer<typeof schema>;

export default function ProfileGroup({ group }: Props) {
  const { group_id, group_name, group_ranking, members } = group;
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      invited_player_id: "9999",
    },
    resolver: zodResolver(schema),
  });
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
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log("on submit data:: ", data, isSubmitting, group_id);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2500));
    } catch (error) {}

    console.log("on submit data after timeout:: ", data, isSubmitting);
    // try {
    //     API request..
    // } catch (error) {
    //   setError("root", { message: "Something wrong.." });
    // }
  };

  return (
    <div className='w-full bg-white border border-gray-200 rounded-b-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 grid grid-cols-6 gap-4'>
      <div
        className='col-span-6 text-slate-700 pt-2 mx-4 flex-inline'
        key={group_name}>
        {/* [Profile Group] */}
        <p className='font-semibold'>{group_name}</p>
        <p className='text-sm'>{group_ranking}</p>
      </div>
      <div className='col-start-1 col-end-4 p-2'>
        {/* border-r-4 border-slate-200 */}
        <p className='text-md font-semibold text-center'>Members</p>
        <ul className='max-w-md divide-y divide-gray-200 dark:divide-gray-700 max-h-[200px] min-h-[200px] overflow-y-auto'>
          {/* groups[0].members */}
          {members &&
            members.map((i, j) => (
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
        <div
          className='relative z-0 mx-4 my-2'
          onSubmit={handleSubmit(onSubmit)}>
          <form>
            <input
              id='player_invite_id'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              maxLength={8}
              {...register("invited_player_id")}
              type='string'
            />
            <label
              htmlFor='player_invite_id'
              className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'>
              Player ID
            </label>
            <button
              className={`absolute right-2 ${
                errors.invited_player_id ? "top-1/3" : "top-1/2"
              } -translate-y-1/2 bg-slate-800 text-white px-3 py-1 text-sm rounded-md hover:bg-slate-700 hover:cursor-pointer`}>
              {/* onClick={() => sendInvite(group_id)} */}
              <FaPlus
                size={16}
                className={`text-slate-200 ${
                  !isSubmitting ? "visible" : "hidden"
                }`}></FaPlus>
              <Spinner visible={isSubmitting}></Spinner>
            </button>
            {errors.invited_player_id && (
              <div className='text-slate-800'>
                {errors.invited_player_id.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
