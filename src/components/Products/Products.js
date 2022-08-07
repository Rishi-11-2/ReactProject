import { useEffect, useState } from "react"
import ListItem from "./ListItems/ListItem"
import axios from "axios"
import Loader from "../UI/Loader"
import { useSelector } from "react-redux"
import { useParams, useNavigate, useLocation } from "react-router-dom"
const Products = ({ onAddItem, onRemoveItem, eventState }) => {
    const authState = useSelector(state => state.auth)
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)
    const params = useParams();
    const Navigate = useNavigate();
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search).get("search")
    useEffect(() => {

        async function fetchItems() {
            try {
                let slug = `items.json`
                if (params.category) {
                    slug = `items-${params.category}.json`
                }
                const response = await axios.get(`https://react-project-f2307-default-rtdb.firebaseio.com/items/${slug}`)
                const data = response.data
                // if (!data) {
                //     handleError();
                //     return;
                // }
                const transformedData = data.map((item, index) => {
                    return {
                        ...item,
                        id: index
                    }
                })
                // setLoader(false)
                setItems(transformedData)
            }
            catch (error) {
                // setLoader(false)
                // console.log("Error: ", error)
                // alert("some error occured")

                handleError();
                //     return;



            }
            finally {
                setLoader(false)
            }
        }
        fetchItems();
        return () => {// cleanup function
            setItems([])
            setLoader(true)
        }


    }, [params.category, queryParams])

    const handleError = () => {

        // if (authState.idToken) {
        //     Navigate("/", { replace: true })
        // }

        console.log("Hi")
        Navigate("/404", { replace: true })

    }
    return (
        <>
            <div className={"product-list"}>
                <div className={"product-list--wrapper"}>
                    {
                        items.map(item => {
                            return (<ListItem key={item.id} data={item} />)
                        })
                    }
                </div>
            </div>
            {loader && <Loader />}
        </>
    )
}

export default Products