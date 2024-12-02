import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoMdArrowDropright } from 'react-icons/io';
import { TiStar } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const DeskripsiProdukRecom = () => {
  return (
    <div className="profile-page">
      <header>
        <div className="logo">
          <img src="/assets/images/logobesar.svg" alt="Logo Ayune" />
        </div>
        <nav>
          <ul>
            <li><Link to="/HomeAfterLogin">BERANDA</Link></li>
            <li><Link to="/AboutUs_Login">TENTANG KAMI</Link></li>
            <li><Link to="/Produk">PRODUK</Link></li>
            <li><Link to="/Ahli">KONSULTASI</Link></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="/profil"><button>Ayyunie</button></Link>
        </div>
      </header>
      <div className='space-y-[30px] bg-white'>
        <section className='bg-[#E3F2ED] py-[5px]'>
          <div className='flex gap-[89px] px-[120px] justify-center'>
            <p className='text-[#4A4A4A] text-[40px] font-bold'>PRODUK</p>
          </div>
        </section>
        {/* Section Detail Produk */}
        <section>
          <div className='grid grid-cols-2 gap-y-[10px] px-[130px] py-[40px] bg-white'>
            <div>
                <div className='flex items-center justify-center'>
                    <img src="/assets/images/cetaphildetail.png" alt="CETAPHIL" />
                </div>
                <p className='text-center font-bold text-[#3B3B3B] text-[20px]'>Kisaran Harga</p>
                <p className='text-center text-[12px]'>Rp155.000 - Rp167.000</p>
            </div>
            <div className='space-y-[21px]'>
                <div className='text-[#3B3B3B]'>
                    <p className='text-[40px]'><span className='font-bold'>CETAPHIL - </span>Hydrating Foaming 
                    Cream Cleanser</p>
                </div>
                <div className='text-[#3B3B3B]'>
                    <p className='font-bold text-[24px]'>Deskripsi</p>
                    <p className='text-[16px] text-justify'>Pembersih krim yang berubah menjadi busa ini membersihkan tanpa membuat kering skin barrier serta sudah teruji secara klinis efektif membersihkan kotoran, minyak, dan riasan. Diformulasikan dengan aloe vera yang menenangkan, glycerin yang menghidrasi, panthenol (pro-vitamin B5), dan niacinamide (vitamin B3), produk ini membuat kulit terasa terhidrasi, lembut, dan halus setelah digunakan. Formulanya juga menjaga lapisan pelindung alami dan pH kulit untuk mengurangi tanda-tanda kulit sensitif.</p>
                </div>
                <div className='text-[#3B3B3B]'>
                    <p className='font-bold text-[24px]'>Komposisi</p>
                    <p className='text-[16px] text-justify'>Aqua, Sodium Cocoyl Isethionate, Glycerin, Glycol Distearate, Sodium Cocoyl Glutamate, Cocamidopropyl Betaine, Sodium Lauroyl Sarcosinate, Cetearyl Alcohol, Niacinamide, Panthenol, Aloe Barbadensis Leaf Juice Powder, Pantolactone, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Arginine, Propylene Glycol, Sodium Chloride, Xanthan Gum, Ethylhexylglycerin, Phenoxyethanol, Citric Acid. FIL.1815.V00</p>
                </div>
                <div className='text-[#3B3B3B]'>
                    <p className='font-bold text-[24px]'>Cara Pemakaian</p>
                    <ol>
                        <li>1. Basahi kulit dan tuangkan pembersih ini ke telapak tangan.</li>
                        <li>2. Usap-usap krim hingga terbentuk busa, tambahkan sedikit air untuk busa yang lebih banyak.</li>
                        <li>3. Pijatkan busa pada kulit secara lembut dengan gerakan memutar. Bilas hingga bersih dan keringkan.</li>
                    </ol>
                </div>
                <div className='text-[#3B3B3B]'>
                    <p className='font-bold text-[24px]'>Link Pembelian</p>
                    <div className='flex items-center justify-start gap-[8px]'>
                        <Link to="https://shopee.co.id/Cetaphil-Hydrating-Foaming-Cream-Cleanser-236ml-i.30736001.29407441865?sp_atk=4946c549-b4eb-4e1d-92d7-1104a4a6e3b5&xptdk=4946c549-b4eb-4e1d-92d7-1104a4a6e3b5"><img className='w-[76px] h-[76px]' src="/assets/images/shopee.png" alt="shopee" /></Link>
                        <Link to="https://www.tokopedia.com/nihonmart/senka-perfect-whip-berry-bright-100g?extParam=ivf%3Dfalse%26keyword%3Dsenka+perfect+whip+berry+bright%26search_id%3D202411231704385EF27DE50DE81D3CA6PW%26src%3Dsearch"><img className='w-[66px] h-[66px]' src="/assets/images/tokopedia.png" alt="tokopedia" /></Link>
                    </div>
                </div>
            </div>
          </div>
        </section>
        <section className='bg-[#E3F2ED] py-[21px] flex justify-center relative'>
          <div className=' px-[120px] justify-center'>
            <p className='text-[#4A4A4A] text-[20px] font-bold text-center mb-[7px]'>Ulasan</p>
            <div className='flex gap-[10px] items-center justify-center'>
                <div className='flex gap-[4.34px] items-center'>
                    <img src="/assets/images/1b.png" alt="1b" />
                    <img src="/assets/images/2b.png" alt="2b" />
                    <img src="/assets/images/3b.png" alt="3b" />
                    <img src="/assets/images/4b.png" alt="4b" />
                    <img src="/assets/images/5b.png" alt="5b" />

                </div>
                <p className='font-bold text-[24.24px]'>4.7 / 5</p>
            </div>
          </div>
          <Link to="/ulasan_produk">
            <button className='px-[11px] bg-[#147A63] text-white font-bold rounded-full h-[37px] w-[200px] py-[50px] text-[20px] absolute right-[120px] top-[16px]'>Berikan Ulasan</button>
          </Link>
        </section>
        <section className='px-[121px] flex items-center justify-center pb-[18px]'>
            <div>
                <div className='bg-[#E3F2ED] w-[1199px] rounded-[15px] pl-[17px] py-[17px] pr-[27px] flex justify-start gap-[47px] mb-[10px] '>
                    <div className='flex gap-[8px] items-center'>
                        <img src="/assets/images/cap1.png" className='rounded-full w-[75px] h-[75px] object-cover' alt="expert6" />
                        <div>
                            <div>
                                <div className='flex justify-between font-bold text-[20px] text-[#333333]'>
                                    <p>Mila S.009</p>
                                    <p className='flex items-center'><TiStar  className='text-[#147A63] text-xl'/>4</p>
                                </div>
                                <p className='text-[10px]'>22/10/2024</p>
                            </div>
                            <div className='flex gap-x-[8px] text-[#333333]'>
                                <div className='w-fit text-[10px]'>
                                    <p className='font-bold'>Umur</p>
                                    <p>27</p>
                                </div>
                                <div className='w-fit text-[10px]'>
                                    <p className='font-bold'>Tipe Kulit</p>
                                    <p>Kombinasi</p>
                                </div>
                                <div className='w-fit text-[10px]'>
                                    <p className='font-bold'>Masalah Kulit</p>
                                    <p>Sangat Kering</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className='text-[12px] w-[537px] flex items-center justify-center'>
                    Bagussss.. cocok di kulit. Gentle wash bikin kulit gak kering. Best deh. Cocok untuk semua jenis kulit. Suka banget sama produk ini aku repurchasevterus . Yuk rekomen banget untuk semuanya yang punya kulit sensitif sama produk yang berat
                    </p>
                    <div className='flex gap-[15px] items-center'>
                        <img src="/assets/images/imagecetaphil1.png" className='rounded-lg w-[75px] h-[75px] object-cover' alt="imagecetaphil1" />
                        <img src="/assets/images/imagecetaphil2.png" className='rounded-lg w-[75px] h-[75px] object-cover' alt="imagecetaphil2" />
                        <img src="/assets/images/imagecetaphil3.png" className='rounded-lg w-[75px] h-[75px] object-cover' alt="imagecetaphil3" />

                    </div>
                </div>
                <div className='bg-[#E3F2ED] w-[1199px] rounded-[15px] pl-[17px] py-[17px] pr-[27px] flex justify-start gap-[47px] mb-[10px] '>
                    <div className='flex gap-[8px] items-center'>
                        <img src="/assets/images/cap2.png" className='rounded-full w-[75px] h-[75px] object-cover' alt="expert6" />
                        <div>
                            <div>
                                <div className='flex justify-between font-bold text-[20px] text-[#333333]'>
                                    <p>Sarah</p>
                                    <p className='flex items-center'><TiStar  className='text-[#147A63] text-xl'/>5</p>

                                </div>
                                <p className='text-[10px]'>01/10/2024</p>
                            </div>
                            <div className='flex gap-x-[8px] text-[#333333]'>
                                <div className='w-fit text-[10px]'>
                                    <p className='font-bold'>Umur</p>
                                    <p>16</p>
                                </div>
                                <div className='w-fit text-[10px]'>
                                    <p className='font-bold'>Tipe Kulit</p>
                                    <p>Kering</p>
                                </div>
                                <div className='w-fit text-[10px]'>
                                    <p className='font-bold'>Masalah Kulit</p>
                                    <p>Sensitif</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className='text-[12px] w-[537px] flex items-center justify-center'>
                    Udah 3 tahun selalu pakai cetaphil yg gentle dan sekarang pingin coba yg hydrating foaming semoga cocok dan beneran bagus untuk hydarasi kulit
                    </p>
                    <div className='flex gap-[15px] items-center'>
                        <img src="/assets/images/imagecetaphil4.png" className='rounded-lg w-[75px] h-[75px] object-cover' alt="imagecetaphil4" />

                    </div>
                </div>
                <div className='bg-[#E3F2ED] w-[1199px] rounded-[15px] pl-[17px] py-[17px] pr-[27px] flex justify-start gap-[47px] mb-[10px] '>
                    <div className='flex gap-[8px] items-center'>
                        <img src="/assets/images/cap3.png" className='rounded-full w-[75px] h-[75px] object-cover' alt="expert6" />
                        <div>
                            <div>
                                <div className='flex justify-between font-bold text-[20px] text-[#333333]'>
                                    <p>Diandrea D.</p>
                                    <p className='flex items-center'><TiStar  className='text-[#147A63] text-xl'/>5</p>
                                </div>
                                <p className='text-[10px]'>27/09/2024</p>
                            </div>
                            <div className='flex gap-x-[8px] text-[#333333]'>
                                <div className='w-fit text-[10px]'>
                                    <p className='font-bold'>Umur</p>
                                    <p>23</p>
                                </div>
                                <div className='w-fit text-[10px]'>
                                    <p className='font-bold'>Tipe Kulit</p>
                                    <p>Kombinasi</p>
                                </div>
                                <div className='w-fit text-[10px]'>
                                    <p className='font-bold'>Masalah Kulit</p>
                                    <p>Beruntusan</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <p className='text-[12px] w-[537px] flex items-center justify-center'>
                    Aku pemakaian yang ke 3 bulan ini. jujur cocok banget bikin kulit aku lembab after cuci muka. juga ada perubahan kulit aku mendingan sama bruntusan dan jadi cerahan. pokoknya approve!
                    </p>
                    <div className='flex gap-[15px] items-center'>
                        <img src="/assets/images/imagecetaphil5.png" className='rounded-lg w-[75px] h-[75px] object-cover' alt="imagecetaphil5" />

                    </div>
                </div>
                <div className='flex items-center justify-center gap-[17px]'>
                    <FaChevronLeft className='text-xl' />
                    <div className='flex gap-[7px]'>
                    <p className="flex items-center justify-center rounded-full bg-[#147A63] text-white text-[24px] w-[50px] h-[50px] font-bold">
                        1
                    </p>
                    <p className="flex items-center justify-center rounded-full bg-[#E3F2ED] text-black text-[24px] w-[50px] h-[50px] font-bold">
                        2
                    </p>

                    </div>
                    <FaChevronRight className='text-xl' />
                </div>
            </div>
        </section>
      </div>

      <footer className="aboutus-footer">
        <div className="footer-separator"></div>
        <div className="footer-container">
          <div className="footer-logo">
            <img src="/assets/images/logobesar.svg" alt="Logo Ayune" />
          </div>
          <div className="footer-content">
            <div className="customer-care">
              <h3>Layanan Pelanggan</h3>
              <p>Whatsapp: +62-851-6564-4356</p>
              <p>Instagram: @ayunneconsultation</p>
              <p>Email: ayunneconsultation@gmail.com</p>
              <p>
                <strong>Jam operasional:</strong><br />
                Senin-Jumat: 10:00 - 21:00 WIB<br />
                Sabtu: 10:00 - 17:00 WIB
              </p>
            </div>
            <div className="account">
              <h3>Akun Saya</h3>
              <p><Link to="/profil">Profil</Link></p>
              <p><Link to="/signup">Daftar</Link></p>
              <p><Link to="/Login">Masuk</Link></p>
            </div>
            <div className="social-media">
              <h3>Ikuti Kami:</h3>
              <div className="social-icons">
                <a href="#"><img src="/assets/images/instagram.png" alt="Instagram" /></a>
                <a href="#"><img src="/assets/images/twt.png" alt="Twitter" /></a>
                <a href="#"><img src="/assets/images/yt.png" alt="YouTube" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>©AYUNNE, 2024. ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  )
}

export default DeskripsiProdukRecom