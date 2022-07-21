import Card from '../card/Card';

import './card-list.styles.scss';


const CardList = (props) =>{


    

    const {people} = props
    console.log(people)
    return(
        <div className = 'card-list'>  
            {people.map((element) => {
                return(
                <Card name = {element.name} />
                )
            })}
        </div>
    )
};




export default CardList