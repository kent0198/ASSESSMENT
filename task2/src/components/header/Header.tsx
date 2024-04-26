import Button from "../button/Button"

const Header = () => {
  return (
    <div className='z-50 fixed inset-x-0 top-0 bg-white'>
      <div className="flex text-center items-center justify-between h-20">
        <div className=" flex justify-center items-center gap-8 ml-16 text-base leading-6 font-sans">
          <div className="text-black">Giới thiệu</div>
          <div>Tính năng</div>
          <div>Đối tác</div>
          <div>Liên hệ</div>
        </div>
        <div className="mr-10">
          <img className=" mr-16 w-[118px] h-40" src='https://shub.edu.vn/images/landing/ver3/header-section/logo.svg' alt="invalid" />
        </div>
        <div className="flex mr-12 gap-10 font-sans text-base">
          <Button title="Đăng nhập" color="text-gray-900" hover="bg-gray-400" />
          <Button title="Đăng kí" color="text-white" background=" bg-blue-500" />
        </div>
      </div>
    </div>
  )
}

export default Header