
import { Routes, Route } from "react-router-dom";

//General Components
import { GifFooter } from "./components/general/GifFooter";
import { GifHeader } from "./components/general/GifHeader";
import { GifFavorites } from "./views/GifFavorites";
import { GifHome } from "./views/GifHome";

const GifApp = () => {

    return (
        <>
            <GifHeader/>
            <Routes>
                <Route path="/" element={ <GifHome/> }/>
                <Route path="/favorites" element={ <GifFavorites/> }/>
            </Routes>
            <GifFooter/>
        </>
    )
}

export { GifApp };