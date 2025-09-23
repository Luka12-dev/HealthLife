// All food
const foodDB = {
  "apple": { calories: 52, protein: 0.3, carbs: 14, fat: 0.2, alt: "Pear, Berries" },
  "banana": { calories: 96, protein: 1.3, carbs: 27, fat: 0.3, alt: "Apple, Dates" },
  "orange": { calories: 47, protein: 0.9, carbs: 12, fat: 0.1, alt: "Mandarin, Grapefruit" },
  "pear": { calories: 57, protein: 0.4, carbs: 15, fat: 0.1, alt: "Apple" },
  "peach": { calories: 39, protein: 0.9, carbs: 10, fat: 0.3, alt: "Nectarine, Apricot" },
  "plum": { calories: 46, protein: 0.7, carbs: 11, fat: 0.3, alt: "Prune, Peach" },
  "mango": { calories: 60, protein: 0.8, carbs: 15, fat: 0.4, alt: "Papaya, Peach" },
  "pineapple": { calories: 50, protein: 0.5, carbs: 13, fat: 0.1, alt: "Mango, Papaya" },
  "strawberry": { calories: 33, protein: 0.7, carbs: 8, fat: 0.3, alt: "Raspberry, Blueberry" },
  "blueberry": { calories: 57, protein: 0.7, carbs: 14, fat: 0.3, alt: "Blackberry" },
  "raspberry": { calories: 52, protein: 1.2, carbs: 12, fat: 0.7, alt: "Strawberry, Blueberry" },
  "blackberry": { calories: 43, protein: 1.4, carbs: 10, fat: 0.5, alt: "Raspberry" },
  "watermelon": { calories: 30, protein: 0.6, carbs: 8, fat: 0.2, alt: "Cantaloupe" },
  "cantaloupe": { calories: 34, protein: 0.8, carbs: 8, fat: 0.2, alt: "Honeydew, Melon" },
  "honeydew": { calories: 36, protein: 0.5, carbs: 9, fat: 0.1, alt: "Cantaloupe" },
  "grapes": { calories: 69, protein: 0.7, carbs: 18, fat: 0.2, alt: "Raisins (dried), Kiwi" },
  "kiwi": { calories: 61, protein: 1.1, carbs: 15, fat: 0.5, alt: "Strawberry, Pineapple" },
  "apricot": { calories: 48, protein: 1.4, carbs: 11, fat: 0.4, alt: "Peach, Plum" },
  "fig": { calories: 74, protein: 0.8, carbs: 19, fat: 0.3, alt: "Dates, Prunes" },
  "pomegranate": { calories: 83, protein: 1.7, carbs: 19, fat: 1.2, alt: "Berries" },
  "lemon": { calories: 29, protein: 1.1, carbs: 9, fat: 0.3, alt: "Lime" },
  "lime": { calories: 30, protein: 0.7, carbs: 11, fat: 0.2, alt: "Lemon" },
  "avocado": { calories: 160, protein: 2.0, carbs: 9, fat: 15, alt: "Hummus, Nuts" },
  "tomato": { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, alt: "Red pepper" },
  "cucumber": { calories: 16, protein: 0.7, carbs: 3.6, fat: 0.1, alt: "Zucchini" },
  "lettuce": { calories: 15, protein: 1.4, carbs: 2.9, fat: 0.2, alt: "Spinach" },
  "spinach": { calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, alt: "Kale" },
  "kale": { calories: 35, protein: 2.9, carbs: 4, fat: 0.6, alt: "Spinach" },
  "arugula": { calories: 25, protein: 2.6, carbs: 3.7, fat: 0.7, alt: "Spinach, Lettuce" },
  "broccoli": { calories: 34, protein: 2.8, carbs: 7, fat: 0.4, alt: "Cauliflower" },
  "cauliflower": { calories: 25, protein: 1.9, carbs: 5, fat: 0.3, alt: "Broccoli" },
  "cabbage": { calories: 25, protein: 1.3, carbs: 6, fat: 0.1, alt: "Kale, Brussels sprouts" },
  "brussels sprouts": { calories: 43, protein: 3.4, carbs: 9, fat: 0.3, alt: "Cabbage" },
  "carrot": { calories: 41, protein: 0.9, carbs: 10, fat: 0.2, alt: "Beetroot" },
  "beetroot": { calories: 43, protein: 1.6, carbs: 10, fat: 0.2, alt: "Carrot" },
  "radish": { calories: 16, protein: 0.7, carbs: 3.4, fat: 0.1, alt: "Cucumber" },
  "celery": { calories: 16, protein: 0.7, carbs: 3, fat: 0.2, alt: "Cucumber" },
  "bell pepper": { calories: 31, protein: 1.0, carbs: 6, fat: 0.3, alt: "Tomato" },
  "chili pepper": { calories: 40, protein: 2.0, carbs: 9, fat: 0.4, alt: "Bell pepper" },
  "eggplant": { calories: 25, protein: 1.0, carbs: 6, fat: 0.2, alt: "Zucchini" },
  "zucchini": { calories: 17, protein: 1.2, carbs: 3.1, fat: 0.3, alt: "Cucumber" },
  "pumpkin": { calories: 26, protein: 1.0, carbs: 7, fat: 0.1, alt: "Butternut squash" },
  "butternut squash": { calories: 45, protein: 1.0, carbs: 12, fat: 0.1, alt: "Pumpkin, Sweet potato" },
  "sweet potato": { calories: 86, protein: 1.6, carbs: 20, fat: 0.1, alt: "Pumpkin" },
  "potato": { calories: 77, protein: 2.0, carbs: 17, fat: 0.1, alt: "Sweet potato" },
  "onion": { calories: 40, protein: 1.1, carbs: 9, fat: 0.1, alt: "Shallot" },
  "garlic": { calories: 149, protein: 6.4, carbs: 33, fat: 0.5, alt: "Shallot, Onion" },
  "leek": { calories: 61, protein: 1.5, carbs: 14, fat: 0.3, alt: "Onion" },
  "shallot": { calories: 72, protein: 2.5, carbs: 16, fat: 0.1, alt: "Onion" },
  "corn": { calories: 86, protein: 3.4, carbs: 19, fat: 1.2, alt: "Sweet corn" },
  "peas": { calories: 81, protein: 5.4, carbs: 14, fat: 0.4, alt: "Green beans" },
  "green beans": { calories: 31, protein: 1.8, carbs: 7, fat: 0.1, alt: "Asparagus" },
  "asparagus": { calories: 20, protein: 2.2, carbs: 3.9, fat: 0.1, alt: "Green beans" },
  "mushroom": { calories: 22, protein: 3.1, carbs: 3.3, fat: 0.3, alt: "Tofu (texture)" },
  "olives": { calories: 115, protein: 0.8, carbs: 6, fat: 11, alt: "Capers" },
  "artichoke": { calories: 47, protein: 3.3, carbs: 11, fat: 0.2, alt: "Asparagus" },
  "parsnip": { calories: 75, protein: 1.2, carbs: 18, fat: 0.3, alt: "Carrot" },
  "turnip": { calories: 28, protein: 0.9, carbs: 6, fat: 0.1, alt: "Radish" },
  "yam": { calories: 118, protein: 1.5, carbs: 27, fat: 0.2, alt: "Sweet potato" },
  "taro": { calories: 142, protein: 0.5, carbs: 34, fat: 0.1, alt: "Potato" },
  "plantain": { calories: 122, protein: 1.3, carbs: 32, fat: 0.4, alt: "Banana" },
  "quinoa": { calories: 120, protein: 4.4, carbs: 21, fat: 1.9, alt: "Buckwheat, Brown rice" },
  "rice": { calories: 130, protein: 2.7, carbs: 28, fat: 0.3, alt: "Brown rice" },
  "brown rice": { calories: 123, protein: 2.7, carbs: 25.6, fat: 1.0, alt: "White rice" },
  "oats": { calories: 389, protein: 16.9, carbs: 66.3, fat: 6.9, alt: "Muesli" },
  "barley": { calories: 354, protein: 12.5, carbs: 73, fat: 2.3, alt: "Farro" },
  "millet": { calories: 378, protein: 11.0, carbs: 73, fat: 4.2, alt: "Sorghum" },
  "bulgur": { calories: 83, protein: 3.1, carbs: 18.6, fat: 0.2, alt: "Couscous" },
  "couscous": { calories: 112, protein: 3.8, carbs: 23.2, fat: 0.2, alt: "Bulgur" },
  "pasta": { calories: 131, protein: 5.0, carbs: 25, fat: 1.1, alt: "Zucchini noodles" },
  "bread": { calories: 265, protein: 9.0, carbs: 49, fat: 3.2, alt: "Whole wheat bread" },
  "whole wheat bread": { calories: 247, protein: 13.0, carbs: 41, fat: 3.4, alt: "Sourdough" },
  "rye bread": { calories: 259, protein: 8.9, carbs: 48, fat: 3.3, alt: "Whole wheat bread" },
  "sourdough": { calories: 289, protein: 8.6, carbs: 56, fat: 1.6, alt: "Whole wheat bread" },
  "bagel": { calories: 250, protein: 9.0, carbs: 49, fat: 1.0, alt: "Bread" },
  "tortilla": { calories: 237, protein: 6.7, carbs: 49, fat: 3.3, alt: "Wrap" },
  "naan": { calories: 310, protein: 9.0, carbs: 49, fat: 6.0, alt: "Flatbread" },
  "chickpeas": { calories: 164, protein: 8.9, carbs: 27.4, fat: 2.6, alt: "Lentils, Beans" },
  "lentils": { calories: 116, protein: 9.0, carbs: 20, fat: 0.4, alt: "Chickpeas" },
  "black beans": { calories: 132, protein: 8.9, carbs: 23.7, fat: 0.5, alt: "Kidney beans" },
  "kidney beans": { calories: 127, protein: 8.7, carbs: 22.8, fat: 0.5, alt: "Black beans" },
  "pinto beans": { calories: 143, protein: 9.0, carbs: 27.2, fat: 0.8, alt: "Kidney beans" },
  "soybeans": { calories: 446, protein: 36.5, carbs: 30.2, fat: 19.9, alt: "Tofu, Edamame" },
  "tofu": { calories: 76, protein: 8.0, carbs: 1.9, fat: 4.8, alt: "Tempeh" },
  "tempeh": { calories: 193, protein: 19.0, carbs: 9.4, fat: 10.8, alt: "Tofu" },
  "edamame": { calories: 121, protein: 11.9, carbs: 8.9, fat: 5.2, alt: "Soybeans" },
  "almonds": { calories: 579, protein: 21.2, carbs: 21.6, fat: 49.9, alt: "Walnuts, Pistachios" },
  "walnuts": { calories: 654, protein: 15.2, carbs: 13.7, fat: 65.2, alt: "Almonds" },
  "cashews": { calories: 553, protein: 18.2, carbs: 30.2, fat: 43.9, alt: "Almonds" },
  "pistachios": { calories: 562, protein: 20.2, carbs: 27.5, fat: 45, alt: "Almonds" },
  "hazelnuts": { calories: 628, protein: 14.1, carbs: 16.7, fat: 60.8, alt: "Walnuts" },
  "pecans": { calories: 691, protein: 9.2, carbs: 13.9, fat: 72, alt: "Walnuts" },
  "peanuts": { calories: 567, protein: 25.8, carbs: 16.1, fat: 49.2, alt: "Peanut butter" },
  "peanut butter": { calories: 588, protein: 25.0, carbs: 20.0, fat: 50.0, alt: "Almond butter" },
  "almond butter": { calories: 614, protein: 21.2, carbs: 19.0, fat: 56.0, alt: "Peanut butter" },
  "sunflower seeds": { calories: 584, protein: 20.8, carbs: 20.0, fat: 51.5, alt: "Pumpkin seeds" },
  "pumpkin seeds": { calories: 559, protein: 30.2, carbs: 10.7, fat: 49.1, alt: "Sunflower seeds" },
  "chia seeds": { calories: 486, protein: 16.5, carbs: 42.1, fat: 30.7, alt: "Flaxseed" },
  "flaxseed": { calories: 534, protein: 18.3, carbs: 28.9, fat: 42.2, alt: "Chia seeds" },
  "sesame seeds": { calories: 573, protein: 17.7, carbs: 23.4, fat: 49.7, alt: "Tahini" },
  "greek yogurt": { calories: 59, protein: 10.0, carbs: 3.6, fat: 0.4, alt: "Skyr, Cottage cheese" },
  "yogurt": { calories: 59, protein: 3.5, carbs: 4.7, fat: 3.3, alt: "Greek yogurt" },
  "milk (whole)": { calories: 60, protein: 3.2, carbs: 4.8, fat: 3.3, alt: "Skim milk, Almond milk" },
  "milk (skim)": { calories: 34, protein: 3.4, carbs: 5.0, fat: 0.1, alt: "Milk (whole)" },
  "almond milk": { calories: 15, protein: 0.6, carbs: 0.3, fat: 1.2, alt: "Soy milk" },
  "soy milk": { calories: 54, protein: 3.3, carbs: 6.0, fat: 1.8, alt: "Almond milk" },
  "cheddar cheese": { calories: 403, protein: 24.9, carbs: 1.3, fat: 33.1, alt: "Mozzarella" },
  "mozzarella": { calories: 280, protein: 18.3, carbs: 2.2, fat: 17.1, alt: "Cheddar" },
  "cottage cheese": { calories: 98, protein: 11.1, carbs: 3.4, fat: 4.3, alt: "Greek yogurt" },
  "ricotta": { calories: 174, protein: 11.3, carbs: 3.0, fat: 13.0, alt: "Cottage cheese" },
  "eggs": { calories: 155, protein: 13.0, carbs: 1.1, fat: 11.0, alt: "Egg whites" },
  "salmon": { calories: 208, protein: 20.0, carbs: 0, fat: 13.0, alt: "Trout, Sardines" },
  "tuna": { calories: 116, protein: 26.0, carbs: 0, fat: 0.8, alt: "Salmon" },
  "cod": { calories: 82, protein: 18.0, carbs: 0, fat: 0.7, alt: "Haddock" },
  "trout": { calories: 148, protein: 20.5, carbs: 0, fat: 6.6, alt: "Salmon" },
  "sardines": { calories: 208, protein: 25.0, carbs: 0, fat: 11.5, alt: "Mackerel" },
  "mackerel": { calories: 205, protein: 19.0, carbs: 0, fat: 13.9, alt: "Sardines" },
  "shrimp": { calories: 99, protein: 24.0, carbs: 0.2, fat: 0.3, alt: "Crab" },
  "crab": { calories: 83, protein: 18.1, carbs: 0, fat: 1.5, alt: "Shrimp" },
  "lobster": { calories: 77, protein: 16.0, carbs: 0, fat: 0.8, alt: "Crab" },
  "chicken breast": { calories: 165, protein: 31.0, carbs: 0, fat: 3.6, alt: "Turkey, Tofu" },
  "chicken thigh": { calories: 209, protein: 26.0, carbs: 0, fat: 10.9, alt: "Chicken breast" },
  "turkey": { calories: 189, protein: 29.0, carbs: 0, fat: 6.4, alt: "Chicken" },
  "beef (ground)": { calories: 250, protein: 26.0, carbs: 0, fat: 15.0, alt: "Lean beef" },
  "steak": { calories: 271, protein: 25.0, carbs: 0, fat: 19.0, alt: "Beef (ground)" },
  "pork chop": { calories: 231, protein: 25.0, carbs: 0, fat: 13.8, alt: "Lean pork" },
  "bacon": { calories: 541, protein: 37.0, carbs: 1.4, fat: 42.0, alt: "Turkey bacon" },
  "ham": { calories: 145, protein: 20.9, carbs: 1.5, fat: 5.9, alt: "Lean ham" },
  "lamb": { calories: 294, protein: 25.6, carbs: 0, fat: 21.2, alt: "Beef" },
  "duck": { calories: 337, protein: 19.0, carbs: 0, fat: 28.0, alt: "Chicken" },
  "venison": { calories: 158, protein: 30.0, carbs: 0, fat: 3.2, alt: "Lean beef" },
  "pepperoni": { calories: 494, protein: 23.0, carbs: 1.8, fat: 44.0, alt: "Salami" },
  "sausage": { calories: 301, protein: 12.5, carbs: 1.9, fat: 26.0, alt: "Lean sausage" },
  "hot dog": { calories: 290, protein: 10.0, carbs: 2.5, fat: 26.0, alt: "Turkey hot dog" },
  "pizza": { calories: 266, protein: 11.0, carbs: 33.0, fat: 10.0, alt: "Whole grain wrap with veggies" },
  "burger": { calories: 295, protein: 17.0, carbs: 30.0, fat: 13.0, alt: "Lean turkey burger" },
  "fries": { calories: 312, protein: 3.4, carbs: 41.0, fat: 15.0, alt: "Baked sweet potato" },
  "ice cream": { calories: 207, protein: 3.5, carbs: 24.0, fat: 11.0, alt: "Frozen yogurt" },
  "chocolate": { calories: 546, protein: 4.9, carbs: 61.0, fat: 31.0, alt: "Dark chocolate, Nuts" },
  "dark chocolate": { calories: 546, protein: 4.9, carbs: 61.0, fat: 31.0, alt: "Cocoa nibs, Nuts" },
  "cake": { calories: 257, protein: 3.6, carbs: 33.0, fat: 12.0, alt: "Fruit dessert" },
  "cookies": { calories: 502, protein: 6.0, carbs: 67.0, fat: 24.0, alt: "Oat cookies" },
  "donut": { calories: 452, protein: 4.9, carbs: 51.0, fat: 25.0, alt: "Baked donut" },
  "croissant": { calories: 406, protein: 8.1, carbs: 45.0, fat: 21.0, alt: "Pastry" },
  "pancakes": { calories: 227, protein: 6.0, carbs: 28.0, fat: 10.0, alt: "Waffles" },
  "waffle": { calories: 291, protein: 6.1, carbs: 36.0, fat: 13.0, alt: "Pancakes" },
  "syrup": { calories: 260, protein: 0.0, carbs: 67.0, fat: 0.0, alt: "Honey (sparingly)" },
  "honey": { calories: 304, protein: 0.3, carbs: 82.0, fat: 0.0, alt: "Maple syrup (sparingly)" },
  "jam": { calories: 250, protein: 0.4, carbs: 66.0, fat: 0.0, alt: "Fruit spread" },
  "granola": { calories: 471, protein: 8.0, carbs: 64.0, fat: 19.0, alt: "Muesli" },
  "muesli": { calories: 333, protein: 8.9, carbs: 67.0, fat: 7.0, alt: "Granola" },
  "breakfast cereal": { calories: 379, protein: 8.0, carbs: 84.0, fat: 2.0, alt: "Oats" },
  "smoothie": { calories: 120, protein: 2.0, carbs: 28.0, fat: 0.5, alt: "Fruit shake" },
  "coffee": { calories: 2, protein: 0.1, carbs: 0.0, fat: 0.0, alt: "Tea, Black" },
  "tea": { calories: 1, protein: 0.0, carbs: 0.0, fat: 0.0, alt: "Herbal" },
  "green tea": { calories: 1, protein: 0.0, carbs: 0.0, fat: 0.0, alt: "Black tea" },
  "black tea": { calories: 1, protein: 0.0, carbs: 0.0, fat: 0.0, alt: "Green tea" },
  "soda": { calories: 40, protein: 0.0, carbs: 10.6, fat: 0.0, alt: "Sparkling water" },
  "orange juice": { calories: 45, protein: 0.7, carbs: 10.4, fat: 0.2, alt: "Fresh orange" },
  "apple juice": { calories: 46, protein: 0.1, carbs: 11.3, fat: 0.1, alt: "Fresh apple" },
  "tomato juice": { calories: 17, protein: 0.8, carbs: 3.9, fat: 0.2, alt: "Tomato" },
  "beer": { calories: 43, protein: 0.5, carbs: 3.6, fat: 0.0, alt: "Light beer" },
  "wine": { calories: 85, protein: 0.1, carbs: 2.6, fat: 0.0, alt: "Red wine" },
  "whiskey": { calories: 250, protein: 0.0, carbs: 0.0, fat: 0.0, alt: "Spirits (neat)" },
  "vodka": { calories: 231, protein: 0.0, carbs: 0.0, fat: 0.0, alt: "Spirits (neat)" },
  "energy drink": { calories: 45, protein: 0.0, carbs: 11.0, fat: 0.0, alt: "Coffee" },
  "water": { calories: 0, protein: 0.0, carbs: 0.0, fat: 0.0, alt: "Sparkling water" },
  "sparkling water": { calories: 0, protein: 0.0, carbs: 0.0, fat: 0.0, alt: "Water" },
  "coconut water": { calories: 19, protein: 0.7, carbs: 3.7, fat: 0.2, alt: "Water" },
  "olive oil": { calories: 884, protein: 0.0, carbs: 0.0, fat: 100.0, alt: "Avocado oil" },
  "coconut oil": { calories: 892, protein: 0.0, carbs: 0.0, fat: 100.0, alt: "Olive oil" },
  "butter": { calories: 717, protein: 0.9, carbs: 0.1, fat: 81.1, alt: "Ghee" },
  "ghee": { calories: 900, protein: 0.0, carbs: 0.0, fat: 100.0, alt: "Butter" },
  "mayonnaise": { calories: 680, protein: 0.7, carbs: 0.6, fat: 75.0, alt: "Yogurt-based dressing" },
  "ketchup": { calories: 112, protein: 1.3, carbs: 26.0, fat: 0.1, alt: "Tomato paste" },
  "mustard": { calories: 66, protein: 3.5, carbs: 5.8, fat: 4.1, alt: "Vinegar" },
  "soy sauce": { calories: 53, protein: 8.1, carbs: 4.9, fat: 0.6, alt: "Tamari" },
  "vinegar": { calories: 18, protein: 0.0, carbs: 0.0, fat: 0.0, alt: "Balsamic vinegar" },
  "balsamic vinegar": { calories: 88, protein: 0.5, carbs: 17.0, fat: 0.0, alt: "Vinegar" },
  "basil": { calories: 23, protein: 3.2, carbs: 2.7, fat: 0.6, alt: "Parsley" },
  "cilantro": { calories: 23, protein: 2.1, carbs: 3.7, fat: 0.5, alt: "Parsley" },
  "parsley": { calories: 36, protein: 3.0, carbs: 6.3, fat: 0.8, alt: "Cilantro" },
  "rosemary": { calories: 131, protein: 3.3, carbs: 20.7, fat: 5.9, alt: "Thyme" },
  "thyme": { calories: 101, protein: 5.6, carbs: 24.0, fat: 1.7, alt: "Rosemary" },
  "oregano": { calories: 265, protein: 9.0, carbs: 68.9, fat: 4.3, alt: "Thyme" },
  "cinnamon": { calories: 247, protein: 4.0, carbs: 81.3, fat: 1.2, alt: "Nutmeg" },
  "nutmeg": { calories: 525, protein: 6.0, carbs: 49.3, fat: 36.3, alt: "Cinnamon" },
  "turmeric": { calories: 354, protein: 7.8, carbs: 64.9, fat: 9.9, alt: "Ginger" },
  "ginger": { calories: 80, protein: 1.8, carbs: 17.8, fat: 0.8, alt: "Turmeric" }
};

