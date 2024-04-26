import React from 'react'

const Nav = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <div>
        <img className='w-14 h-14' src='https://shub.edu.vn/_next/image?url=%2Fimages%2Flanding%2Fver3%2Fimage-section%2Fnetworking.gif&w=64&q=75' />
      </div>
      <div className=''>
        <div className='text-center items-center justify-center font-semibold text-3xl leading-10 font-sans opacity-90'>
          Hoạt động tiêu biểu từ cộng đồng giáo dục
        </div>
        <div className='text-center font-normal leading-8 font-sans mt-4 text-xl'>
          <div>
            Hình ảnh được chính những giáo viên từ khắp 3 miền ghi lại trong quá trình 
            </div>
            <div>
            giảng dạy, dạy học ứng dụng công nghệ SHub Classroom.
            </div>
        </div>
      </div>
    </div>

  )
}

export default Nav