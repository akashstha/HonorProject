
 export async function getResponse() {
	const response = await fetch(
		'https://3557fe23-f9fe-4d2c-807b-0a9e859dda6a.mock.pstmn.io/cms?3',
	);
	const data = await response.json(); // Extracting data as a JSON Object from the response
    // throw new Error("Error")
    return data;
}