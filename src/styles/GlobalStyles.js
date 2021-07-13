import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    ${'' /* stylings from the navbar */}

    .navbar {
        background-color: #f7f7f7;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 10vh;
    }
    
    .nav_buttons {
        display: flex;
        margin: 0 0 0 1rem;
    }

    .button {
        padding: 0.9rem 1.3rem;
        font-weight: 550;
        border: 1px solid lightgray;
        cursor: pointer;
    }

    .button:hover {
        background-color: #e6f6ff;
        color: #2e96d1;
    }

    .live {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    .pause {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }


    .search_input {
        display: flex;
        align-items: center;
        padding: 0.7rem;
        border-radius: 5px;
        margin: 0 1rem;
        width: 1700px;
        font-size: 1rem;
    }

    @media screen and (max-width: 1650px) { 
        .search_input {
            width: 1250px;
        } 
    }


${'' /* stylings from the listcomponents */}

    .list {
        display: flex;
        justify-content: space-between;
        width: 97%;
        margin: -5px auto;
        text-align: center;
        align-items: center;
        border-bottom: 1px solid whitesmoke;
    }

    .left_side {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.4rem;
        text-align: right;
    }


    p {
        padding: 0 1rem;
        padding: 0 1rem;
    }

    .identify {
        font-weight: normal;
        font-size: 12px;
    }

    


`;

export default GlobalStyles;