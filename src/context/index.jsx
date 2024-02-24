import { createContext, useState } from "react";


export const GlobalContext = createContext()



export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState("");
    const [loading,setLoading] =useState(false);
    const [error,setError] = useState(null);
    const[recipesData,setRecipesData] = useState([]);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            setLoading(true);
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data =await res.json();

            if(data?.data?.recipes && data.results >= 1 ){
                setRecipesData(data?.data?.recipes)
                
                setSearchParam('');
                if(recipesData && recipesData.length > 0){
                    setLoading(false);
                }
                setLoading(false)
               

            }
            
            console.log(data?.data?.recipes)
        } catch (e) {
            console.log(e);
            setError(e)
            setLoading(false);
            setSearchParam('');
        }
    }


    return <GlobalContext.Provider value={{ searchParam, setSearchParam, handleSubmit ,loading,error,recipesData}}>{children}</GlobalContext.Provider>
} 