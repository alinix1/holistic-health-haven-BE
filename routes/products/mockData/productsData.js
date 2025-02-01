let productsData = [
  {
    id: 1,
    product_type: [
      "Cold & Flu",
      "Inflammation & Joint Pain",
      "Overall Immunity",
    ],
    product_title: "Vitamin C",
    img: "https://www.verywellhealth.com/thmb/gCoBqPnmydeTKB9XC6le1JmNAlQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-benefits-of-vitamin-c-supplements-89083-primary-recirc-ec07af56471e41caa683c0d7ed67c6b2.jpg",
    product_description:
      "Supports immune system health and reduces inflammation. Each bottle contains 60 gummies of Vitamin C. Recommended dosage: 2 capsules daily with water. Potential side effects may include mild digestive discomfort; consult your healthcare provider before use.",
    price: 24.99,
  },
  {
    id: 2,
    product_type: [
      "Inflammation & Joint Pain",
      "Stress & Anxiety",
      "Fibromyalgia",
    ],
    product_title: "CBD Salve",
    img: "https://www.shutterstock.com/image-photo/hemp-salve-joints-muscles-relaxing-600nw-1793404621.jpg",
    product_description:
      "Experience soothing relief with this anti-inflammatory CBD salve, designed to help de-stress and promote muscle relaxation. Comes in a convenient 2 oz jar, perfect for targeted application. Apply a small amount to the affected area as needed. Potential side effects may include mild skin irritation; discontinue use if irritation occurs.",
    price: 30.0,
  },
  {
    id: 3,
    product_type: ["Stress & Anxiety", "Fibromyalgia", "Muscle Recovery"],
    product_title: "Epsom Salts",
    img: "https://hips.hearstapps.com/hmg-prod/images/handmade-lavender-soap-and-salt-royalty-free-image-1625928611.jpg?crop=0.736xw:1.00xh;0.0609xw,0&resize=640:*",
    product_description:
      "Unwind and relax with these premium Epsom salts, enriched with the calming properties of lavender and rose petals. Perfect for de-stressing and soothing tired muscles, this 16 oz package creates a luxurious bath experience. Add 1-2 cups to a warm bath and soak for 20 minutes to maximize benefits. Potential side effects may include mild skin irritation; discontinue use if irritation occurs.",
    price: 15.99,
  },
  {
    id: 4,
    product_type: ["Heart Problems", "Fibromyalgia", "Muscle Recovery"],
    product_title: "Potassium",
    img: "https://ucmscdn.healthgrades.com/33/d3/b6b115594a9d892a7a0b212384bf/gettyimages-185061828.jpg",
    product_description:
      "Support heart health and promote muscle relaxation with this high-quality potassium supplement. Each bottle contains 100 tablets. Recommended dosage: 1 tablet daily with food, or as directed by a healthcare provider. Potential side effects may include mild digestive upset or muscle weakness if taken in excess. Consult your healthcare provider before use.",
    price: 10.5,
  },
  {
    id: 5,
    product_type: ["Insomnia"],
    product_title: "Melatonin",
    img: "https://media.istockphoto.com/id/1358940427/photo/bottle-with-melatonin-pills-or-food-supplements-medicine.jpg?s=612x612&w=0&k=20&c=A0UH8Jfr-BIIDo6-MXeJ4NzYuC8zaiCTyO--9mbFLDU=",
    product_description:
      "Melatonin is a natural hormone that supports the body’s sleep-wake cycle and is ideal for individuals experiencing occasional sleeplessness or needing to reset their internal clock after travel. This product contains 90 tablets, with each tablet providing 5 mg of melatonin. The recommended dosage is one tablet taken 30-60 minutes before bedtime, or as directed by a healthcare professional, with no more than the suggested amount consumed daily. While generally safe for short-term use, potential side effects may include drowsiness, headache, dizziness, nausea, vivid dreams, or mild irritability. Melatonin may interact with certain medications, such as blood thinners or sedatives, so it is advisable to consult a doctor before use, particularly for pregnant or breastfeeding women.",
    price: 12.5,
  },
  {
    id: 6,
    product_type: [
      "Stress & Anxiety",
      "Inflammation & Joint Pain",
      "Low Libido",
    ],
    product_title: "Ashwagandha",
    img: "https://www.datocms-assets.com/46938/1677839378-raw-and-powdered-ashwagandha.jpeg?auto=format&crop=focalpoint&fit=crop&h=627&q=75&w=1200",
    product_description:
      "Ashwagandha is a traditional adaptogenic herb known for its ability to help the body manage stress, promote relaxation, and support overall well-being. This product comes in a bottle containing 60 vegetarian capsules, each providing 500 mg of high-quality ashwagandha root extract. The recommended dosage is one to two capsules daily, preferably with meals, or as directed by a healthcare professional. While ashwagandha is generally safe for most people, potential side effects may include mild gastrointestinal discomfort, drowsiness, or headaches. It is advisable to consult a healthcare provider before use, especially for pregnant or breastfeeding individuals, those with autoimmune conditions, or anyone taking medications for thyroid disorders or anxiety.",
    price: 17.99,
  },
  {
    id: 7,
    product_type: ["Inflammation & Joint pain", "Overall Immunity"],
    product_title: "Turmeric",
    img: "https://media.istockphoto.com/id/965503302/photo/turmeric-powder-and-roots.jpg?s=612x612&w=0&k=20&c=97n0pa3_llc9itGE-nlUJEz5vWwowjA3FF2rNByQmIQ=",
    product_description:
      "Turmeric is a natural spice renowned for its potent anti-inflammatory and antioxidant properties, often used to support joint health, immune function, and overall wellness. This product is available in a container with 120 capsules, each containing 500 mg of high-quality turmeric root powder with added black pepper extract to enhance absorption. The recommended dosage is two capsules daily, taken with a meal to optimize digestion and efficacy. While turmeric is generally well-tolerated, potential side effects may include mild digestive discomfort, nausea, or diarrhea in some individuals, especially when taken in high doses. Those with gallbladder issues, bleeding disorders, or who are taking blood-thinning medications should consult a healthcare professional before use.",
    price: 12.5,
  },
  {
    id: 8,
    product_type: ["Liver Problems", "Gut Problems", "Low Energy"],
    product_title: "Milk Thistle",
    img: "https://files.nccih.nih.gov/milk-thistle-thinkstockphotos-93966680-square-1-.jpg",
    product_description:
      "Milk thistle is a herbal supplement commonly used for liver support, detoxification, and promoting overall digestive health. This product comes in a bottle containing 90 capsules, with each capsule providing 300 mg of milk thistle extract standardized to include silymarin, its active ingredient. The recommended dose is one to two capsules daily, preferably taken with meals for optimal absorption. While milk thistle is generally safe for most people, potential side effects may include mild digestive upset, nausea, or bloating. Rarely, allergic reactions such as skin rash or itching may occur, particularly in individuals allergic to plants in the Asteraceae family (e.g., daisies, marigolds, ragweed). Those who are pregnant, breastfeeding, or on medications should consult a healthcare professional before use.",
    price: 10.99,
  },
  {
    id: 9,
    product_type: [
      "Gut Problems",
      "Inflammation & Joint Pain",
      "Overall Immunity",
    ],
    product_title: "Probiotic",
    img: "https://bridgechiro.com/wp-content/uploads/2020/11/probiotics1.jpg",
    product_description:
      "Probiotic supplements are designed to support gut health, improve digestion, and enhance the balance of beneficial bacteria in the microbiome. This product comes in a bottle containing 60 capsules, each providing 10 billion CFUs (colony-forming units) of diverse probiotic strains, including Lactobacillus and Bifidobacterium species. The recommended dose is one capsule daily, preferably taken with a meal to maximize absorption and effectiveness. While probiotics are generally safe for most people, potential side effects may include mild digestive discomfort such as bloating, gas, or an upset stomach, particularly during the initial days of use as the body adjusts. Individuals with compromised immune systems, underlying health conditions, or those taking medications should consult a healthcare professional before starting a probiotic regimen.",
    price: 39.99,
  },
  {
    id: 10,
    product_type: ["Bacterial & Fungal Infections"],
    product_title: "Tea Tree Oil",
    img: "https://static1.squarespace.com/static/55240cbae4b0fe3c2af506f6/5533720be4b0cb1542aa8512/5f2bdeb00be1946932ec0d8d/1710527700052/Tea+Tree+Leaves+and+Tea+Tree+Oil.jpeg?format=1500w",
    product_description:
      "Tea tree oil is a natural essential oil known for its antimicrobial, antifungal, and wound-healing properties. It is typically sold in small glass bottles containing 10–15 mL of 100% pure tea tree oil, often equipped with a dropper for precise application. The recommended dose depends on its use; for skin application, dilute a few drops in a carrier oil (such as coconut or jojoba oil) before applying to avoid irritation. For aromatherapy, add a few drops to a diffuser or steam inhalation. Potential side effects of tea tree oil include skin irritation, redness, or an allergic reaction, particularly if used undiluted. It should not be ingested, as it can be toxic if swallowed. Pregnant individuals, children, or those with sensitive skin should consult a healthcare professional before using tea tree oil.",
    price: 7.5,
  },
  {
    id: 11,
    product_type: ["Low Energy", "Heart Problems"],
    product_title: "Vitamin B12",
    img: "https://ysm-res.cloudinary.com/image/upload/ar_16:9,c_fill,dpr_3.0,f_auto,g_faces:auto,q_auto:eco,w_500/v1/yms/prod/cabad09c-d3dd-4637-be1e-ef2f2d8477a6",
    product_description:
      "Vitamin B12 is an essential water-soluble vitamin that supports energy production, red blood cell formation, and neurological health. It is commonly available in tablet, capsule, liquid, or sublingual (under-the-tongue) forms, typically sold in bottles containing 60 to 120 doses. The recommended dose varies depending on age and health needs, but for most adults, it ranges from 500 to 1,000 micrograms per serving, often taken once daily. For those with severe deficiencies, higher doses or injections may be recommended under medical supervision.Potential side effects are rare but may include mild gastrointestinal discomfort, headaches, or dizziness, particularly when taken in very high doses. Individuals with allergies to cobalt or cobalamin should avoid Vitamin B12 supplements. As it is generally safe and water-soluble, excess amounts are excreted in the urine, minimizing the risk of toxicity. However, people with certain medical conditions, such as Leber's disease or kidney dysfunction, should consult a healthcare provider before supplementation.",
    price: 15.0,
  },
  {
    id: 12,
    product_type: ["Insomnia", "Stress & Anxiety"],
    product_title: "Valerian Root",
    img: "https://cdn-prod.medicalnewstoday.com/content/images/articles/318/318088/valerian-root.jpg",
    product_description:
      "Valerian root is an herbal supplement derived from the roots of the Valeriana officinalis plant, traditionally used for centuries to promote relaxation, improve sleep quality, and reduce anxiety and stress. Commonly available in forms such as capsules, tablets, tinctures, and teas, it is often taken in doses of 300 to 600 mg for sleep disturbances about 30 minutes to 2 hours before bedtime or 150 to 300 mg once or twice daily for anxiety or stress relief. As a tea, 1-2 teaspoons of dried valerian root can be steeped in hot water for 5-10 minutes. While generally considered safe for short-term use, potential side effects include drowsiness, dizziness, headaches, vivid dreams, or mild digestive discomfort, and it is not recommended for pregnant or breastfeeding women. Valerian root may interact with sedatives, antidepressants, or other medications affecting the central nervous system, so consulting a healthcare provider before use is advised. Though effective for many, it should be used cautiously due to its sedative properties, and long-term use is not well-studied.",
    price: 15.0,
  },
  {
    id: 13,
    product_type: ["Low Energy", "Heart Problems"],
    product_title: "L-arginine",
    img: "https://www.gandgvitamins.com/user/products/GA776-l-arginine-INGR.jpg",
    product_description:
      "L-arginine is an amino acid that plays a key role in the production of nitric oxide, which helps relax blood vessels, improving blood flow and circulation. It is often used as a dietary supplement to support cardiovascular health, enhance exercise performance, and improve conditions such as erectile dysfunction and high blood pressure. L-arginine is commonly available in capsules, powders, and tablets, with a typical dosage ranging from 2 to 6 grams daily, divided into one to three doses. However, dosages may vary depending on individual needs or the specific condition being addressed. While generally considered safe, potential side effects include gastrointestinal discomfort, bloating, diarrhea, nausea, low blood pressure, or allergic reactions in rare cases. L-arginine may also interact with medications such as blood pressure drugs, blood thinners, or medications for erectile dysfunction, so it is important to consult a healthcare provider before use, particularly for individuals with pre-existing medical conditions or those who are pregnant or breastfeeding.",
    price: 15.0,
  },
  {
    id: 14,
    product_type: ["Gut Problems", "Inflammation & Joint Pain"],
    product_title: "Ginger",
    img: "https://www.simplyrecipes.com/thmb/p4U2c8CM25CsQa_dYWn6rCyYwmM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-How-to-Peel-and-Chop-Ginger-LEAD-5-1a0beedaf24a4b96905531b17c07d2e6.JPG",
    product_description:
      "Ginger root, derived from the Zingiber officinale plant, is a popular natural remedy known for its anti-inflammatory, antioxidant, and digestive properties. It has been traditionally used to alleviate nausea, reduce inflammation, aid digestion, and support immune health. Ginger root is commonly consumed fresh, dried, powdered, or as an extract or tea. The typical dosage ranges from 1 to 3 grams per day, often divided into smaller doses. For nausea or motion sickness, a dose of 1 gram taken before travel is common, while for arthritis or inflammation, 2 to 3 grams daily may be recommended. Ginger is generally well-tolerated, but potential side effects include mild gastrointestinal discomfort, heartburn, diarrhea, or an upset stomach, particularly at higher doses. Ginger may also thin the blood, so it should be used cautiously by individuals taking anticoagulant medications or preparing for surgery. As with any supplement, it is advisable to consult a healthcare professional before use, especially for pregnant or breastfeeding individuals or those with pre-existing conditions.",
    price: 7.0,
  },
  {
    id: 15,
    product_type: [
      "Low Energy",
      "Low Libido",
      "Overall Immunity",
      "Hormonal Imbalances",
    ],
    product_title: "DHEA",
    img: "https://www.davincilabs.com/media/catalog/product/cache/24cc77f9128757a5d77f89249a4073cc/0/2/0200266.001-_f__1.jpg",
    product_description:
      "DHEA is commonly used to address age-related declines in hormone levels, improve bone density, enhance energy, and support immune function. It is also sometimes used for conditions such as adrenal insufficiency, depression, and sexual dysfunction. Typical dosages range from 25 to 50 milligrams per day, though higher doses may be used under medical supervision for specific conditions. DHEA is generally considered safe when taken in recommended amounts; however, potential side effects include oily skin, acne, hair loss, upset stomach, and changes in mood or energy levels. In women, it may cause symptoms such as facial hair growth or a deeper voice, and in men, it may lead to breast tenderness or aggression. Long-term use or excessive doses may disrupt hormonal balance and increase the risk of hormone-sensitive conditions. Consultation with a healthcare provider is strongly recommended before starting DHEA supplementation, particularly for individuals with a history of hormone-sensitive cancers, heart disease, or liver issues.",
    price: 45.0,
  },
  {
    id: 16,
    product_type: [
      "Inflammation & Joint Pain",
      "Stress & Anxiety",
      "Muscle Recovery",
    ],
    product_title: "Collagen",
    img: "https://images.everydayhealth.com/images/skin-beauty/potential-health-benefits-of-collagen-1440x810.jpg",
    product_description:
      "Collagen is a structural protein found in the skin, bones, tendons, and connective tissues, playing a vital role in maintaining strength, elasticity, and hydration. As a supplement, collagen is commonly derived from bovine, marine, or poultry sources and is popular for promoting healthier skin, stronger nails, improved joint health, and muscle recovery. It is often available in powdered or capsule forms, with typical dosages ranging from 2.5 to 10 grams per day, depending on the specific benefit being targeted. Collagen is generally well-tolerated, but possible side effects may include mild digestive discomfort, such as bloating or feelings of fullness, particularly when taken in higher doses. People with allergies to specific collagen sources (e.g., fish or eggs) should exercise caution to avoid allergic reactions. As with any supplement, consulting a healthcare provider is recommended to ensure its suitability, especially for individuals with underlying health conditions or dietary restrictions.",
    price: 21.0,
  },
  {
    id: 17,
    product_type: ["Low Energy", "Muscle Recovery"],
    product_title: "Creatine",
    img: "https://images.unsplash.com/photo-1693996045435-af7c48b9cafb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNyZWF0aW5lfGVufDB8fDB8fHww",
    product_description:
      "Creatine is a naturally occurring compound found in muscle cells and is widely used as a dietary supplement to enhance strength, muscle mass, and exercise performance. It works by replenishing the body’s adenosine triphosphate (ATP) stores, providing energy for high-intensity, short-duration activities like weightlifting and sprinting. Creatine is typically consumed in monohydrate form, with a common loading phase of 20 grams per day (split into 4 doses) for 5–7 days, followed by a maintenance dose of 3–5 grams per day. It is generally safe for most people, but potential side effects may include mild water retention, bloating, or stomach upset, especially during the loading phase. Long-term use has been extensively studied and shown to be safe for healthy individuals, but those with kidney conditions or other medical concerns should consult a healthcare professional before use. Staying well-hydrated while taking creatine is also recommended to avoid dehydration.",
    price: 15.0,
  },
  {
    id: 18,
    product_type: ["Low Energy", "Hormonal Imbalances", "Overall Immunity"],
    product_title: "Selenium",
    img: "https://www.gandgvitamins.com/user/products/GA097-selenium-MAIN.jpg",
    product_description:
      "Selenium is an essential trace mineral that plays a vital role in supporting immune function, thyroid health, and antioxidant protection, helping to prevent cell damage caused by free radicals. It is commonly found in foods like Brazil nuts, seafood, eggs, and grains, and is also available as a dietary supplement. The recommended daily dosage for selenium varies by age and health status, with the general adult intake being 55 micrograms per day. Selenium is often used to support thyroid hormone production, promote reproductive health, and boost immunity. However, excessive selenium intake can lead to toxicity, known as selenosis, which may cause symptoms like hair loss, brittle nails, gastrointestinal distress, fatigue, and in severe cases, nerve damage. To avoid adverse effects, it is important not to exceed the tolerable upper intake level of 400 micrograms per day for adults. Always consult a healthcare professional before starting selenium supplementation, especially if you have existing health conditions.",
    price: 15.0,
  },
  {
    id: 19,
    product_type: [
      "Overall Immunity",
      "Inflammation & Joint Pain",
      "Liver Problems",
    ],
    product_title: "Glutathione",
    img: "https://pics.walgreens.com/prodimg/659538/900.jpg",
    product_description:
      "Glutathione is a powerful antioxidant naturally produced in the body, playing a key role in protecting cells from oxidative stress, supporting the immune system, and aiding in detoxification by neutralizing harmful toxins. It is commonly used as a supplement to promote skin health, reduce inflammation, support liver function, and potentially improve conditions associated with oxidative damage, such as aging, chronic diseases, and neurological disorders. Glutathione is available in oral, injectable, or liposomal forms, with typical oral dosages ranging from 250 to 500 milligrams per day, though dosages may vary based on individual needs and health conditions. Side effects are generally rare but may include mild digestive upset, bloating, or allergic reactions in some individuals. Excessive supplementation or prolonged use may interfere with natural glutathione production. It is advisable to consult a healthcare provider before beginning glutathione supplementation, particularly if you are pregnant, nursing, or managing chronic health conditions.",
    price: 22.0,
  },
  {
    id: 20,
    product_type: ["Cold & Flu", "Overall Immunity"],
    product_title: "Zinc",
    img: "https://media.istockphoto.com/id/497124680/photo/pills-with-zinc-zn-element-dietary-supplements-vitamin-capsules.jpg?s=612x612&w=0&k=20&c=V9jK2Gvrf_mblyT80LrjbZ2UPlWDbqpJn2h53mUZmgE=",
    product_description:
      "Zinc is an essential mineral that plays a vital role in various physiological functions, including supporting immune system health, aiding in wound healing, promoting proper growth and development, and facilitating enzymatic reactions in the body. It is commonly used as a dietary supplement to help prevent or address zinc deficiencies, boost immune response, and reduce the duration of colds. The recommended daily dosage for zinc varies based on age and gender, but for adults, the typical dose ranges from 8 to 11 milligrams per day. Zinc supplements are often available in forms such as zinc gluconate, zinc sulfate, or zinc acetate. Potential side effects of zinc supplementation include nausea, vomiting, diarrhea, and stomach discomfort, especially when taken on an empty stomach or in high doses. Excessive zinc intake can lead to copper deficiency, weakened immune function, and imbalances in other minerals, so it’s important to adhere to recommended dosages and consult with a healthcare professional if needed.",
    price: 15.0,
  },
  {
    id: 21,
    product_type: ["Stress & Anxiety", "Muscle Recovery", "Fibromyalgia"],
    product_title: "Magnesium",
    img: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/2120x1415+0+0/resize/1100/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F9a%2F44%2Fe6971c4f4c25849c5547317023da%2Fgettyimages-1457404483.jpg",
    product_description:
      "Magnesium is an essential mineral that plays a vital role in many bodily functions, including muscle and nerve function, blood sugar regulation, and energy production. The recommended daily dosage for adults typically ranges from about 310 to 420 milligrams, depending on factors like age, sex, and overall health. Magnesium supplements come in several forms—such as magnesium citrate, oxide, or glycinate—which differ in terms of absorption and potential gastrointestinal tolerance. Common side effects of supplementation, particularly at higher doses, can include diarrhea, stomach cramps, and nausea. In rare cases, excessive magnesium intake can lead to more serious issues like an irregular heartbeat or low blood pressure, especially in individuals with kidney dysfunction. It is advisable to consult a healthcare provider before beginning magnesium supplementation, especially if you have existing medical conditions or are taking other medications that might interact with magnesium.",
    price: 15.0,
  },
  {
    id: 22,
    product_type: [""],
    product_title: "Fish Oil",
    img: "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/13455207/shutterstock_1232669710.jpg?quality=90&strip=all&crop=4.2350782306355%2C0%2C91.529843538729%2C100&w=2400",
    product_description:
      "Fish oil is a popular supplement rich in omega-3 fatty acids, primarily eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA), which support cardiovascular health, reduce inflammation, and promote brain function. Commonly recommended dosages for general health range from 250 to 1,000 milligrams per day, though therapeutic doses for specific conditions might be higher—always consult a healthcare provider for personalized advice. While fish oil is generally safe, some individuals may experience side effects such as fishy aftertaste, belching, gastrointestinal discomfort, or loose stools. In high doses, there is also a risk of increased bleeding, especially if combined with blood-thinning medications. As with any supplement, it’s important to choose high-quality products that are purified to remove contaminants and to discuss with a healthcare professional before starting a new regimen.",
    price: 23.0,
  },
  {
    id: 23,
    product_type: ["Low Energy", "Overall Immunity"],
    product_title: "Iron",
    img: "https://www.healthcastle.com/wp-content/uploads/2014/08/iron_pills.jpg",
    product_description:
      "Iron supplements are commonly used to treat or prevent iron deficiency and anemia. The typical adult dosage varies from 60 to 200 milligrams of elemental iron per day, depending on the severity of the deficiency and individual needs, but it's essential to follow a healthcare provider's recommendations since too much iron can be harmful. Common forms include ferrous sulfate, ferrous fumarate, and ferrous gluconate, each differing in elemental iron content and gastrointestinal tolerance. Side effects of iron supplements may include constipation, nausea, stomach upset, and darkened stools. In some cases, especially at high doses or with prolonged use, iron supplementation can lead to more serious issues such as iron overload, which can damage organs like the liver and heart. It is recommended to take iron supplements on an empty stomach for better absorption, though this may increase gastrointestinal discomfort, so taking them with food (while possibly reducing absorption) is an option for those who experience significant side effects. Always consult a healthcare professional before starting iron supplementation to ensure proper dosing and monitoring.",
    price: 21.0,
  },
  {
    id: 24,
    product_type: ["Muscle Recovery"],
    product_title: "Whey Protein",
    img: "https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/b8f20ba454daac59-XJWFh3d0-large.jpg",
    product_description:
      "Whey protein is a high-quality protein derived from milk that is popular among athletes, fitness enthusiasts, and those looking to supplement their daily protein intake. It is typically consumed in powder form and can be mixed with water, milk, or added to smoothies. The common serving size is around 20–30 grams per serving, with many individuals consuming one to two servings per day depending on their protein requirements, activity level, and overall dietary intake. While whey protein is generally safe for most people, possible side effects may include digestive discomfort such as bloating, gas, or diarrhea—especially in those with lactose intolerance, though many whey protein isolates have reduced lactose content. In rare cases, high protein intake may stress the kidneys over time, so it's advisable for individuals with existing kidney conditions to consult a healthcare professional before use. As with any supplement, it’s best to choose a reputable product and use it as part of a balanced diet to support overall health and muscle recovery.",
    price: 45.0,
  },
  {
    id: 25,
    product_type: ["Stress & Anxiety"],
    product_title: "Lavendar Oil",
    img: "https://cdn.shopify.com/s/files/1/0648/1955/files/oil_from_lavender.jpg",
    product_description:
      "Lavender oil is a popular essential oil widely used for its calming and soothing properties, often employed in aromatherapy, topical applications, and massage blends. For aromatherapy, typically 3–5 drops are added to a diffuser per session, while for topical use it is crucial to dilute it in a carrier oil—usually to a 1–2% concentration—to minimize the risk of skin irritation. Although generally safe when used appropriately, some individuals may experience side effects such as skin irritation, allergic reactions, or photosensitivity. Ingestion of undiluted lavender oil is not recommended due to potential toxicity, and those with sensitive skin or specific health conditions should perform a patch test or consult a healthcare professional before use. As with any essential oil, proper usage and dilution are key to enjoying its benefits safely.",
    price: 15.0,
  },
];

module.exports = productsData;
