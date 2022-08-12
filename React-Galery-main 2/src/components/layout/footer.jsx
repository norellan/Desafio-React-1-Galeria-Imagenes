import {Container} from 'react-bootstrap';
import React, { Component }  from 'react';


const FooterComponent = () => {
return (    
        <footer className='bg-light text-center text-lg-start text-light bg-dark py-4'>
            <Container className='d-flex justify-content-between align-items-center'>
                <h5 className='d-flex justify-content-start col-md-4'><a  href='mailto:Norellan@gmail.com' className="text-light text-decoration-line">Contacto</a></h5>
                <div className='d-flex justify-content-center col-md-4 flex-column'>
                    <h3 className='text-center'>Discopatía</h3>
                    <p className='text-center'> Tienda de discos y vinilos con los mejores precios del país</p>   
                </div>
                <h5 className='d-flex justify-content-end col-md-4 m-5 text-light'><a  href='https://www.facebook.com/caimanrecord' className="text-light text-decoration-line">Conocenos</a></h5>
            </Container>
        </footer>
    )
}

export default FooterComponent;