import { FC } from "react";

const ErrorPage: FC = () => {
    return (  
        <main className="error-page">
            <div className="background" />
            <div className="error">
                <h1>404</h1>
                <h2>Ocurrió un error</h2>
                <a href="/">Volver</a>
            </div>
        </main>
    );
}
 
export default ErrorPage;