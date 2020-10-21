import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonMenuButton, IonNote, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { BookDetailsRight } from './BookDetails';
import useWindowSize from "./UseWindowSize";
import { add, addOutline, addSharp, filter, filterCircle, filterSharp, heartOutline, search, trash } from 'ionicons/icons';

import '../styles/bookListStyle.scss';

const AddFilterPanel: React.FC = () =>{
  return(
      <div>
        <div className="addFilterHead">
          <IonListHeader>Rain Books</IonListHeader>
          <IonNote>Read, Manage, Share books</IonNote>
        </div>
        <div className="addFilterDiv" >
          <IonMenuButton></IonMenuButton>
          <IonTitle>Your Books</IonTitle>
          <IonButton size="small">
            <IonIcon icon={search}></IonIcon>
          </IonButton>
          <IonButton size="small">
            <IonIcon icon={filterSharp}></IonIcon>
          </IonButton>
          <IonButton size="small">
            <IonIcon icon={add}></IonIcon>
            <IonLabel>Add new</IonLabel>
            <input type="file"  accept="application/pdf" style={{ position: "absolute",opacity: "0", border: "1px solid black", height: "40px", width: "120px" }} ></input>
          </IonButton>

        </div>
        
      </div>
    )
  }
// npm install react-pdf

  interface ListItemUiProps {
    id: number;
    clickFunction: () => void;
  }
  const ListItemUi: React.FC<ListItemUiProps> = ({id, clickFunction}) => {
    const bookThumbNail = "./assets/book thumbnail-01.jpg"
    return(
      <IonItem button onClick={clickFunction}>
        <IonThumbnail slot="start" className="bookThumbnail">
          <img src={bookThumbNail} alt="Book Thumbnail" />
        </IonThumbnail>
        <IonLabel>
          <h1>Book {id}</h1>
          <p>By Author name</p>
          <p>Last read: 12 Oct 2020</p>
        </IonLabel>

        <IonButton fill="clear">
          <IonIcon icon={trash}></IonIcon>
        </IonButton>
        
        <IonButton fill="clear">
          <IonIcon icon={heartOutline}></IonIcon>
        </IonButton>
      </IonItem>
    )
  }


const BooksList: React.FC = () => {
  let history = useHistory();
  let size:any = useWindowSize();

  const [itemId, setItemId] = useState<number>(0);

  const pushDetails = (id:number)=>{
    if(size.width < 600){
      history.push("/page/My Books/users/"+id)
    }else{
      setItemId(id);
    }
  }

    return (
      <IonPage>
        {/* <IonHeader><IonToolbar><IonTitle></IonTitle></IonToolbar></IonHeader> */}

        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol sizeMd="4">
                
                <AddFilterPanel />
                <IonContent className="bookListContent">
                <IonList>
                
                  <ListItemUi id={1} clickFunction={()=>pushDetails(1)} />
                  <ListItemUi id={2} clickFunction={()=>pushDetails(2)} />
                  <ListItemUi id={3} clickFunction={()=>pushDetails(3)} />
                  <ListItemUi id={4} clickFunction={()=>pushDetails(4)} />
                  <ListItemUi id={1} clickFunction={()=>pushDetails(1)} />
                  <ListItemUi id={2} clickFunction={()=>pushDetails(2)} />
                  <ListItemUi id={3} clickFunction={()=>pushDetails(3)} />
                  <ListItemUi id={4} clickFunction={()=>pushDetails(4)} />
                  <ListItemUi id={1} clickFunction={()=>pushDetails(1)} />
                  <ListItemUi id={2} clickFunction={()=>pushDetails(2)} />
                  <ListItemUi id={3} clickFunction={()=>pushDetails(3)} />
                  <ListItemUi id={4} clickFunction={()=>pushDetails(4)} />
                </IonList>

                </IonContent>
              </IonCol>

              {
                size.width > 600 ?
                <IonCol>
                <BookDetailsRight id={itemId} ></BookDetailsRight>
                </IonCol>
                :null
              }
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };

export default BooksList;
