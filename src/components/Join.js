import React from 'react'
import { UserGroupIcon } from "@heroicons/react/outline";

export default function Join() {
  return (
    <div className="grid grid-col-1 lg:grid-col-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
      <div className="flex gap-x-4">
        <UserGroupIcon className="p-4 w-16 bg-blue-500 text-white rounded-lg" />
        <h2 className="text">Groups</h2>
      </div>
    </div>
  );
}
