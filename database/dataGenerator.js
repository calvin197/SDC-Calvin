const randomShoeSizes = () => {
  const helper = (arr, size) => {
    for (var i = 0; i < 7; i++) {
      let helper = Math.floor(Math.random() * size.length);
      if (!arr.includes(size[helper])) {
        arr.push(size[helper]);
      }
    }
    return arr;
  };
  let arr = [];
  let size = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11];

  helper(arr, size);
  let c = arr.sort((a, b) => a - b);
  return c;
};

const randomClothingSize = () => {
  let size = [
    ["X-Small", "Small", "Medium", "Large", "X-Large"],
    ["Small", "Medium", "X-Large"],
    ["X-Small", "Medium", "Large"],
    ["Small", "Medium", "Large", "X-Large"],
    ["X-Small", "X-Large"]
  ];
  let helper = Math.floor(Math.random() * size.length);
  return size[helper];
};

const randomDesigner = () => {
  let designers = [
    "Gucci",
    "Givency",
    "Burberry",
    "ALice + Olivia",
    "Alexander Wang",
    "Max Mara",
    "Michael Kors",
    "Moschino",
    "Theory",
    "Thom Browne"
  ];
  let helper = Math.floor(Math.random() * designers.length);
  return designers[helper];
};

const randomPrice = (max = 500, min = 5) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const shoesdescription = () => {
  let adjectives = [
    "elegant",
    "beautiful",
    "classy",
    "amazing",
    "expensive",
    "cute",
    "gorgeous",
    "trendy",
    "comfortable"
  ];
  let randomindex = Math.floor(Math.random() * adjectives.length);

  let sentences = [
    `These ${
      adjectives[randomindex]
    } shoes are highly fashionable. Wearable at any occasion.`,
    `Sleek, modern, and ${
      adjectives[randomindex]
    }. Modern sandals to complete your favorite looks.`,
    `Modern strap design brings ${
      adjectives[randomindex]
    }, distinctive attitude to the bridge of a classic fitted sandal with a comfortably cushioned footbed.`,
    `A leather strap design gives a ${
      adjectives[randomindex]
    } signature statement on a slide sandal with a lightly cushioned footbed.`,
    `A raised, vintage-style logo details the vamp of a slide sandal, while a ${
      adjectives[randomindex]
    } palette keeps the look ${adjectives[randomindex]}.`
  ];
  let randomsentenceindex = Math.floor(Math.random() * sentences.length);

  return sentences[randomsentenceindex];
};

const earringdescription = () => {
  let adjectives = [
    "elegant",
    "timeless",
    "classy",
    "amazing",
    "expensive",
    "cute",
    "gorgeous",
    "trendy",
    "comfortable"
  ];
  let randomindex = Math.floor(Math.random() * adjectives.length);

  let sentences = [
    `${
      adjectives[randomindex]
    }, handcrafted studs feature sparkling stones secured by triple-pronged settings.`,
    `Oversized statement earrings made from ${
      adjectives[randomindex]
    } resin suspend ${adjectives[randomindex]} seashell-inspired shapes`,
    `${
      adjectives[randomindex]
    } stones and crystals give a vintage sophistication suitable for any formal occasion.`,
    `These everyday studs have a contemporary feel thanks to a ${
      adjectives[randomindex]
    } front/back design.`,
    `${adjectives[randomindex]} stones center ${
      adjectives[randomindex]
    } stud earrings that expertly catch and reflect the light.`
  ];
  let randomsentenceindex = Math.floor(Math.random() * sentences.length);
  return sentences[randomsentenceindex];
};

