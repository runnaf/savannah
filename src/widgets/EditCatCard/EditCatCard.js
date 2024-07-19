// import { Stack } from '../../shared/ui/Stack/Stack';
// import styles from './EditCatCard.module.scss';
// import { EditAddForm } from "../../feature/EditAddForm/ui/EditAddForm/EditAddForm";
// import editPhoto from '../../shared/assets/photo/kitten1.png';
// import { Button } from '../../shared/ui/Button/Button';
// import { arrowIcon } from '../../shared/assets/svg/arrowIcon';
// import { deleteIcon } from "../../shared/assets/svg/deleteIcon";
// import closeButton from '../../shared/assets/photo/close.png';
// import { Text } from "../../shared/ui/Text/Text";

// export const EditCatCard = ({ changeEditModal }) => {
// <<<<<<< HEAD
//     const id = useId();   
// =======
  
// >>>>>>> 48a6e8cd4136ae0b4dcae7e7dfed1c347550a8ec

//     return (
//         <Stack 
//             justifyContent="justifyCenter"
//             alignItems="alignCenter"            
//             direction='column'
//             gap='32'
//             className={styles.edit}
//         >
// <<<<<<< HEAD
//             <div className={styles.photoPosition}>                
//                 <img className={styles.editPhoto}
//                      src={editPhoto} alt="editPhoto"/>

//                 <label className={styles.catLabel}  htmlFor={id}>
//                     <Input
//                         type ='file'
//                         id = {id}                                  
//                         className={styles.catInput} 
//                     />     
//                     <img className={styles.editIcon}
//                         src={editIcon} alt="editIcon" />            
//                 </label>   
//             </div>

// =======
// >>>>>>> 48a6e8cd4136ae0b4dcae7e7dfed1c347550a8ec
//                 <img
//                     className={styles.closeButton}
//                     src={closeButton} alt="закрыть"
//                     onClick={changeEditModal}
//                 />          

//                 <Text type='h3' size='l' className={styles.title}>
//                     Редактировать карточку питомца
//                 </Text>
//                 <div  className={styles.contentPosition}>
//                 <EditAddForm />                 
//                 <div className={styles.photoPosition}>                
//                         <img className={styles.editPhoto}
//                             src={editPhoto} alt="editPhoto"/> 
//                 </div>
//                 </div>
//                 <div className={styles.save__btn}>
//                     <Button className={styles.button}>
//                         сохранить {arrowIcon()}
//                     </Button>
//                 </div>
//                 <div className={styles.delete__btn}>
//                     <Button variant="secondary" className={styles.buttonDelete}>
//                         удалить {deleteIcon()}
//                     </Button>
//                 </div> 
//         </Stack>
//     )
// }
