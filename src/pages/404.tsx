export default function Page404() {
  return (
    <>
    <div className="h-screen text-gray-300 gap-3 text-404 text-xl flex flex-col justify-center items-center bg-[rgb(5,5,20)]">
      <p>Oh! You poor lost soul!</p>
      <p><a className="text-purple-500" href="/home"> Click me</a> to go back home.</p>
      <p>And don't go wandering off again until I'm done, okay?</p>
    </div>
    </>
  )
}