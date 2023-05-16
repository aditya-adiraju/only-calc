import { ReactNode, Children } from "react";

interface CenterSectionProps {
    children: ReactNode
}


export function CenterSection({ children }: CenterSectionProps) {
    return (
        <div className='flex justify-center content-center pt-10'>
    <div className="bg-[#59656f] justify-center items-center w-min px-4 py-4 pt-15 rounded-lg">
            {children &&
            Children.map(children, child => {
                return (
                    <div className="flex justify-center items-center py-2">
                        {child}
                    </div>
                )})}
        </div>
        </div>
    )
}