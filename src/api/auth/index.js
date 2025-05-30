import axios from "@/config/axiosConfig.js";

export const signUpRequest = async ({ email, password, username }) => {
  try {
    const response = await axios.post("/users/signup", {
      email,
      password,
      username,
    });

    return response.data;
  } catch (error) {
    console.log("signuprequest error", error);
    throw error.response.data;
  }
};

export const signInRequest=async({email,password})=>{
    try{
        const response=await axios.post("/users/signin",{
            email,
            password
        })
        return response.data

    }catch(error){
        console.log("signinrequest error",error)
        throw error.response.data
    }
}
