function AccountInfo({account}) {
    return ( 
        <div>
        <h1>{account.nationality==="en"? "Hello": account.nationality==="fr"? "Bonjour": "Hallo"}</h1>
        <h1>Your email is : {account.email}</h1>
        <h1>Your password is: {account.password}</h1>
        </div>
     );
}

export default AccountInfo;