const pursesdescription = () => {
  let adjectives = [
    "elegant",
    "timeless",
    "classy",
    "amazing",
    "expensive",
    "cute",
    "gorgeous",
    "trendy",
    "comfortable"
  ];
  let randomindex = Math.floor(Math.random() * adjectives.length);

  let sentences = [
    `A campus-classic styled in textured leather, perfect for those looking for a ${
      adjectives[randomindex]
    } look.`,
    `${
      adjectives[randomindex]
    } backpack crafted from durable scratch-resistant faux leather.`,
    `Star studded and outfitted with single rosette stone. The modern and ${
      adjectives[randomindex]
    } design of this bag makes it extremely versatile.`,
    `An oversized logo gleams from a ${
      adjectives[randomindex]
    } leather bag you can carry as a clutch or sling over your shoulder.`,
    `Supersoft faux leather flips inside-out for a reversible tote makes this a ${
      adjectives[randomindex]
    } on the go bag.`
  ];
  let randomsentenceindex = Math.floor(Math.random() * sentences.length);

  return sentences[randomsentenceindex];
};

const shoesNotClothes = function(){
  return Math.random() < 0.5; 
}

const productNameGenerator = function(){
  const productNames = [
    "Bernelle Mule",
    "Despina Strappy Sandal",
    "Irenee Ankle Strap Sandal",
    "Corlina Ankle Strap Sandal",
    "Lindsay Sandal",
    "Accord Espadrille Platform Sandal",
    "Rockstud T-Strap Pump",
    "So Kate Pointy Toe Pump",
    "Crystal Pavé Linear Drop Earrings",
    "Spear Drop Earrings",
    "Succession Broken Eye Earrings",
    "Cubic Zirconia Chandelier Earrings",
    "Zirconia Teardrop Earrings",
    "Dimensional Floral Stud Earrings",
    "Chiffon Petal Hoop Earrings",
    "Girl Boss Square Hoop Earrings",
    "Malika Earrings",
    "Mingle Mingle Mini Embossed Leather Crossbody Bag",
    "GG Leather Wallet on a Chain",
    "Marmont 2.0 Leather Wallet on a Chain",
    "Ophidia GG Supreme iPhone 7/8 Case",
    "Ophidia GG Supreme Zip-Around Wallet",
    "Megan Leather Crossbody Bag",
    "Top Transport Leather Crossbody Bag",
    "Super Mini Dionysus Leather Shoulder Bag",
    "Soho Disco Leather Bag",
    "idiom - heart of gold bangle",
    "Bar Pull Through Bracelet",
    "Chantal Slide Bracelet",
    "Tulle Cubic Zirconia Slide Bracelet",
    "Crystal hinge bangle",
    "Caviar Icon Stretch Bead Bracelet",
    "Pavé Bar Bracelet",
    "2019 Graduation Cap Charm Expandable Bracelet",
    "Cable Classics Bracelet with 18K Gold, 4mm",
    "Dot Cascade Ruffle Sleeveless Dress",
    "Cap Sleeve Lace Sheath Dress",
    "Chelsea Tiered Ruffle Maxi Dress",
    "Chiffon A-Line Dress",
    "Easy Flirty Minidress",
    "Floral Lace Sheath Dress",
    "Floral Print Linen Blend Minidress",
    "Lace Halter Neck Sheath Dress",
    "Lace Sheath Dress",
    "Mixed Eyelet A-Line Dress",
    "Piped Cami Jumpsuit",
    "Print Handkerchief Hem Midi Dress",
    "Puff Sleeve Off the Shoulder Jumpsuit",
    "Romantic Button Front Dress",
    "Ruffle Sleeve Jumpsuit",
    "Ruffle Wrap Dress",
    "Sleeveless Crepe Jumpsuit",
    "Sunrise Wanderer Minidress",
    "The Motherchic Avalon Faux Wrap Jersey Dress",
    "The Motherchic Summer Nights Maxi Dress",
    "Tiered Ruffle Sleeve Dress"
  ]
  return productNames[Math.floor(Math.random() * productNames.length)]
}

