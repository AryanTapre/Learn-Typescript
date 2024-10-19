// You can create functions with a type helpers
// mapped over the top, and pass the type manually...

const makeFetch = <T>(url:string): Promise<T>  => {
    return fetch(url).then((res) => res.json());
}

makeFetch<{firstName:string, lastName:string}>("/api/v1/get-users").then((res) => {
    console.log(res);
})