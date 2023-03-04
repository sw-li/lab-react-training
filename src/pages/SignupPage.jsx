import { useState } from "react";

import AccountInfo from '../components/AccountInfo'

function SignupPage() {

    const [email, setEmail] = useState("")
    const [password, setPasseword] = useState("")
    const [nationality, setNationality] = useState("")
    const [account, setAccount] = useState({})
    const handleSubmit = e=>{
        e.preventDefault()
        console.log({email, nationality,password})
        setAccount({email,nationality,password})
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e=> setEmail(e.target.value)} /> 
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e=> setPasseword(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="exampleInputNationality">Nationality</label>
                
                <select type="password" class="form-control" id="exampleInputNationality" placeholder="Nationality" onChange={e=> setNationality(e.target.value)}>
                    <option value="fr" selected>French</option>
                    <option value="en">English</option>
                    <option value="de">German</option>
                </select>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <AccountInfo account={account}></AccountInfo>
        </div>

        
     );
}

export default SignupPage;