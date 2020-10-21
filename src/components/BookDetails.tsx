import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';


interface BookDetailsProps extends RouteComponentProps<{id: string}> {}

interface BookDetailsContentProps {
  id:number
}
interface BookDetailsRightProps {
  id: number;
}

const BookDetailsContent: React.FC<BookDetailsContentProps> = ({id}) => {
  return(
    <IonContent>
      <h2 style={{paddingTop: "100px"}}>PDF view</h2>
      Book ID {id}
    </IonContent>
  )}

const BookDetails: React.FC<BookDetailsProps> = ({match}) => <IonPage><BookDetailsContent id={parseInt(match.params.id)} /></IonPage>

export const BookDetailsRight: React.FC<BookDetailsRightProps> = ({id}) => <BookDetailsContent id={id} />;


export default BookDetails;
