import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';
import AlertComponent from "./Components/Alert";

const AppContext = createContext(null);

const AppProvider = ({children}) => {
    const [alertMessage, setAlertMessage] = useState("");
    const [alertSeverity, setAlertSeverity] = useState("");
    const [alertVariant, setAlertVariant] = useState(null);

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
        });
    
        return () => unsubscribe();
      }, []);

    const timeoutDuration = 4000;

    const showAlertMessage = (message, severity, variant) => {
        setAlertMessage(message);
        setAlertSeverity(severity);
        setAlertVariant(variant);

        setTimeout(() => {
            setAlertMessage("");
        }, timeoutDuration);
    }


    const sharedState = {
        showAlertMessage,
        user
    };

    return (
        <div>
            <AppContext.Provider value={sharedState}>
                {children}
                
                { alertMessage &&
                    <div
                        style={{
                            position: 'fixed',
                            left: 0,
                            bottom: 0,
                            width: '100%',
                            padding: 2
                        }}
                    >
                        <AlertComponent variant={alertVariant} severity={alertSeverity}>{alertMessage}</AlertComponent>
                    </div>
                      
                }
            </AppContext.Provider>
        </div>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === null) {
      throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};

export default AppProvider;

//