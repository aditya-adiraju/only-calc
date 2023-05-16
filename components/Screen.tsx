interface ScreenProps {
    content: string
}

export default function Screen(props: ScreenProps) {
    return (
        <input 
                className="bg-blue-100 border w-lg border-black rounded-sm text-right pr-3"  
                readOnly={true}
                value={props.content}/>
    )
}

