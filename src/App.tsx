import Footer from "src/components/Footer"
import Navigator from "./Navigation"
import { IconContext } from "react-icons"
import RandomStars from "src/components/atoms/RandomStars"

function App() {
  return (
    <>
      <IconContext.Provider value={{ className: "react-icons", color: "white", size: "1.5em" }}>
        <RandomStars />
        <Navigator />
        <Footer />
      </IconContext.Provider>
    </>
  )
}

export default App
