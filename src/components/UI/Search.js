import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"
const SearchBox = () => {
    const Navigate = useNavigate();
    const { search: queryString } = useLocation();

    const [searchS, setSearchS] = useState("")
    useEffect(() => {
        const queryParams = new URLSearchParams(queryString).get("search")
        setSearchS(queryParams || "")
    }, [queryString])
    const handleInput = e => {
        setSearchS(e.target.value)
    }
    const handleFormSubmission = e => {
        e.preventDefault();
        Navigate({
            search: `search=${searchS}`
        })
    }
    return (
        <>
            <form onSubmit={handleFormSubmission}>
                <input name="search" type="text"
                    id="search" placeholder="Enter product name, category"
                    value={searchS}
                    onChange={handleInput}
                />
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20"
                        height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                </button>
            </form>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20"
                height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
        </>
    )
}
export default SearchBox