import React from 'react';

const MessageSkeleton = () => {
  return (
    <>
      <div className='flex gap-3 items-center'> {/* Corrected className from item-center to items-center */}
        <div className="skeleton w-10 h-10 rounded-full shrink-0" aria-hidden="true"></div>
        <div className="flex flex-col gap-1">
          <div className="skeleton h-4 w-40" aria-hidden="true"></div>
          <div className="skeleton h-4 w-40" aria-hidden="true"></div>
        </div>
      </div>

      <div className="flex gap-3 items-center justify-end">
        <div className="flex flex-col gap-1">
          <div className="skeleton h-4 w-40" aria-hidden="true"></div>
        </div>

        <div className="skeleton w-10 h-10 rounded-full shrink-0" aria-hidden="true"></div>
      </div>
    </>
  );
};

export default MessageSkeleton;
