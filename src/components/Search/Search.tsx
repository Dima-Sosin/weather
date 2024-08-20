import "../../index.css"

export const Search = () => {
    return (
        <div className="flex justify-center">
            <input
                type="text"
                placeholder={localStorage.getItem("userCity")}
                className="bg-transparent border-2 placeholder-current rounded-2xl text-2xl text-center outline outline-0 focus:outline-0"
            />
        </div>
    )
}
