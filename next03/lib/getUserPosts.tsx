
export default async function getUserPosts( userId: string ) {
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  
  const res = await fetch(url,  { next: { revalidate: 60 } })

  if(!res.ok) return undefined

  return res.json()
}
