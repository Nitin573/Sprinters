import axios from "axios";

const FetchToken1 = async () => {
  try {
    const formData = {
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password"), // Corrected to "password"
    };

    console.log('after expire check formData >>>>>     ', formData);

    const response = await axios.post(
      "https://hotel-project.onrender.com/S-Printer-App/Admin/Auth/signIn",
      formData
    );

    const accessToken = response.data;

    console.log("accessToken after expiration time <<<< ", accessToken);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("tokenExpireTime", Date.now() + 1000 *60*60*24);

    return accessToken; // Return the accessToken if needed

  } catch (error) {
    console.error("Error:", error);
    // throw error; // Re-throw the error to propagate it to the caller if needed
  }
};

export default FetchToken1;
