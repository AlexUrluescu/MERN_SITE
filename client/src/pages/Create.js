
import NavBar from "../components/NavBar";

const Create = () => {
    return(
        <div>
            <NavBar />
            <div>
                <h2>Create a post</h2>
            </div>
            <div>
                <form>
                    <input type="text" placeholder="Subject" />
                    <input type="text" placeholder="Details" />
                    <input type="text" placeholder="Price" />

                    <input type="submit" value="Create"/>
                </form>
            </div>
        </div>
    )
}

export default Create;