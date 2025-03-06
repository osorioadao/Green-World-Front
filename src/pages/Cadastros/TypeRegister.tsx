import { IoPerson } from "react-icons/io5";
import PrimaryButton from "../../components/PrimaryButton";
import Header from "../../components/Headers/Header";
import Footer from "../../components/Footers/Footer";

function TypeRegister() {

  return (
    <div className="">
      <Header />

     <div className="h-screen flex flex-col items-center justify-center gap-6 bg-pink-500">
      <h2 className="font-medium text-2xl">Quem é vocÊ ?</h2>

      <form action="" className="bg-red-500 h-[150px] w-[180px] flex flex-col justify-center p-3 gap-4">

       <div> 
       <span className="text-lg">Empresa</span>
       <input type="checkbox" name="persona1" id="" />
       </div>

       <div>
       <span className="text-lg">Cidadão Comum</span>
       <input type="checkbox" name="persona2" id="" />
       </div>

       

      </form>

     </div>

     <Footer />

    </div>
  )
}

export default TypeRegister