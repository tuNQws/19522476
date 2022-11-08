import * as React from "react";

class MyComponent extends React.Component {
// Ex 1
//    state = {
//         first: false,
//         second: true,
//     };

//     render() {
//         const {first, second } = this.state;

//         return (
//             <main>
//                 <section>
//                     <button disable={first}></button>
//                 </section>
//                 <section>
//                     <button disable={second}>Second</button>
//                 </section>
//             </main>
//         )
//     }
// }

// Ex 1.1
    state = {
        heading:" React Awesomesauce (Busy)",
        content: "Loading...",
    };

    constructor() {
        super();

        setTimeout(() => {
            this.setState({
                heading: "React Awesomesauce",
                content: "Done!",
            })
        }, 3000);
    }

    render() {
        const {heading, content} = this.state;

        return (
            <main>
                <h1>{heading}</h1>
                <p>{content}</p>
            </main>
        );
    }
}

export default MyComponent;