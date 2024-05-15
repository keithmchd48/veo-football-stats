import React from 'react'

const MainLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className="my-0 mx-auto bg-brand-gray h-full">
      <div className="w-screen h-full">
        <div className="flex flex-col items-center justify-center h-screen overflow-auto">
          <h3 className="text-2xl font-bold text-center text-brand-orange p-4">Football Stats</h3>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;