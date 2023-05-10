
import NavBar from "../components/NavBar";

import "../css/FirstForm.css"

const FirstForm = () => {
    return(
        <div>
            <NavBar />
            <div>
                <div>
                    <h2>FirstForm</h2>
                </div>
                <form className="firstForm">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />

                    <input type="submit" value="Send"/>
                </form>
            </div>
        </div>
    )
}

export default FirstForm;