import IMG from '../../assets/images/logoSinFondo.png'

function Header() {
    return (
      <> 
        <div className='bg-orange-600 text-white flex justify-around'> 
          <div> 
            <img className='w-20 rounded-xl shadow-lg' src={IMG} alt="Logo de la imagen" />
          </div> 

          <div className='text-nowrap flex items-center'> 
            <a href="">Los más vendidos</a> 
            <a className='mx-[5%]' href="">Quienes somos</a> 
            <a href="">Contacto</a> 
          </div>
        </div>
      </>
    );
  }
  
  export default Header;   

