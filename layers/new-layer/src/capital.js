import { helloWorld } from 'hello-world-npm';


function capital(string) {
    const capitalizedString =
      string.substring(0, 1).toUpperCase() + string.substring(1)
      console.log("Capitalized string: ",helloWorld())
    //   const data = {data}
    // return capitalizedString
    const data = {capitalizedString:capitalizedString,helloWorld:helloWorld()}
    return data
  }
  
  export default capital