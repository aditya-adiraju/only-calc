import { ReactNode, Children } from "react";

interface CenterSectionProps {
    children: ReactNode
}


export function CenterSection({ children }: CenterSectionProps) {
    return (
        <>
            {children &&
            Children.map(children, child => {
                return (
                    <div className="flex justify-center items-center py-2">
                        {child}
                    </div>
                )})}
        </>
    )
}