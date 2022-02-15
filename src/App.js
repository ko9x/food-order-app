import Header from './components/Layout/Header';
import { useState } from 'react';
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart';
import {CartProvider} from './providers/CartProvider';
import {MealsProvider} from './providers/MealsProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider >
      {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <MealsProvider>
          <Meals />
        </MealsProvider>
      </main>
    </CartProvider>
  );
}

export default App;
