import type { CSSProperties } from "react";

const firstName = 'Jorge';
const lasName = 'Regalado del Barco';

const favoriteGames = ['Chess', 'Go', 'Checkers'];
const isActive = true;

const address = {
    zipCode: 'ABC-123',
    country: 'Spain'
}

export const MyAwesomeApp = () => {

    const myStyles: CSSProperties = {
        backgroundColor: '#fafafa',
        borderRadius: 20,
        padding: 10,
        marginTop: 30,
    }

    return (
        <div data-testid = "div-app">
            <h1 data-testid="first-name-title">{firstName}</h1>
            <h3>{lasName}</h3>

            <p className="mi-clase-favorita">{favoriteGames.join(', ')}</p>
            <p>{2 + 2}</p>

            <h1>{isActive ? 'Yes' : 'No'}</h1>

            <p 
                style={myStyles}
                >{JSON.stringify(address)}</p>

            
            <p>{address.zipCode}, {address.country}</p>
        </div>
    );
};

// export function MyAwesomeApp() {
//     return (
//         <>
//             <h1>Jorge</h1>
//             <h3>Regalado del Barco</h3>
//         </>
//     )
// }