import OurKittensItem from "./OurKittensItem";
import styles from './Kittens.module.scss';




const Kittens = ({kittensData}) => {  

    return (
        
        <div className={styles.kittens__row}>      

            {kittensData.map((element, index) =>{              
                return (   
                        <div key={index}>
                            <OurKittensItem
                                element={element}
                            />          
                        </div>                  
                        );                        
                })}
                
        </div>
        )
      
           
        
    }

export default Kittens;