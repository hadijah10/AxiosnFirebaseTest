import { signInWithGoogle } from "../firebase-config";

export default function GoogleSignIn(){
   
    return(
        <>
        <button className="login-with-google-btn " onClick={
            signInWithGoogle
        }>Sign In with Gmail</button>
        <p>{localStorage.getItem('name')}</p>
        <p>{localStorage.getItem("email")}</p>
        <img src={localStorage.getItem("photourl")} alt="image here" />
        </>
    );
}