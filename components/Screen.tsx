interface ScreenProps {
    content: any
}

export default function Screen(props: ScreenProps) {
    return (
        <input 
                className="bg-blue-100 border w-lg border-black rounded-sm text-right pr-3"  
                defaultValue={props.content}/>
    )
}