function keyOf(name){
  return String(name || '').trim().toLowerCase();
}

function seedFromDatalist(){
  const opts = document.querySelectorAll('#food-list option');
  if(!opts) return;
  opts.forEach(o => {
    const val = (o.value || '').trim();
    if(!val) return;
    const k = keyOf(val);
    if(!foodDB[k]){
      foodDB[k] = { calories: null, protein: null, carbs: null, fat: null, alt: "" };
    }
  });
}

function nf(v){
  if(v === null || v === undefined) return '-';
  if(Number.isInteger(v)) return String(v);
  return Number.parseFloat(v).toFixed(1).replace(/\.0$/, '');
}

function emojiFor(name){
  const n = keyOf(name);
  if(n.includes('apple')) return '🍎';
  if(n.includes('banana')) return '🍌';
  if(n.includes('salmon') || n.includes('tuna') || n.includes('shrimp')) return '🐟';
  if(n.includes('chicken') || n.includes('turkey')) return '🍗';
  if(n.includes('milk') || n.includes('yogurt') || n.includes('cheese')) return '🥛';
  if(n.includes('bread') || n.includes('pasta') || n.includes('rice') || n.includes('quinoa')) return '🍞';
  if(n.includes('carrot') || n.includes('broccoli') || n.includes('spinach') || n.includes('kale')) return '🥕';
  if(n.includes('avocado')) return '🥑';
  if(n.includes('coffee')) return '☕';
  if(n.includes('water')) return '💧';
  if(n.includes('chocolate') || n.includes('cake') || n.includes('ice cream')) return '🍫';
  if(n.includes('pizza') || n.includes('burger') || n.includes('fries')) return '🍔';
  return '🍽️';
}

