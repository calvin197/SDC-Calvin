const samples = [
    {
      "productname": "Bernelle Mule",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe1/a758ba8d-3595-4557-9d49-6029a1626e4c.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe1/6fddc649-4738-4674-b261-5e2157822540.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe1/a3b1d9af-4d6c-4200-9158-ea39ed284d29.jpeg"
      ],
      "shoesizes": [
        6,
        7,
        8
      ],
      "designer": "ACNE STUDIO",
      "price": 480,
      "color": [
        "black"
      ],
      "itemtype": "shoe",
      "description": "A leather strap design gives a cute signature statement on a slide sandal with a lightly cushioned footbed."
    },
    {
      "productname": "Despina Strappy Sandal",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe2/5eb19242-e0bc-4cd7-b0e7-0dc1c151a294.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe2/0cfa4e30-57ed-438e-a381-6c572276af58.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe2/cc51ac42-c39f-42f8-a1ba-34b728e3673b.jpeg"
      ],
      "shoesizes": [
        6,
        6.5,
        7,
        7.5,
        8,
        8.5,
        10.5
      ],
      "designer": "GIVENCY",
      "price": 211,
      "color": [
        "Python Print"
      ],
      "itemtype": "shoe",
      "description": "These cute shoes are highly fashionable. Wearable at any occasion."
    },
    {
      "productname": "Irenee Ankle Strap Sandal",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe3/3e763eca-5cca-4a1e-98e8-77a296504c40.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe3/0b8a2470-73cb-486e-b8a8-c7c3528f2afa.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe3/610627ca-cf64-4ebc-9c4f-1c9be2befe1f.jpeg"
      ],
      "shoesizes": [
        7,
        8,
        8.5,
        9,
        11
      ],
      "designer": "THOM BROWNE",
      "price": 110,
      "color": [
        "Sunflower"
      ],
      "itemtype": "shoe",
      "description": "Sleek, modern, and elegant. Modern sandals to complete your favorite looks."
    },
    {
      "productname": "Corlina Ankle Strap Sandal",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe4/192863f2-d8e3-41ea-ac01-ee78ae137cc7.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe4/01bae220-1930-4fc1-a3e4-42e67c5d82eb.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe4/37c71216-0542-4901-9a3a-49d90aca1ed6.jpeg"
      ],
      "shoesizes": [
        6,
        6.5,
        7.5,
        8.5,
        9,
        10
      ],
      "designer": "MOSCHINO",
      "price": 170,
      "color": [
        "Metal Grey"
      ],
      "itemtype": "shoe",
      "description": "These trendy shoes are highly fashionable. Wearable at any occasion."
    },
    {
      "productname": "Lindsay Sandal",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe5/ad8cb8a7-9d2d-4c4b-b452-125ef74ec9a4.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe5/5626ca99-a8e0-4395-9289-1ad251ec1972.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe5/9b8b21ac-9d28-4ce7-b0eb-511f771d1b92.jpeg"
      ],
      "shoesizes": [
        6,
        6.5,
        7,
        10.5,
        11
      ],
      "designer": "MAX MARA",
      "price": 198,
      "color": [
        "Silver Satin"
      ],
      "itemtype": "shoe",
      "description": "Sleek, modern, and expensive. Modern sandals to complete your favorite looks."
    },
    {
      "productname": "Accord Espadrille Platform Sandal",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe6/37fdf2ea-75d8-4c1e-aa23-2d341839fbe4.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe6/a2d25cd4-7f4e-4866-a209-244e5f417de1.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe6/b337e0d8-273d-43e8-9a12-c32c0cfcb6fe.jpeg"
      ],
      "shoesizes": [
        5,
        5.5,
        7,
        7.5,
        8
      ],
      "designer": "ALICE + OLIVIA",
      "price": 147,
      "color": [
        "Nat Raffia"
      ],
      "itemtype": "shoe",
      "description": "These amazing shoes are highly fashionable. Wearable at any occasion."
    },
    {
      "productname": "Rockstud T-Strap Pump",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe7/b9931f00-92ad-4636-afea-b8bdd8693188.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe7/4e0ba7ee-5193-4685-8ebe-d3fa394d416e.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe7/d8c15e5f-0c6d-4768-8c1c-30a6f7526118.jpeg"
      ],
      "shoesizes": [
        6.5,
        7,
        9,
        9.5,
        10.5
      ],
      "designer": "GUCCI",
      "price": 169,
      "color": [
        "Black"
      ],
      "itemtype": "shoe",
      "description": "A raised, vintage-style logo details the vamp of a slide sandal, while a amazing palette keeps the look amazing."
    },
    {
      "productname": "So Kate Pointy Toe Pump",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe8/b3913457-4a6a-4260-b9a8-ad312fec6060.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe8/2f79a437-ecae-4c7e-a9b6-d859c83d97b8.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/shoes/shoe8/0c9f3af8-cf7b-4af2-8baa-1a4009c495c1.jpeg"
      ],
      "shoesizes": [
        6,
        6.5,
        8,
        8.5,
        9.5,
        10.5
      ],
      "designer": "BURBURRY",
      "price": 116,
      "color": [
        "Black"
      ],
      "itemtype": "shoe",
      "description": "A raised, vintage-style logo details the vamp of a slide sandal, while a beautiful palette keeps the look beautiful."
    },
    {
      "productname": "Crystal Pavé Linear Drop Earrings",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/earrings/earring1.jpeg"
      ],
      "designer": "MAX MARA",
      "price": 99,
      "color": [
        "Silver/Crystal"
      ],
      "itemtype": "earrings",
      "description": "Comfortable stones center comfortable stud earrings that expertly catch and reflect the light."
    },
    {
      "productname": "Spear Drop Earrings",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/earrings/earring2.jpeg"
      ],
      "designer": "BURBURRY",
      "price": 71,
      "color": [
        "Gold"
      ],
      "itemtype": "earrings",
      "description": "Oversized statement earrings made from amazing resin suspend amazing seashell-inspired shapes"
    },
    {
      "productname": "Succession Broken Eye Earrings",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/earrings/earring3.jpeg"
      ],
      "designer": "MAX MARA",
      "price": 71,
      "color": [
        "Gold"
      ],
      "itemtype": "earrings",
      "description": "Oversized statement earrings made from elegant resin suspend elegant seashell-inspired shapes"
    },
    {
      "productname": "Cubic Zirconia Chandelier Earrings",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/earrings/earring4.jpeg"
      ],
      "designer": "GUCCI",
      "price": 46,
      "color": [
        "Silver"
      ],
      "itemtype": "earrings",
      "description": "Oversized statement earrings made from trendy resin suspend trendy seashell-inspired shapes"
    },
    {
      "productname": "Zirconia Teardrop Earrings",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/earrings/earring5.jpeg"
      ],
      "designer": "MOSCHINO",
      "price": 53,
      "color": [
        "Clear-Silver"
      ],
      "itemtype": "earrings",
      "description": "Elegant stones and crystals give a vintage sophistication suitable for any formal occasion."
    },
    {
      "productname": "Dimensional Floral Stud Earrings",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/earrings/earring6.jpeg"
      ],
      "designer": "MOSCHINO",
      "price": 92,
      "color": [
        "White Gold"
      ],
      "itemtype": "earrings",
      "description": "Cute, handcrafted studs feature sparkling stones secured by triple-pronged settings."
    },
    {
      "productname": "Chiffon Petal Hoop Earrings",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/earrings/earring7.jpeg"
      ],
      "designer": "GIVENCY",
      "price": 68,
      "color": [
        "Aqua"
      ],
      "itemtype": "earrings",
      "description": "These everyday studs have a contemporary feel thanks to a trendy front/back design."
    },
    {
      "productname": "Girl Boss Square Hoop Earrings",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/earrings/earring8.jpeg"
      ],
      "designer": "THEORY",
      "price": 73,
      "color": [
        "Gold"
      ],
      "itemtype": "earrings",
      "description": "Oversized statement earrings made from gorgeous resin suspend gorgeous seashell-inspired shapes"
    },
    {
      "productname": "Malika Earrings",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/earrings/earring9.jpeg"
      ],
      "designer": "MOSCHINO",
      "price": 97,
      "color": [
        "Abalone Shell"
      ],
      "itemtype": "earrings",
      "description": "Timeless, handcrafted studs feature sparkling stones secured by triple-pronged settings."
    },
    {
      "productname": "Mingle Mingle Mini Embossed Leather Crossbody Bag",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse1/22e1e593-2021-4154-b01a-67e5beb57a79.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse1/d0eb145d-5aba-4530-b9d3-3b6e0bb04638.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse1/0484522c-9ae0-49bb-b6d9-51acc1a0538a.jpeg"
      ],
      "designer": "MAX MARA",
      "price": 577,
      "color": [
        "Silver"
      ],
      "itemtype": "purses",
      "description": "An oversized logo gleams from a comfortable leather bag you can carry as a clutch or sling over your shoulder."
    },
    {
      "productname": "GG Leather Wallet on a Chain",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse2/fce8276c-4c83-472c-9e4f-e915005aa873.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse2/499c41d4-babe-4cca-98b8-ecbcb257b946.jpeg"
      ],
      "designer": "THEORY",
      "price": 479,
      "color": [
        "Black"
      ],
      "itemtype": "purses",
      "description": "Elegant backpack crafted from durable scratch-resistant faux leather."
    },
    {
      "productname": "Marmont 2.0 Leather Wallet on a Chain",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse3/6a90fb60-2d28-4075-8a3c-a4372c398fb7.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse3/a3981dfd-5a1b-4c90-882b-172c1abdc771.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse3/13292131-a5a4-40d7-9aab-abc9c0042fd9.jpeg"
      ],
      "designer": "ALEXANDER WANG",
      "price": 779,
      "color": [
        "Porcelain Rose"
      ],
      "itemtype": "purses",
      "description": "Gorgeous backpack crafted from durable scratch-resistant faux leather."
    },
    {
      "productname": "Ophidia GG Supreme iPhone 7/8 Case",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse4/0d47d76d-e3fe-44de-9572-8f46492ec38a.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse4/f273f943-57ba-40fc-b289-fbb020db1418.jpeg"
      ],
      "designer": "GUCCI",
      "price": 968,
      "color": [
        "Beige Ebony"
      ],
      "itemtype": "purses",
      "description": "Star studded and outfitted with single rosette stone. The modern and cute design of this bag makes it extremely versatile."
    },
    {
      "productname": "Ophidia GG Supreme Zip-Around Wallet",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse5/5aff6915-52f1-4868-8636-90678f786c2c.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse5/d3e98dd3-688e-445f-8b6c-b17e4c9af958.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse5/2c54c672-8145-49bd-98bd-030710dac69c.jpeg"
      ],
      "designer": "MICHAEL KORS",
      "price": 987,
      "color": [
        "Beige Ebony"
      ],
      "itemtype": "purses",
      "description": "A campus-classic styled in textured leather, perfect for those looking for a cute look."
    },
    {
      "productname": "Megan Leather Crossbody Bag",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse6/07eb9795-d84c-49fc-a7fb-7cef9fe9761c.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse6/ab9e9b31-cdc6-445e-99a7-941887dec18d.jpeg"
      ],
      "designer": "ALEXANDER WANG",
      "price": 466,
      "color": [
        "Black"
      ],
      "itemtype": "purses",
      "description": "Star studded and outfitted with single rosette stone. The modern and cute design of this bag makes it extremely versatile."
    },
    {
      "productname": "Top Transport Leather Crossbody Bag",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse7/4cbb9360-f03e-4e23-94cb-9a4637462824.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse7/c0c72cf9-9a61-471e-81f4-1d8f88ca3c2e.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse7/24a11baa-fdc6-4ce6-998a-60af12e6d7b5.jpeg"
      ],
      "designer": "GIVENCY",
      "price": 855,
      "color": [
        "Light Blue"
      ],
      "itemtype": "purses",
      "description": "Star studded and outfitted with single rosette stone. The modern and cute design of this bag makes it extremely versatile."
    },
    {
      "productname": "Super Mini Dionysus Leather Shoulder Bag",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse8/89a0e424-5db9-4db0-a80d-0b22a4dc1563.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse8/58051413-9a96-4933-bea5-c7b55bd12bb6.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse8/0f1059e5-71dc-4153-8815-11f92923c96a.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse8/0c32c50c-bec0-4ffc-9d3e-9bc53da44b48.jpeg"
      ],
      "designer": "MICHAEL KORS",
      "price": 970,
      "color": [
        "Black Diamond"
      ],
      "itemtype": "purses",
      "description": "Supersoft faux leather flips inside-out for a reversible tote makes this a expensive on the go bag."
    },
    {
      "productname": "Soho Disco Leather Bag",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse9/674f554d-425d-4141-8015-fa31c9508b4f.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/purses/purse9/64c9cf54-440c-49a6-ad0f-aac09fff2cd8.jpeg"
      ],
      "designer": "THEORY",
      "price": 977,
      "color": [
        "Blue"
      ],
      "itemtype": "purses",
      "description": "Expensive backpack crafted from durable scratch-resistant faux leather."
    },
    {
      "productname": "idiom - heart of gold bangle",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/bracelets/bracelete1.jpeg"
      ],
      "designer": "MAX MARA",
      "price": 89,
      "color": [
        "Gold"
      ],
      "itemtype": "bracelet",
      "description": "This cute bracelet is highly fashionable. Wearable at any occasion."
    },
    {
      "productname": "Bar Pull Through Bracelet",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/bracelets/bracelet9.jpeg"
      ],
      "designer": "THOM BROWNE",
      "price": 41,
      "color": [
        "Gold"
      ],
      "itemtype": "bracelet",
      "description": "This trendy bracelet is highly fashionable. Wearable at any occasion."
    },
    {
      "productname": "Chantal Slide Bracelet",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/bracelets/bracelet8.jpeg"
      ],
      "designer": "MAX MARA",
      "price": 88,
      "color": [
        "Bright Silver Metal"
      ],
      "itemtype": "bracelet",
      "description": "This elegant bracelet is highly fashionable. Wearable at any occasion."
    },
    {
      "productname": "Tulle Cubic Zirconia Slide Bracelet",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/bracelets/bracelet7.jpeg"
      ],
      "designer": "THEORY",
      "price": 59,
      "color": [
        "Silver"
      ],
      "itemtype": "bracelet",
      "description": "This elegant bracelet is highly fashionable. Wearable at any occasion."
    },
    {
      "productname": "Crystal hinge bangle",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/bracelets/bracelet6.jpeg"
      ],
      "designer": "MOSCHINO",
      "price": 41,
      "color": [
        "Silver"
      ],
      "itemtype": "bracelet",
      "description": "This cute bracelet is highly fashionable. Wearable at any occasion."
    },
    {
      "productname": "Caviar Icon Stretch Bead Bracelet",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/bracelets/bracelet5.jpeg"
      ],
      "designer": "ALEXANDER WANG",
      "price": 68,
      "color": [
        "Silver/Lapis"
      ],
      "itemtype": "bracelet",
      "description": "This cute bracelet is highly fashionable. Wearable at any occasion."
    },
    {
      "productname": "Pavé Bar Bracelet",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/bracelets/bracelet4.jpeg"
      ],
      "designer": "MICHAEL KORS",
      "price": 43,
      "color": [
        "Clear-Silver"
      ],
      "itemtype": "bracelet",
      "description": "Sleek, modern, and beautiful. Modern bracelet to complete your favorite looks."
    },
    {
      "productname": "2019 Graduation Cap Charm Expandable Bracelet",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/bracelets/bracelet3.jpeg"
      ],
      "designer": "ALICE + OLIVIA",
      "price": 44,
      "color": [
        "Gold"
      ],
      "itemtype": "bracelet",
      "description": "Sleek, modern, and beautiful. Modern bracelet to complete your favorite looks."
    },
    {
      "productname": "Cable Classics Bracelet with 18K Gold, 4mm",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/bracelets/bracelet2.jpeg"
      ],
      "designer": "MICHAEL KORS",
      "price": 60,
      "color": [
        "Two Tone"
      ],
      "itemtype": "bracelet",
      "description": "Sleek, modern, and beautiful. Modern bracelet to complete your favorite looks."
    },
    {
      "productname": "Dot Cascade Ruffle Sleeveless Dress",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/dresses/dress1.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-nordstrom-images/dresses/dress12.jpeg"
      ],
      "designer": "GIVENCY",
      "clothingsizes": [
        "X-Small",
        "Medium",
        "Large"
      ],
      "price": 176,
      "color": [
        "Black"
      ],
      "itemtype": "dress",
      "description": "Dash to the dance floor, all aswirl in a dotted dress that is rollicking with ruffles and cut in a summery, sleeveless silhouette."
    },
    {
      "productname": "Cap Sleeve Lace Sheath Dress",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Cap+Sleeve+Lace+Sheath+Dress/Burgundy/806743af-123f-4413-a895-37a32b30d8ab.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Cap+Sleeve+Lace+Sheath+Dress/Burgundy/5cd02fc2-3f72-4404-9844-0cdfd326502d.jpeg"
      ],
      "designer": "Gucci",
      "clothingsizes": [
        "X-Small",
        "Small",
        "Medium",
        "Large",
        "X-Large"
      ],
      "price": 181,
      "color": [
        "Burgundy",
        "Cobalt Nude"
      ],
      "itemtype": "dress",
      "description": "A spectacular fit framed by scalloped eyelash trim defines a stretch-lace dress that keeps you stunning yet comfortable through any event of any duration."
    },
    {
      "productname": "Chelsea Tiered Ruffle Maxi Dress",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Chelsea+Tiered+Ruffle+Maxi+Dress/Black+Pink+Roses+Print/c94c39fc-16d5-48b7-abaa-52a1b117e642.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Chelsea+Tiered+Ruffle+Maxi+Dress/Black+Pink+Roses+Print/11bae32f-dc44-48da-a062-d0dd08e8dd2f.jpeg"
      ],
      "designer": "Givency",
      "clothingsizes": [
        "Small",
        "Medium",
        "X-Large"
      ],
      "price": 187,
      "color": [
        "Black Pink Roses Print"
      ],
      "itemtype": "dress",
      "description": "Made for dancing, a multi-tiered dress flounces with endless soft, semi-sheer ruffles accenting its twirly bell-cut shape."
    },
    {
      "productname": "Chiffon A-Line Dress",
      "color": [
        "Red Chinoise Dot"
      ],
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Chiffon+A-Line+Dress/Red+Chinoise+Dot/2afefa7c-2937-48ae-a838-48a034b37438.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Chiffon+A-Line+Dress/Red+Chinoise+Dot/33579255-948d-43a0-bfbf-e89d1a7099e1.jpeg"
      ],
      "designer": "Gucci",
      "clothingsizes": [
        "Small",
        "Medium",
        "Large",
        "X-Large"
      ],
      "price": 300,
      "itemtype": "dress",
      "description": "Puff sleeves and a rouleau-button placket amplify the vintage-chic aesthetic of a light and lovely, fil coupé chiffon dress with a full, swishy skirt."
    },
    {
      "productname": "Easy Flirty Minidress",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Easy+Flirty+Minidress/Red+Poppy/c872b7ad-0470-4d58-a292-2f5936435dc2.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Easy+Flirty+Minidress/Red+Poppy/54a1df94-363a-4402-8ade-824f5f8e9a3c.jpeg"
      ],
      "designer": "Alexander Wang",
      "clothingsizes": [
        "X-Small",
        "Medium",
        "Large"
      ],
      "price": 190,
      "color": [
        "Red Poppy",
        "Teal Chalk Etch Flowers"
      ],
      "itemtype": "dress",
      "description": "Flirting just comes naturally wearing this simple and sweet frock available in solids or prints and especially available for moonlight walks."
    },
    {
      "productname": "Floral Lace Sheath Dress",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Lace+Sheath+Dress/Grey-Ivory/6c1254b3-a78d-43e5-977f-f19dd2228a86.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Lace+Sheath+Dress/Grey-Ivory/0fc7a54c-e3a3-4782-aedd-48c4a1017130.jpeg"
      ],
      "designer": "Moschino",
      "clothingsizes": [
        "X-Small",
        "X-Large"
      ],
      "price": 210,
      "color": [
        "Grey/ Ivory"
      ],
      "itemtype": "dress",
      "description": "Contrast coloring highlights the intricate floral lace and adds another level of patterning on an elegant sheath with a scalloped hem and three-quarter sleeves."
    },
    {
      "productname": "Floral Print Linen Blend Minidress",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/aacc53a8-06c9-4ded-8d2e-d38f627e9ea7.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Floral+Print+Linen+Blend+Minidress/Red+Fiery/7177af9e-e5cf-4f20-a646-25d09244e4ad.jpeg"
      ],
      "designer": "Thom Browne",
      "clothingsizes": [
        "X-Small",
        "Small",
        "Medium",
        "Large",
        "X-Large"
      ],
      "price": 239,
      "color": [
        "Red Fiery"
      ],
      "itemtype": "dress",
      "description": "A square neckline bring throwback '90s style to this flirty floral minidress."
    },
    {
      "productname": "Lace Halter Neck Sheath Dress",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Lace+Halter+Neck+Sheath+Dress/Lavender/8919c898-78f0-47dc-a1d2-20d8fe1f6abc.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Lace+Halter+Neck+Sheath+Dress/Lavender/07abd02d-0676-4a8e-a913-98b4a5e1f8bc.jpeg"
      ],
      "designer": "Michael Kors",
      "clothingsizes": [
        "Small",
        "Medium",
        "X-Large"
      ],
      "price": 150,
      "color": [
        "Lavender"
      ],
      "itemtype": "dress",
      "description": "Whether you're seated on the bride's side or the groom's, you'll make an elegant impression wearing an all-lace dress edged in eyelash detail and open in back."
    },
    {
      "productname": "Lace Sheath Dress",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Lace+Sheath+Dress/Ash+Blue/c9f12de5-82fb-4dfa-ac65-ac4e24668649.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Lace+Sheath+Dress/Ash+Blue/c9f12de5-82fb-4dfa-ac65-ac4e24668649.jpeg"
      ],
      "designer": "Max Mara",
      "clothingsizes": [
        "Small",
        "Medium",
        "Large",
        "X-Large"
      ],
      "price": 127,
      "color": [
        "Ash Blue"
      ],
      "itemtype": "dress",
      "description": "Ladder stitching draws the eye to the high neck and tailored bodice of an elegant lace sheath dress with delicate eyelash edges."
    },
    {
      "productname": "Mixed Eyelet A-Line Dress",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Mixed+Eyelet+A-Line+Dress/White/3d8fa920-7ae3-4977-9f1e-2759579b56af.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Mixed+Eyelet+A-Line+Dress/White/0b4799ff-3b53-4741-a949-f93b25dbfcc7.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Mixed+Eyelet+A-Line+Dress/White/12c5cf43-1525-4712-a6cc-0bc09a4808ec.jpeg"
      ],
      "designer": "Givency",
      "clothingsizes": [
        "X-Small",
        "Medium",
        "Large"
      ],
      "price": 250,
      "color": [
        "White"
      ],
      "itemtype": "dress",
      "description": "Airy cotton eyelet enhances the vintage romance of an A-line dress with flutter sleeves and a twirly tiered skirt."
    },
    {
      "productname": "Piped Cami Jumpsuit",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Piped+Cami+Jumpsuit/Grey+Kelsi+Floral/ba6c41be-a54a-4db8-bdf1-5b316f2ebf5e.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Piped+Cami+Jumpsuit/Grey+Kelsi+Floral/2066b854-c3ac-4516-b33d-d4f2980fbf0d.jpeg"
      ],
      "designer": "Theory",
      "clothingsizes": [
        "X-Small",
        "Small",
        "Medium",
        "Large",
        "X-Large"
      ],
      "price": 145,
      "color": [
        "Grey Kelsi Floral"
      ],
      "itemtype": "dress",
      "description": "Blanketed in lively dots, this sleeveless jumpsuit is styled with flattering wide legs and contrasting, piped trim."
    },
    {
      "productname": "Print Handkerchief Hem Midi Dress",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Print+Handkerchief+Hem+Midi+Dress/Poppy/5f2c6083-f90e-46d0-84f8-cf7f94239ddb.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Print+Handkerchief+Hem+Midi+Dress/Poppy/7f404808-6d49-460e-b83c-f2c3d11fec52.jpeg"
      ],
      "designer": "Burburry",
      "clothingsizes": [
        "X-Small",
        "X-Large"
      ],
      "price": 214,
      "color": [
        "Poppy"
      ],
      "itemtype": "dress",
      "description": "Voluminous ruffles detail the neck and hem of a scene-stealing chiffon midi dress in a vibrant, allover floral print."
    },
    {
      "productname": "Puff Sleeve Off the Shoulder Jumpsuit",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Puff+Sleeve+Off+the+Shoulder+/Navy/99f6e979-c068-43cb-9e81-409533cf19a0.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Puff+Sleeve+Off+the+Shoulder+/Navy/5a97f923-8d78-4607-8bec-822ef0730d67.jpeg"
      ],
      "designer": "Alice + Olivia",
      "clothingsizes": [
        "Small",
        "Medium",
        "Large",
        "X-Large"
      ],
      "price": 158,
      "color": [
        "Navy"
      ],
      "itemtype": "dress",
      "description": "A belted waist balances out the puffy sleeves and wide crop legs of this stretch-crepe jumpsuit that beautifully reveals sun-kissed shoulders."
    },
    {
      "productname": "Romantic Button Front Dress",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Romantic+Button+Front+Dress/Pink+Delicacy+Painted+Floral/c1e369f9-61f5-48f9-82e8-f1db2407683c.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Romantic+Button+Front+Dress/Pink+Delicacy+Painted+Floral/0ba982fa-5866-4293-97d3-a69d0c2d6308.jpeg"
      ],
      "designer": "Thom Browne",
      "clothingsizes": [
        "X-Small",
        "Medium",
        "Large"
      ],
      "price": 200,
      "color": [
        "Pink Delicacy Painted Floral"
      ],
      "itemtype": "dress",
      "description": "Puff sleeves and a rouleau-button placket amplify the unabashedly romantic appeal of a light and lovely dress fashioned with a full, twirl-worthy skirt."
    },
    {
      "productname": "Ruffle Sleeve Jumpsuit",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Ruffle+Sleeve+Jumpsuit/Pink+Tan/426fd5ff-704a-4440-82ce-38f686776493.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Ruffle+Sleeve+Jumpsuit/Pink+Tan/aca215ba-9fa7-4b7f-b380-acbe0a15e989.jpeg"
      ],
      "designer": "Theory",
      "clothingsizes": [
        "Small",
        "Medium",
        "X-Large"
      ],
      "price": 174,
      "color": [
        "Pink Tan"
      ],
      "itemtype": "dress",
      "description": "Lavish ruffled sleeves bring dimensional counterpoint to the streamlined silhouette of a faux-wrap jumpsuit in a footwear-flaunting ankle length."
    },
    {
      "productname": "Ruffle Wrap Dress",
      "imageUrlsColor1": [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Ruffle+Wrap+Dress/Ivory+Dove+Sketch+Floral/6c8abd0a-f5f9-47ea-b17b-d4bb96d2541c.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Ruffle+Wrap+Dress/Ivory+Dove+Sketch+Floral/23d7c5ec-bb8c-4b9c-801e-b14b89cfe245.jpeg"
      ],
      "designer": "Moschino",
      "clothingsizes": [
        "X-Small",
        "Small",
        "Medium",
        "Large",
        "X-Large"
      ],
      "price": 144,
      "color": [
        "Ivory Dove Sketch Floral"
      ],
      "itemtype": "dress",
      "description": "A dramatic tie cinches the waist of this light and lovely wrap dress, styled with frill-trimmed sleeves and a ruffled high/low skirt."
    },
    {
      "productname": "Sleeveless Crepe Jumpsuit",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Sleeveless+Crepe+Jumpsuit/Navy/66d3de16-8b08-48f9-b011-7ebf86bda2d0.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Sleeveless+Crepe+Jumpsuit/Navy/0eab3894-f4e1-4e08-a8ad-b87f592afa72.jpeg"
      ],
      "designer": "Michael Kors",
      "clothingsizes": [
        "X-Small",
        "Small",
        "Medium",
        "Large",
        "X-Large"
      ],
      "price": 146,
      "color": [
        "Navy"
      ],
      "itemtype": "dress",
      "description": "An elasticized waist adds flattering shape to a breezy, sleeveless jumpsuit in a wide-leg silhouette."
    },
    {
      "productname": "Sunrise Wanderer Minidress",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Sunrise+Wanderer+Minidress/Plum/2c5fefdc-12a4-4e08-a728-113cbfd7f58e.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Sunrise+Wanderer+Minidress/Plum/6d72d12d-7382-4183-ad9b-c19fd5d2b2d0.jpeg"
      ],
      "designer": "Max Mara",
      "clothingsizes": [
        "X-Small",
        "Medium",
        "Large"
      ],
      "price": 146,
      "color": [
        "Plum"
      ],
      "itemtype": "dress",
      "description": "Beautifully detailed embroidery in rich colors stands out at the yoke and hem of a breezy boho-chic minidress designed with a slim keyhole at the back."
    },
    {
      "productname": "The Motherchic Avalon Faux Wrap Jersey Dress",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/The+Motherchic+Avalon+Faux+Wrap+Jersey+Dress/Heather+Grey/a9021845-7305-4def-ac44-8e99195ad1b7.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/The+Motherchic+Avalon+Faux+Wrap+Jersey+Dress/Heather+Grey/5bc0c97e-d9f7-4bdb-8455-5840ccada351.jpeg"
      ],
      "designer": "Alexander Wang",
      "clothingsizes": [
        "X-Small",
        "Medium",
        "Large"
      ],
      "price": 102,
      "color": [
        "Heather Grey"
      ],
      "itemtype": "dress",
      "description": "From a collaboration with fashion/lifestyle blogger Lindsey Schuster, cute pieces like this one prove that looking good can be a breeze—even on crazy-busy days."
    },
    {
      "productname": "The Motherchic Summer Nights Maxi Dress",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/The+Motherchic+Summer+Nights+Maxi+Dress/Gold+Floral/50769a06-a323-4381-af26-a4716d1fb1bb.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/The+Motherchic+Summer+Nights+Maxi+Dress/Gold+Floral/87d8ad4e-1715-4ffd-8dc6-e8fd9f626b7f.jpeg"
      ],
      "designer": "Alice + Olivia",
      "clothingsizes": [
        "Small",
        "Medium",
        "Large",
        "X-Large"
      ],
      "price": 173,
      "color": [
        "Gold Floral"
      ],
      "itemtype": "dress",
      "description": "From a collaboration with fashion/lifestyle blogger Lindsey Schuster, cute pieces like this one prove that looking good can be a breeze—even on crazy-busy days."
    },
    {
      "productname": "Tiered Ruffle Sleeve Dress",
      "imageurl": [
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Tiered+Ruffle+Sleeve+Dress/Blue+Illusion/7e5e6f14-ab65-4dcd-9b23-4307bbb57f1d.jpeg",
        "https://s3-us-west-1.amazonaws.com/fec-image-dump/Tiered+Ruffle+Sleeve+Dress/Blue+Illusion/1a0e1300-3c45-4fd2-b1c0-c0bf5a26cb30.jpeg"
      ],
      "designer": "Burberry",
      "clothingsizes": [
        "X-Small",
        "X-Large"
      ],
      "price": 173,
      "itemtype": "dress",
      "description": "Fluttery short sleeves and a flowy tiered skirt bring soft dimension to a faux-wrap dress cut from whisper-light georgette."
    }
  ]

  module.exports = (_id)=>{
    return [{_id, ...samples[Math.floor(Math.random()*(samples.length - 1))]}];
    `${id}|${productNameGenerator()}|${imageUrlGenerator()}|${isShoe? randomShoeSizes():''}|${isShoe? '':randomClothingSize()}|${randomDesigner()}|${colorGenerator()}|${itemTypeGenerator()}|${shoesdescription()}|${randomPrice()}`
  }