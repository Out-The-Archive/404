type MobileLetterProps = {
    color: string,
    background?: string,
    character: string,
    rotation: number
}

export default function MobileLetter({ color, background, character, rotation }: MobileLetterProps){
    return (
        <span className="text-8xl font-black m-2" 
        style={{
            color: `${color}`,
            background: background && `${background}`,
            rotate: `${rotation}deg`,
            WebkitBackgroundClip: background && 'text',
            WebkitTextStroke: background && '5px transparent'

        }}>{character}</span>
    ) 
}
