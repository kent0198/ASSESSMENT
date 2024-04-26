import Nav from "../nav/Nav"
import SlickSlider from "./SlickSlider"

const Sentence = () => {
  
    return (
        <div className=" flex flex-col gap-14 items-center mt-20">
           <Nav/>
           <div className="justify-center items-center gap-10 w-[1100px] text-center">
                    <SlickSlider/>
           </div>
        </div>
    )
}

export default Sentence