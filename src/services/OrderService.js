export async function sendOrder(order) {
    const response = await fetch('https://react-http-max-54195-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log('response from database', data); //@DEBUG
  }