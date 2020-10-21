import { IonRouterOutlet } from '@ionic/react';
import React from 'react';
import { Route } from 'react-router-dom';
import './ExploreContainer.css';
import UserDetailPage from './BookDetails';
import UsersListPage from './BooksList';


interface ContainerProps {
  name: string;
}


const ExploreContainer: React.FC<ContainerProps> = () => {

  return (

      <div>
        <IonRouterOutlet>
        <Route exact path="/page/My Books" component={UsersListPage} />
        <Route path="/page/My Books/users/:id" component={UserDetailPage} exact/>
        </IonRouterOutlet>
      </div>
    
  );
};


export default ExploreContainer;