function renderResult(name){
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';
  const k = keyOf(name);
  const entry = foodDB[k];
  if(!entry){
    seedFromDatalist();
  }

  const food = foodDB[k];
  if(!food || food.calories === null){
    const card = document.createElement('div');
    card.className = 'card no-data';
    card.innerHTML = `
      <div class="title">${name}</div>
      <div class="meta">Nutrition data not available</div>
      <p>We don't have verified numbers for "<strong>${name}</strong>" in the local DB.</p>
      <p class="alt">What you can do: try a close match (e.g. "apple"), or connect to a nutrition API for accurate info.</p>
    `;
    resultsDiv.appendChild(card);
    return;
  }

  const emoji = emojiFor(name);
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="result-body">
      <div class="result-left">
        <div class="food-emoji">${emoji}</div>
        <div class="nutrients">
          <div class="badge kcal">${nf(food.calories)} kcal</div>
        </div>
      </div>

      <div class="details">
        <div class="title">${name}</div>
        <div class="meta">Per 100 g</div>
        <div class="nutrients" style="margin-top:6px">
          <div class="badge">Protein: <strong style="color:var(--text); margin-left:6px">${nf(food.protein)} g</strong></div>
          <div class="badge">Carbs: <strong style="color:var(--text); margin-left:6px">${nf(food.carbs)} g</strong></div>
          <div class="badge">Fat: <strong style="color:var(--text); margin-left:6px">${nf(food.fat)} g</strong></div>
        </div>

        ${food.alt ? `<div class="alt"><strong>Healthier alternatives:</strong> ${food.alt}</div>` : ''}
      </div>
    </div>
  `;
  resultsDiv.appendChild(card);
}

function searchFood(name){
  if(!name) return;
  const normalized = keyOf(name);
  if(foodDB[normalized] !== undefined){
    renderResult(capitalize(name));
    return;
  }
  const alt = normalized.replace(/s$/, '');
  if(foodDB[alt] !== undefined){
    renderResult(capitalize(alt));
    return;
  }
  const foundKey = Object.keys(foodDB).find(k => k.includes(normalized) || normalized.includes(k));
  if(foundKey){
    renderResult(capitalize(foundKey));
    return;
  }
  renderNoMatch(name);
}

function renderNoMatch(name){
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';
  const card = document.createElement('div');
  card.className = 'card no-data';
  card.innerHTML = `
    <div class="title">No match for "${name}"</div>
    <div class="meta">Try a different term or pick from the suggestions below.</div>
    <p class="alt">Tip: use common names like "salmon", "chicken breast", "brown rice".</p>
  `;
  resultsDiv.appendChild(card);
}

function capitalize(s){
  if(!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function setupUI(){
  const searchBtn = document.getElementById('searchBtn');
  const randomBtn = document.getElementById('randomBtn');
  const input = document.getElementById('foodInput');

  if(searchBtn){
    searchBtn.addEventListener('click', ()=>{
      const val = (input.value || '').trim();
      if(!val) return;
      searchFood(val);
    });
  }

  if(randomBtn){
    randomBtn.addEventListener('click', ()=>{
      const list = Array.from(document.querySelectorAll('#food-list option')).map(o=>o.value).filter(Boolean);
      const choice = list[Math.floor(Math.random()*list.length)];
      input.value = choice;
      if(searchBtn) searchBtn.click();
    });
  }

  document.querySelectorAll('.food-card').forEach(card=>{
    card.addEventListener('click', ()=>{
      const name = card.dataset.food || card.querySelector('.title')?.textContent;
      if(!name) return;
      input.value = name;
      if(searchBtn) searchBtn.click();
    });
    card.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key===' '){ e.preventDefault(); card.click(); } });
  });
}

(function init(){
  seedFromDatalist();
  setupUI();

  const resultsDiv = document.getElementById('results');
  if(resultsDiv && resultsDiv.children.length === 0){
    resultsDiv.innerHTML = `
      <div class="card">
        <div class="title">Welcome to Nutrition Explorer</div>
        <div class="meta">Try a quick search</div>
        <p>Type a food name or pick one of the suggestions (e.g. <strong>salmon</strong>, <strong>quinoa</strong>, <strong>apple</strong>).</p>
      </div>
    `;
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".theme-toggle");
  const body = document.body;

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    const isLight = body.classList.contains("light-theme");
    toggleBtn.setAttribute("aria-pressed", isLight);
  });
});