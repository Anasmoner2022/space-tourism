
/**
 * CSS Links
 */
import '../index.css';


const Home = () => {
  return (
    <div className="home w-full h-screen">
    <header className="flex justify-between items-center">
        <img src='../assets/shared/logo.svg' alt="logo" />
        <div className="flex gap-4">
            <p>00 Home</p>
            <p>01 Destination</p>
            <p>02 Crew</p>
            <p>03 Technology</p>
        </div>
    </header>
    <main>
        <p>
            So, you want to travel to
            <span className="">Space</span>  
            Let&apos;s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we&apos;ll give you a truly out of this world experience!
        </p>
    </main>

    <button>
        Explore
        </button>
    </div>
  )
}

export default Home