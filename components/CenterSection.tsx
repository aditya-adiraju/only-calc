import { ReactNode, Children } from "react";

interface CenterSectionProps {
  children: ReactNode;
}

export default function CenterSection({ children }: CenterSectionProps) {
  return (
    <div className="flex justify-center content-center pt-10 pb-10">
      <div className="bg-[#1d1e2c] justify-center items-center drop-shadow-2xl w-min px-4 py-4 pt-15 rounded-lg border-2 border-black">
        {children &&
          Children.map(children, (child) => {
            return (
              <div className="flex justify-center items-center py-2">
                {child}
              </div>
            );
          })}
      </div>
    </div>
  );
}
