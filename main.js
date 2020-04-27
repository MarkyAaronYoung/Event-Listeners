const pies = [
  {
   type: 'Apple',
   size: 'Family',
   crust: 'Lattuce',
   price: 30,
   imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fimg1.southernliving.timeinc.net%252Fsites%252Fdefault%252Ffiles%252Fstyles%252Fmedium_2x%252Fpublic%252Fimage%252F2019%252F08%252Fmain%252F2589601_mailb_mailbox_apple_pie_003.jpg%253Fitok%253DXkbaosJ5&imgrefurl=https%3A%2F%2Fwww.southernliving.com%2Frecipes%2Fold-fashioned-apple-pie&tbnid=kDeeJH7y_quPSM&vet=12ahUKEwilo5my34npAhVaUs0KHbgdAf4QMygBegUIARDaAg..i&docid=mFy0Iv6LjRhe7M&w=1200&h=668&q=apple%20pie&ved=2ahUKEwilo5my34npAhVaUs0KHbgdAf4QMygBegUIARDaAg',
   owner: 'luke',
   aLaMode: true 
  },
  {
    type: 'Pecan',
    size: 'Personal',
    crust: 'Basic Flaky',
    price: 3,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcAwtkpIvKdnXqtdmqibXRZnwLdyPPhw2otstmrLQHnIUi24DHDcjjl80E5g&usqp=CAc',
    owner: 'michael',
    aLaMode: false 
   },
   {
    type: 'Blueberry',
    size: 'Regular',
    crust: 'Crumb',
    price: 400,
    imageUrl: 'https://dinnerthendessert.com/wp-content/uploads/2019/01/Blueberry-Pie-2.jpg',
    owner: 'michael',
    aLaMode: true
   },
   {
    type: 'pizza pie',
    size: 'XL',
    crust: 'regular',
    price: 6,
    imageUrl: 'https://image.shutterstock.com/image-photo/pizza-260nw-314804678.jpg',
    owner: 'michael',
    aLaMode: true
   },
   {
    type: 'Rhubarb',
    size: 'Pie Sized',
    crust: 'normal',
    price: 2147596,
    imageUrl: 'https://image.shutterstock.com/image-photo/pizza-260nw-314804678.jpg',
    owner: 'matt',
    aLaMode: true
   },
   {
    type: 'Spanakopita',
    size: 'Pan',
    crust: 'Filo',
    price: 8,
    imageUrl: 'https://image.shutterstock.com/image-photo/pizza-260nw-314804678.jpg',
    owner: 'nobody',
    aLaMode: false
   }  
];

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildPies = (pieCollection) => {
   let domString = '';

  for (let i = 0; i < pieCollection.length; i++) {
    domString += `
       <div class="pie">
        <h2>${pieCollection[i].type}</h2>
        <img src="${pieCollection[i].imageUrl}" alt="image of ${pieCollection[i].type} pie">
        <p>This ${pieCollection[i].type} pie is a ${pieCollection[i].size} pie, it's owned by ${pieCollection[i].owner} and has a ${pieCollection[i].crust}</p>
        </div>`;
  }
  
  printToDom('#pieContainer, domString);
}

const init = () => {
  console.log('make sure it works')
}

init();
