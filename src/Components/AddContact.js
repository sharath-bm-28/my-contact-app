import React, {useState} from "react";

function AddContact(props){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    const handleNameInput = (e) =>{
        setName(e.target.value);
    }

    const handleEmailInput = (e) =>{
        setEmail(e.target.value);
    }

    const add = (e) =>{
        e.preventDefault();
        if(name === "" || email === ""){
            alert("All the fields are mandatory..!")
            return
        }
        props.addConatctHandler({name,email});
        setEmail("");
        setName("");

        // console.log(name);
        // console.log(email);
    }


    return(
        <div className="ui main">
            <h2>
                Add Contact
            </h2>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" value={name} placeholder="Name" onChange={handleNameInput} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" value={email} placeholder="Email" onChange={handleEmailInput}/>
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    )
}

export default AddContact;
