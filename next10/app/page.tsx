import Posts from "./components/Posts"

//route segment config
//If you want to revalidate data that does not use fetch (i.e. using an external package or query builder), you can use the route segment config.
export const revalidate = 10

export default function Home() {
  return (
     <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Nixon</span>.
        </span>
      </p>
      <Posts/>
    </main>
  )
}