const imageUrlGenerator = function(){
  const images = [
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe1/a758ba8d-3595-4557-9d49-6029a1626e4c.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe1/6fddc649-4738-4674-b261-5e2157822540.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe1/a3b1d9af-4d6c-4200-9158-ea39ed284d29.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe2/5eb19242-e0bc-4cd7-b0e7-0dc1c151a294.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe2/0cfa4e30-57ed-438e-a381-6c572276af58.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe2/cc51ac42-c39f-42f8-a1ba-34b728e3673b.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe3/3e763eca-5cca-4a1e-98e8-77a296504c40.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe3/0b8a2470-73cb-486e-b8a8-c7c3528f2afa.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe3/610627ca-cf64-4ebc-9c4f-1c9be2befe1f.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe4/192863f2-d8e3-41ea-ac01-ee78ae137cc7.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe4/01bae220-1930-4fc1-a3e4-42e67c5d82eb.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe4/37c71216-0542-4901-9a3a-49d90aca1ed6.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe5/ad8cb8a7-9d2d-4c4b-b452-125ef74ec9a4.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe5/5626ca99-a8e0-4395-9289-1ad251ec1972.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe5/9b8b21ac-9d28-4ce7-b0eb-511f771d1b92.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe6/37fdf2ea-75d8-4c1e-aa23-2d341839fbe4.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe6/a2d25cd4-7f4e-4866-a209-244e5f417de1.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe6/b337e0d8-273d-43e8-9a12-c32c0cfcb6fe.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe7/b9931f00-92ad-4636-afea-b8bdd8693188.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe7/4e0ba7ee-5193-4685-8ebe-d3fa394d416e.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe7/d8c15e5f-0c6d-4768-8c1c-30a6f7526118.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe8/b3913457-4a6a-4260-b9a8-ad312fec6060.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe8/2f79a437-ecae-4c7e-a9b6-d859c83d97b8.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe8/0c9f3af8-cf7b-4af2-8baa-1a4009c495c1.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/earrings/earring1.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/earrings/earring2.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/earrings/earring3.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/earrings/earring4.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/earrings/earring5.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/earrings/earring6.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/earrings/earring7.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/earrings/earring8.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/earrings/earring9.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse1/22e1e593-2021-4154-b01a-67e5beb57a79.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse1/d0eb145d-5aba-4530-b9d3-3b6e0bb04638.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse1/0484522c-9ae0-49bb-b6d9-51acc1a0538a.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse2/fce8276c-4c83-472c-9e4f-e915005aa873.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse2/499c41d4-babe-4cca-98b8-ecbcb257b946.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse3/6a90fb60-2d28-4075-8a3c-a4372c398fb7.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse3/a3981dfd-5a1b-4c90-882b-172c1abdc771.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse3/13292131-a5a4-40d7-9aab-abc9c0042fd9.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse4/0d47d76d-e3fe-44de-9572-8f46492ec38a.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse4/f273f943-57ba-40fc-b289-fbb020db1418.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse5/5aff6915-52f1-4868-8636-90678f786c2c.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse5/d3e98dd3-688e-445f-8b6c-b17e4c9af958.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse5/2c54c672-8145-49bd-98bd-030710dac69c.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse6/07eb9795-d84c-49fc-a7fb-7cef9fe9761c.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse6/ab9e9b31-cdc6-445e-99a7-941887dec18d.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse7/4cbb9360-f03e-4e23-94cb-9a4637462824.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse7/c0c72cf9-9a61-471e-81f4-1d8f88ca3c2e.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse7/24a11baa-fdc6-4ce6-998a-60af12e6d7b5.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse8/89a0e424-5db9-4db0-a80d-0b22a4dc1563.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse8/58051413-9a96-4933-bea5-c7b55bd12bb6.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse8/0f1059e5-71dc-4153-8815-11f92923c96a.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse8/0c32c50c-bec0-4ffc-9d3e-9bc53da44b48.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse9/674f554d-425d-4141-8015-fa31c9508b4f.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse9/64c9cf54-440c-49a6-ad0f-aac09fff2cd8.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/bracelets/bracelete1.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/bracelets/bracelet9.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/bracelets/bracelet8.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/bracelets/bracelet7.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/bracelets/bracelet6.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/bracelets/bracelet5.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/bracelets/bracelet4.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/bracelets/bracelet3.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/bracelets/bracelet2.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/dresses/dress1.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/dresses/dress12.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Cap+Sleeve+Lace+Sheath+Dress/Burgundy/806743af-123f-4413-a895-37a32b30d8ab.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Cap+Sleeve+Lace+Sheath+Dress/Burgundy/5cd02fc2-3f72-4404-9844-0cdfd326502d.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Chelsea+Tiered+Ruffle+Maxi+Dress/Black+Pink+Roses+Print/c94c39fc-16d5-48b7-abaa-52a1b117e642.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Chelsea+Tiered+Ruffle+Maxi+Dress/Black+Pink+Roses+Print/11bae32f-dc44-48da-a062-d0dd08e8dd2f.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Chiffon+A-Line+Dress/Red+Chinoise+Dot/2afefa7c-2937-48ae-a838-48a034b37438.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Chiffon+A-Line+Dress/Red+Chinoise+Dot/33579255-948d-43a0-bfbf-e89d1a7099e1.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Easy+Flirty+Minidress/Red+Poppy/c872b7ad-0470-4d58-a292-2f5936435dc2.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Easy+Flirty+Minidress/Red+Poppy/54a1df94-363a-4402-8ade-824f5f8e9a3c.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Lace+Sheath+Dress/Grey-Ivory/6c1254b3-a78d-43e5-977f-f19dd2228a86.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Lace+Sheath+Dress/Grey-Ivory/0fc7a54c-e3a3-4782-aedd-48c4a1017130.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/aacc53a8-06c9-4ded-8d2e-d38f627e9ea7.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/7177af9e-e5cf-4f20-a646-25d09244e4ad.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Lace+Halter+Neck+Sheath+Dress/Lavender/8919c898-78f0-47dc-a1d2-20d8fe1f6abc.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Lace+Halter+Neck+Sheath+Dress/Lavender/07abd02d-0676-4a8e-a913-98b4a5e1f8bc.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Lace+Sheath+Dress/Ash+Blue/c9f12de5-82fb-4dfa-ac65-ac4e24668649.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Lace+Sheath+Dress/Ash+Blue/c9f12de5-82fb-4dfa-ac65-ac4e24668649.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Mixed+Eyelet+A-Line+Dress/White/3d8fa920-7ae3-4977-9f1e-2759579b56af.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Mixed+Eyelet+A-Line+Dress/White/0b4799ff-3b53-4741-a949-f93b25dbfcc7.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Mixed+Eyelet+A-Line+Dress/White/12c5cf43-1525-4712-a6cc-0bc09a4808ec.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Piped+Cami+Jumpsuit/Grey+Kelsi+Floral/ba6c41be-a54a-4db8-bdf1-5b316f2ebf5e.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Piped+Cami+Jumpsuit/Grey+Kelsi+Floral/2066b854-c3ac-4516-b33d-d4f2980fbf0d.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Print+Handkerchief+Hem+Midi+Dress/Poppy/5f2c6083-f90e-46d0-84f8-cf7f94239ddb.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Print+Handkerchief+Hem+Midi+Dress/Poppy/7f404808-6d49-460e-b83c-f2c3d11fec52.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Puff+Sleeve+Off+the+Shoulder+/Navy/99f6e979-c068-43cb-9e81-409533cf19a0.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Puff+Sleeve+Off+the+Shoulder+/Navy/5a97f923-8d78-4607-8bec-822ef0730d67.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Romantic+Button+Front+Dress/Pink+Delicacy+Painted+Floral/c1e369f9-61f5-48f9-82e8-f1db2407683c.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Romantic+Button+Front+Dress/Pink+Delicacy+Painted+Floral/0ba982fa-5866-4293-97d3-a69d0c2d6308.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Ruffle+Sleeve+Jumpsuit/Pink+Tan/426fd5ff-704a-4440-82ce-38f686776493.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Ruffle+Sleeve+Jumpsuit/Pink+Tan/aca215ba-9fa7-4b7f-b380-acbe0a15e989.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Sleeveless+Crepe+Jumpsuit/Navy/66d3de16-8b08-48f9-b011-7ebf86bda2d0.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Sleeveless+Crepe+Jumpsuit/Navy/0eab3894-f4e1-4e08-a8ad-b87f592afa72.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Sunrise+Wanderer+Minidress/Plum/2c5fefdc-12a4-4e08-a728-113cbfd7f58e.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Sunrise+Wanderer+Minidress/Plum/6d72d12d-7382-4183-ad9b-c19fd5d2b2d0.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/The+Motherchic+Avalon+Faux+Wrap+Jersey+Dress/Heather+Grey/a9021845-7305-4def-ac44-8e99195ad1b7.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/The+Motherchic+Avalon+Faux+Wrap+Jersey+Dress/Heather+Grey/5bc0c97e-d9f7-4bdb-8455-5840ccada351.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/The+Motherchic+Summer+Nights+Maxi+Dress/Gold+Floral/50769a06-a323-4381-af26-a4716d1fb1bb.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/The+Motherchic+Summer+Nights+Maxi+Dress/Gold+Floral/87d8ad4e-1715-4ffd-8dc6-e8fd9f626b7f.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Tiered+Ruffle+Sleeve+Dress/Blue+Illusion/7e5e6f14-ab65-4dcd-9b23-4307bbb57f1d.jpeg",
    "https://s3-us-west-1.amazonaws.com/fec-image-dump/Tiered+Ruffle+Sleeve+Dress/Blue+Illusion/1a0e1300-3c45-4fd2-b1c0-c0bf5a26cb30.jpeg"
  ]

  return [images[Math.floor(Math.random() * images.length)],images[Math.floor(Math.random() * images.length)],images[Math.floor(Math.random() * images.length)]]
}

