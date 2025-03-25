// validate :
// - at least 6 character 
// - 1 upper case 
// - 1 lower case 
// - 1 digit 
// password must match 


export const validator = (password="", confirmPassword="") =>{
    const error  = []

    password.length < 6 && error.push("At least 6 character required")

        !/[A-Z]/.test(password) && error.push("password must contain at least ONE UPPERCASE LETTER ")

        !/[a-z]/.test(password) && error.push("password must contain at least one lowercase letter ")

        !/[0-9]/.test(password) && error.push("password must contain at least one number  ")

        !/[!@#$%^&*(){}<>?/|]/.test(password) && error.push("password must contain at least one special character  !@#$%^&*(){}<>?/| ")

        password===confirmPassword && error.push("Password must be matching with Confirm Password ")


}

