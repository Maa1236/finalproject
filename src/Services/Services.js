const url = "http://localhost:3333/login";

export async function Services() {
   
    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
         
      },
      
      body: JSON.stringify({ 
        email: "dev@dev.com",
    password: "developer"
    })
    });
    return response.json(); 
  }

  Services()
  .then(data => {
    console.log(data); 
  });