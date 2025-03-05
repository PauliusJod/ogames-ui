import { useState } from "react";
import ProfileGroup from "./ProfileGroup";

interface Props {
  groups: any[];
}

export default function ProfileGroupsSection({ groups }: Props) {
  const [curGroup, setCurGroup] = useState<number>(0);

  const bordersStyle = (index: number) => {
    if (!groups || groups.length === 0) return "rounded-t-lg";
    if (groups.length === 1) return "rounded-t-lg";
    if (index === 0) return "rounded-tl-lg";
    if (index === groups.length - 1) return "rounded-tr-lg";
    return "";
  };

  return (
    <div>
      <div className='w-full flex border-b border-gray-200 dark:border-gray-700 text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
        {groups &&
          groups.map((tab, index) => (
            <div
              key={index}
              className={`flex-1 px-4 text-slate-950 cursor-pointer py-2 ${bordersStyle(
                index
              )} ${index === curGroup ? "bg-slate-300" : "bg-white"}`}
              onClick={() => setCurGroup(index)}>
              {tab.group_name}
            </div>
          ))}
      </div>
      {/* -- One Group container -- */}
      <ProfileGroup
        key={curGroup}
        group={groups[curGroup]}></ProfileGroup>
    </div>
  );
}
