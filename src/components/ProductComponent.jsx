import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { AppContext } from '../context/UserContext.jsx';
import { useContext, useEffect, useState } from 'react'

import viteLogo from '../../public/vite.svg'

function ProductComponent({title, id}){
  const { basket, setBasket } = useContext(AppContext);


  const [item, setItem] = useState({
    title: title | "Mouse Asus",
    id: id | 231
  });

  useEffect(() => {
      setItem({title, id})
    return () => {
    };
  }, []);




  function addToBasketHandler(){
    // add one item to the basket.items array
    setBasket({
      ...basket, // <= make a copy of existing basket
      items: [ // <= change items to new array
        ...basket.items, // <= make copy of existing basket.items value
        item // <= add new item to the list of existing items
      ]
    })
  }
  return(
    <Card style={{ width: '18rem', margin: '0 5px' }}>
      <Card.Img variant="top" style={{ padding: '10px 55px' }} src={viteLogo} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="primary" onClick={()=> addToBasketHandler()}>Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}
export { ProductComponent }
