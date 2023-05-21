
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const PostEdit = ({setPostEdit, setFormData, id, subject, details, price, user_name}) => {

    const handleEdit = async () => {
        try {

            const res = await fetch(`http://localhost:4000/posts/${id}`);
            const data = await res.json()

            console.log(data);
            setFormData(data);
            setPostEdit(data._id)
            
            
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async () => {
        // console.log("delete");
        try {

            const data = await fetch(`http://localhost:4000/posts/${id}`, {
                method:'DELETE'
            })


        const res = await data.json()
        console.log(res);

        if(res.message === "Deleted"){
            window.location.reload();
        }

            
            
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="post_container">
            <div className="post_subject">
                <h3>{subject}</h3>
                <span>
                    <FontAwesomeIcon className='user_icon' icon={faUser}  />
                    {user_name}
                </span>
            </div>
            <div className="post_details">
                <p>{details}</p>
            </div>
            <div className="post_price">
                <h4>Price: {price} RON</h4>
                <button className="buy_button" onClick={handleEdit}><b>Edit</b></button>
                <button className="buy_button" onClick={handleDelete}><b>Delete</b></button>
            </div>
        </div>
    )
}

export default PostEdit;