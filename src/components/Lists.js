import GlobalStyles from "../styles/GlobalStyles";
import data from "../data";
import List from "./List";

export default function Lists( {searchvalue }) {

    return (
        <>
            <GlobalStyles />
            <div>
                {data.filter((value) => {
                    if(searchvalue === "") {
                        return value;
                    } else if(value.mail.toLowerCase().includes(searchvalue.toLowerCase())) {
                        return value;
                    }
                }).map((info, index) => (<List key={index} info={info} />))}
            </div>
        </>
    )
}