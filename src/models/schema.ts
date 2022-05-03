interface GraphQlError {
	message: string;
	extensions: {
		[key: string]: string;
	};
}

class ApiError extends Error {
	errors: GraphQlError[];

	constructor(responseJson: { error: { errors: GraphQlError[] } }) {
		super();
		this.message = "An API error has occured";
		this.errors = responseJson.error.errors;
	}
}
/**
 * Use the GraphQL API
 * @param source A GraphQL query
 * @returns whatever you asked for
 */
export const query = async (source: string) => {
	const res = await fetch("https://eldenring.fanapis.com/api/graphql", {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({ query: source }),
	});
	const data = await res.json();
	if (res.ok) return data.data;
	else throw new ApiError(data);
};

/**
 * Use the REST API
 * @param resource A resource to get, like `classes`, `bosses` etc
 * @param id Optional ID of resource
 * @returns Whatever you asked for
 */
export const getRest = async (resource: string, id?: string) => {
	const res = await fetch(
		`https://eldenring.fanapis.com/api/${resource}${id ? `/${id}` : ""}`
	);
	const data = await res.json();
	if (res.ok) return data.data;
	else throw new Error(res.statusText);
};