const itemTypeGenerator = function(){
  let itemTypes = [
    "shoe",
    "earrings",
    "purses",
    "bracelet",
    "dress"
  ]
  return itemTypes[Math.floor(Math.random() * itemTypes.length)]
}

const colorGenerator = function(){
  let colors = [
    "black",
    "Python Print",
    "Sunflower",
    "Metal Grey",
    "Silver Satin",
    "Nat Raffia",
    "Black",
    "Silver/Crystal",
    "Gold",
    "Silver",
    "Clear-Silver",
    "White Gold",
    "Aqua",
    "Abalone Shell",
    "Porcelain Rose",
    "Beige Ebony",
    "Light Blue",
    "Black Diamond",
    "Blue",
    "Bright Silver Metal",
    "Silver/Lapis",
    "Two Tone",
    "Burgundy",
    "Black Pink Roses Print",
    "Red Chinoise Dot",
    "Red Poppy",
    "Grey/ Ivory",
    "Red Fiery",
    "Lavender",
    "Ash Blue",
    "White",
    "Grey Kelsi Floral",
    "Poppy",
    "Navy",
    "Pink Delicacy Painted Floral",
    "Pink Tan",
    "Ivory Dove Sketch Floral",
    "Plum",
    "Heather Grey",
    "Gold Floral"
  ];

  return [colors[Math.floor(Math.random() * colors.length)]]

}

//------------This is the main generator------------------

module.exports = {
  jsonData: (id)=>{
    let isShoe = shoesNotClothes(); 
    return [{
      "_id": id, 
      "productname": productNameGenerator(),
      "imageurl": imageUrlGenerator(),
      [isShoe?"shoesizes":"clothingsizes"]:isShoe? randomShoeSizes(): randomClothingSize(),
      "designer": randomDesigner(),
      "color": colorGenerator(),
      "itemtype": itemTypeGenerator(),
      "description": shoesdescription(),
      "price": randomPrice()
    }]
  },
  csvRow: (id)=>{
    let isShoe = shoesNotClothes(); 
    return `${id}|${productNameGenerator()}|${imageUrlGenerator()}|${isShoe? randomShoeSizes():''}|${isShoe? '':randomClothingSize()}|${randomDesigner()}|${colorGenerator()}|${itemTypeGenerator()}|${shoesdescription()}|${randomPrice()}`
  }
}