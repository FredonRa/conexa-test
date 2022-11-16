export class FetchServices {
	static async get<T>(url: string): Promise<T> {
		let responseBody;
		const response = await fetch(url);
		try { 
			responseBody = await response.json() 
		} catch(error) { 
			responseBody = {};
			throw new Error(); 
		}
		return responseBody;
	}
}