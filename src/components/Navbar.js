import { useState } from "react";
import GlobalStyles from "../styles/GlobalStyles";

export default function Navbar({ setSearchvalue }) {

    return(
        <>
            <GlobalStyles />
            <div className="navbar">
                <div className="nav_buttons">
                    <button className="button live">Live</button>
                    <button className="button pause">Pause</button>
                </div>
                <div className="nav_search">
                    <input onChange={e => setSearchvalue(e.target.value)} className="search_input" placeholder="&#x1F50E;&#xFE0E; Type to search..."/>
                </div>
            </div>
        </>
    )
}