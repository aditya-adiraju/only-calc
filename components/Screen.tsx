interface ScreenProps {
    content: string
}

export default function Screen(props: ScreenProps) {
    return (
        <input 
                className="text-lg bg-[#f7ebec] border-4 border-black font-bold h-14 w-lg rounded-sm text-right pr-3"  
                readOnly={true}
                value={props.content}/>
    )
}

