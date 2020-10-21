import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import {useLocation } from 'react-router-dom';
import { logInOutline, atCircleOutline, archiveOutline, archiveSharp, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp, home, logOut, book, shareOutline, people } from 'ionicons/icons';
import './Menu.css';

import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../store/actions/authActions';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inbox',
    url: '/page/Inbox',
    iosIcon: people,
    mdIcon: people
  },
  {
    title: 'Shared Books',
    url: '/page/Outbox',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Favorites',
    url: '/page/Favorites',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);
  const logoutClickHandler = () => {
    dispatch(signout());
  }

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Rain Books</IonListHeader>
          <IonNote>Read, Manage, Share books</IonNote>
          {!authenticated 
          ?<IonMenuToggle autoHide={false}>
            <IonItem routerLink="/signup" routerDirection="none" lines="none" detail={false} className={location.pathname === "/signup" ? 'selected' : ''}>
              <IonIcon slot="start" ios={atCircleOutline} md={atCircleOutline} />
              <IonLabel>Signup</IonLabel>
            </IonItem>
            <IonItem routerLink="/login" routerDirection="none" lines="none" detail={false} className={location.pathname === "/login" ? 'selected' : ''}>
              <IonIcon slot="start" ios={logInOutline} md={logInOutline} />
              <IonLabel>Login</IonLabel>
            </IonItem>
          </IonMenuToggle>
          :<IonMenuToggle autoHide={false}>
          <IonItem className={location.pathname === "/page/My Books" ? 'selected' : ''} routerLink="/page/My Books" routerDirection="none" lines="none" detail={false}>
            <IonIcon slot="start" ios={book} md={book} />
            <IonLabel>My Books</IonLabel>
          </IonItem>

            {
              appPages.map((appPage, index) => {
              return (
                  <IonItem key={index} className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
              )})
            } 

            <IonItem className="logoutButton" routerDirection="none" lines="none" detail={false} onClick={logoutClickHandler} >
              <IonIcon slot="start" ios={logOut} md={logOut} />
              <IonLabel>Log out</IonLabel>
            </IonItem>
            </IonMenuToggle>}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
