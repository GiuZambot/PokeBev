import {useEffect, useState} from 'react';
import BerryImage from '../BerryImage/BerryImage';
import * as styles from './Berry.module.css';
import ModalBerry from '../ModalBerry/ModalBerry'

type BerryData = {
 
  name: string,
  url: string,
 
}

interface Data  {
  natural_gift_power: number ,
  smoothness: number,
  growth_time: number,
  name: string,
  item: BerryData
}

function Berry  (parametros: BerryData)  {

   const [berries, setBerry] = useState<Data | undefined>(undefined);
   const [modalShow, setModalShow] = React.useState(false);
   

  useEffect(() => { //faz a chamada, mas nao tem resposta
    fetch(parametros.url)
    .then((response) => response.json()) //espera a resposta
    .then((data)=> setBerry(data)); //espera o json ficar pronto
  }, []);

  
 if(!berries){
   //Resposta enquanto não temos a informação
  return (
  
    <div className={styles.default.Berry} data-testid="Berry">
      {parametros.name}
           
      carregando berries...

    </div>
  )
  } else{ 
    //Resposta quando temos a informação
    
  return (
    <div>
       <ModalBerry
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className={styles.default.Berry} data-testid="Berry">
      
        {/* {berries.name}
        <BerryImage name={berries.item.name} url={berries.item.url} />
        
        <ul>
          <li>
            Natural Gift Power:{berries.natural_gift_power}
          </li>
          <li>
            Smoothness:{berries.smoothness}
          </li>
          <li>
            Growth Time:{berries.growth_time}
          </li>
        </ul> */}
        
      </div>
      
    </div>  
  ) 
  }
}

export default Berry;
