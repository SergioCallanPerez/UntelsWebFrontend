import React from 'react';
import logo from '../../assets/logoUntels.png'
import portal from '../../assets/portalLogo.png'

export default function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li><a href='/'><img src={logo}/></a></li>
                    <li><a href='http://transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=13444#.XwbQV21KjIV'><img src={portal}/></a></li>
                    <li></li>
                </ul>
            </nav>
        </header>
    )
}