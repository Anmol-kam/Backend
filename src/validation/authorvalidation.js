exports.validname = (name)=>{
const nameregex =/^[a-zA-Z0-9_]{5,20}$/
return nameregex.test(name)
}

exports.validemail =(email)=>{
    const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailregex.test(email)                        
}

exports.validpassword =(password)=>{
    const passwordregex=/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,  }$/
    return passwordregex.test(password)
}