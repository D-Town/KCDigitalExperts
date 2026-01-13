import Image from 'next/image'
import { ThemeToggle } from '../components/theme-toggle'

export default function Home() {
  return (
    <>
      <header className="flex justify-end p-4">
        <ThemeToggle />
      </header>
      <div>
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi non odit dolorem sint, soluta, praesentium explicabo minima obcaecati necessitatibus fugiat repudiandae natus reprehenderit id et corrupti debitis quos aperiam! Unde enim repellat odit. Adipisci recusandae minus alias perspiciatis cumque quam veritatis mollitia eius ut, perferendis vitae? Praesentium architecto numquam dolorum.</p>
        <br />
        <ThemeToggle />
      </div>
    </>
  )
}
