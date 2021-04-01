import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>YUGAM CTF 2021</h1>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLqmTp7gddpFeR9WCeojOV39pSt1THjwNuaw&usqp=CAU' />
          <p>
              F.R.I.D.A.Y. , also known as Female Replacement Intelligent Digital Assistant Youth is a natural-language user interface created by Tony Stark, designed to work with his Iron Man armor. She served as Stark's main user interface computer system during the final battle between the Avengers and Ultron in Sokovia and to find information about Helmut Zemo. In contrast to J.A.R.V.I.S.'s voice code which was patterned after a male English accent, F.R.I.D.A.Y.'s is patterned after a female Irish one.It was made after the death (by Ultron) of J.A.R.V.I.S.It is known that the software is developed in C++ and is proprietary. The details of the design remain unknown. 
          </p>
            </div>
         );
    }
}
 
export default Home;