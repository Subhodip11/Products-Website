const axios = require('axios').default;
const fs = require('fs')

const apiKey = 'zZHWtrOGvmDpTJy8FaNkeQ==k6lfLdw8BrEEZLxm';
const uri = 'https://api.api-ninjas.com/v1/randomimage?category=technology'

async function generateRandomImage() {
    try {
        const response = await axios.get(uri, {
          headers: {
            'X-Api-Key': apiKey, 
          },
          responseType: 'blob'
        })
        return response.data;
    } catch (error) {
        return error.message
    }

}

// app.get('/image', async (req, res)=>{
//   const imageResponse = await generateRandomImage()
//   if(imageResponse){
//     return res.json({image: `data:image/jpeg;base64,${imageResponse}`});
//   }
// })

async function generateProducts() {
  const products = [];

  for (let i = 1; i <= 50; i++) {
    const product = {
      price: getRandomPrice(),
      title: `Product ${i}`,
      image: `data:image/jpeg;base64,${await generateRandomImage()}`, // Assuming images are named like image1.jpg, image2.jpg, etc.
      description: `Description for Product ${i}`,
      productRatings: generateRatings()
    };

    products.push(product);
  }

  return products;
}

function generateRatings(){
  return Math.floor(Math.random()*(6-2)+1)
}

function getRandomPrice() {
  // Generate a random price between 10 and 100
  return (Math.random() * (100 - 10) + 10).toFixed(2);
}

const productArray = generateProducts();
productArray.then((data)=>{
    const productJsonData = JSON.stringify(data, null, 2);
    fs.writeFile('products.json',productJsonData,(err)=>{
        if(err)console.log(err.message)
        console.log('File created Successfully')
    })
}).catch(err=>{
    console.log(err.message)
})
