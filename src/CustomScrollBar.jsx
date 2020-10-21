

    export const customScroll = async () => {
      const content = document.querySelector('ion-grid');
      const styles = document.createElement('style');
      
      styles.textContent = `
        ::-webkit-scrollbar {
          width: 20px;
        }
    
        /* Track */
        ::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px grey; 
          border-radius: 10px;
        }
    
        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: red; 
          border-radius: 10px;
        }
    
        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #b30000; 
        }
      `;
      content.shadowRoot.appendChild(styles);
    };
