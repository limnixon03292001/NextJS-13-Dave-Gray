
export default async function getAllUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const res = await fetch(url);

    if(!res.ok) throw new Error('Failed to fetch data');
    
    return res.json();
}
