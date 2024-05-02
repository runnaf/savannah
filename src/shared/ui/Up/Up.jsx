// // import styles from './Ups.module.scss';
// import Up from './../../assets/photo/Up.png';
// import {useEffect, useState} from "react";



// function Up() {

//     const [backToTopBtn, setBackToTopBtn] = useState(false);

//     useEffect(() => {
//         window.addEventListener("scroll", () =>{
//             if(window.scrollY > 100){
//                 setBackToTopBtn(true)
//             } else {
//                 setBackToTopBtn(false)
//             }
//         })
//     }, [])

//     const scrollUp = () => {
//         window.scrollTo({
//             top: 0,
//         })
//     }

//     return(
//         <div>
//             {backToTopBtn && (
//                 <button className="backToTopBtn"
//                 onClick={scrollUp}><img src={Up} alt="upBtn"/></button>
//             )}
//         </div>
//     )
// }

// export default Up;









