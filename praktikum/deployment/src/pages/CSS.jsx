import React from 'react'
import image from '../Assets/CSS3_logo_and_wordmark.svg.png'

const CSS = () => {
  return (
    <div className='container-fluid'>
    <div className='d-flex justify-content-center mt-4 h2 '>
      Javascript Refreshment
    </div>
    <div className='row ps-3 pe-3'>
      <div className='col-6'>
      <div className='h4 justify-content-center d-flex'>Pengertian</div>
        <div className='h5'>
        Cascading Style Sheet (CSS) merupakan aturan untuk mengatur beberapa komponen dalam sebuah web sehingga akan lebih terstruktur dan seragam. CSS bukan merupakan bahasa pemograman.
        Sama halnya styles dalam aplikasi pengolahan kata seperti Microsoft Word yang dapat mengatur beberapa style, misalnya heading, subbab, bodytext, footer, images, dan style lainnya untuk 
        dapat digunakan bersama-sama dalam beberapa berkas (file). Pada umumnya CSS dipakai untuk memformat tampilan halaman web yang dibuat dengan bahasa HTML dan XHTML.
        CSS dapat mengendalikan ukuran gambar, warna bagian tubuh pada teks, warna tabel, ukuran border, warna border, warna hyperlink, warna mouse over, spasi antar paragraf,
        spasi antar teks, margin kiri, kanan, atas, bawah, dan parameter lainnya. CSS adalah bahasa style sheet yang digunakan untuk mengatur tampilan dokumen. Dengan adanya 
        CSS memungkinkan kita untuk menampilkan halaman yang sama dengan format yang berbeda.
        </div>
        <div className='h5'>
        Nama CSS didapat dari fakta bahwa setiap deklarasi style yang berbeda dapat diletakkan secara berurutan, yang kemudian membentuk hubungan ayah-anak (parent-child) pada setiap style.
         CSS sendiri merupakan sebuah teknologi internet yang direkomendasikan oleh World Wide Web Consortium atau W3C pada tahun 1996. Setelah CSS distandardisasikan, Internet Explorer
          dan Netscape melepas browser terbaru mereka yang telah sesuai atau paling tidak hampir mendekati dengan standar CSS.
        </div>
      </div>
      <div className='col-6'>
        <div className='d-flex justify-content-center align-items-center'>
          <img src={image} alt="image" className='md figure img-fluid body-bg' style={{width:"400px"}} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default CSS