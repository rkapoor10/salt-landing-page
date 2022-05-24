import { toast } from 'react-toastify';
const myHeaders = new Headers();
myHeaders.append("apikey", "MwPYYTKRzMDPTsWqEaAt9Tie0lsmSzP0");

const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders
};
export const conversionApi = async (inputs) => {
  const {to, from, amt} = inputs
  try {
    const response = await fetch(
      `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amt}`,
      requestOptions
    );
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse.success ?
    {rate: jsonResponse["info"]["rate"], result: jsonResponse["result"], from:jsonResponse["query"]["from"], to:jsonResponse["query"]["to"]}
    :
    toast.error(jsonResponse.error.type,{theme: "dark"})
  } catch (error) {
    console.log("error", error);
    return error
  }
};