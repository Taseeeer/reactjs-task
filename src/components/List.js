import GlobalStyles from "../styles/GlobalStyles";
import { FaCheckCircle } from "react-icons/fa";

export default function List({info}) {
    const { idf, mail, date } = info;
   
    return (
        <>
            <GlobalStyles />
                <div>
                    <div className="list">
                        <div className="left_side">
                            <FaCheckCircle style={{color: "#2469b3"}} />
                            <p className="identify" >{idf}</p>
                            <p className="mail_bold">{mail}</p>
                        </div>
                        <div className="date">
                            <p>{date}</p>
                        </div>
                    </div>
                </div> 
        </>
    )
}