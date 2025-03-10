export function Skillcards({image, name}){
    return <div className="mx-auto w-16 rounded-md border-2 border-orange-500">
        <div className="rounded-t-md p-2 bg-slate-950">
            <img className="hover:scale-125 transition-all duration-500" width={50} src={`${image}`}/>
        </div>
        <div className="bg-neutral-600 rounded-b-md text-center text-sm text-white">
            {name}
        </div>

    </div>
}