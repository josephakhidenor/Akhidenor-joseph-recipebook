const RECIPES = [
  { id:1, emoji:'🥞', cat:'Breakfast', title:'Fluffy Buttermilk Pancakes', desc:'Light, golden pancakes with a tender crumb — perfect with maple syrup.', time:'20 min', serv:'2', diff:'Easy',
    ingredients:['1 cup all-purpose flour','1 tbsp sugar','1 tsp baking powder','½ tsp baking soda','¼ tsp salt','1 cup buttermilk','1 egg','2 tbsp melted butter'],
    steps:['Whisk flour, sugar, baking powder, baking soda, and salt in a bowl.','In another bowl, whisk buttermilk, egg, and melted butter.','Pour wet ingredients into dry and stir gently until just combined — lumps are fine.','Heat a non-stick pan over medium heat and lightly grease.','Pour ¼ cup batter per pancake. Cook until bubbles form (2 min), then flip and cook 1 min more.','Serve with maple syrup and fresh berries.']},
  { id:2, emoji:'🥗', cat:'Lunch', title:'Greek Chickpea Salad', desc:'A hearty, vibrant salad packed with protein and Mediterranean flavours.', time:'15 min', serv:'2', diff:'Easy',
    ingredients:['1 can chickpeas, drained','1 cucumber, diced','1 cup cherry tomatoes, halved','½ red onion, finely sliced','½ cup kalamata olives','100g feta cheese, crumbled','2 tbsp olive oil','1 tbsp lemon juice','1 tsp dried oregano','Salt & pepper'],
    steps:['Rinse and drain chickpeas well.','Combine chickpeas, cucumber, tomatoes, red onion, and olives in a large bowl.','Whisk together olive oil, lemon juice, oregano, salt, and pepper.','Pour dressing over the salad and toss to coat.','Top with crumbled feta and serve immediately or refrigerate up to 2 hours.']},
  { id:3, emoji:'🍝', cat:'Dinner', title:'Creamy Tomato Pasta', desc:'A comforting weeknight pasta with a rich, velvety tomato cream sauce.', time:'30 min', serv:'4', diff:'Easy',
    ingredients:['400g penne or rigatoni','2 tbsp olive oil','4 garlic cloves, minced','1 can crushed tomatoes','1 tsp sugar','½ cup heavy cream','1 tsp Italian seasoning','Salt & pepper to taste','Fresh basil & Parmesan to serve'],
    steps:['Cook pasta in salted boiling water until al dente. Reserve ½ cup pasta water before draining.','Heat olive oil in a large skillet over medium heat. Sauté garlic for 1 minute until fragrant.','Add crushed tomatoes, sugar, Italian seasoning, salt, and pepper. Simmer 10 minutes.','Stir in heavy cream and cook 2 more minutes.','Add drained pasta to the sauce, tossing to coat. Add splash of pasta water if needed.','Serve with fresh basil and grated Parmesan.']},
  { id:4, emoji:'🍫', cat:'Dessert', title:'One-Bowl Chocolate Mug Cake', desc:'Rich, gooey chocolate cake ready in 2 minutes — no oven needed.', time:'5 min', serv:'1', diff:'Easy',
    ingredients:['4 tbsp all-purpose flour','4 tbsp sugar','2 tbsp cocoa powder','¼ tsp baking powder','Pinch of salt','3 tbsp milk','3 tbsp vegetable oil','1 egg','Dash of vanilla extract','2 tbsp chocolate chips (optional)'],
    steps:['Mix flour, sugar, cocoa, baking powder, and salt directly in a large mug.','Add milk, oil, egg, and vanilla. Stir until smooth.','Fold in chocolate chips if using.','Microwave on high for 60–90 seconds until just set (centre may look slightly moist).','Let cool 30 seconds and enjoy straight from the mug!']},
  { id:5, emoji:'🥑', cat:'Snack', title:'Guacamole & Tortilla Chips', desc:'Fresh, chunky guacamole made in minutes with simple pantry ingredients.', time:'10 min', serv:'4', diff:'Easy',
    ingredients:['3 ripe avocados','Juice of 1 lime','½ tsp salt','½ white onion, finely diced','1 jalapeño, minced','2 tbsp fresh cilantro, chopped','2 Roma tomatoes, diced','Tortilla chips to serve'],
    steps:['Halve and pit avocados. Scoop flesh into a bowl.','Mash with a fork to your preferred chunky or smooth texture.','Stir in lime juice and salt immediately to prevent browning.','Fold in onion, jalapeño, cilantro, and tomatoes.','Taste and adjust seasoning. Serve with tortilla chips.']},
  { id:6, emoji:'🍳', cat:'Breakfast', title:'Shakshuka', desc:'Eggs poached in a bold, spiced tomato and pepper sauce — a Middle Eastern classic.', time:'25 min', serv:'2', diff:'Medium',
    ingredients:['2 tbsp olive oil','1 onion, diced','1 red bell pepper, diced','3 garlic cloves, minced','1 can crushed tomatoes','1 tsp cumin','1 tsp paprika','¼ tsp cayenne','Salt & pepper','4 large eggs','Fresh parsley & crusty bread to serve'],
    steps:['Heat olive oil in a wide skillet. Sauté onion and pepper over medium heat for 5 minutes.','Add garlic, cumin, paprika, and cayenne. Cook 1 minute until fragrant.','Pour in crushed tomatoes. Season and simmer for 10 minutes until slightly thickened.','Make 4 wells in the sauce. Crack one egg into each well.','Cover and cook 5–7 minutes until whites are set but yolks are still runny.','Garnish with parsley and serve with crusty bread for scooping.']},
  { id:7, emoji:'🌮', cat:'Lunch', title:'Black Bean Tacos', desc:'Quick and satisfying tacos with smoky black beans, fresh salsa, and lime crema.', time:'20 min', serv:'2', diff:'Easy',
    ingredients:['1 can black beans, drained','1 tsp cumin','½ tsp smoked paprika','Salt & pepper','6 small corn tortillas','1 cup salsa','1 avocado, sliced','¼ cup sour cream','Juice of ½ lime','Fresh coriander'],
    steps:['Heat beans in a pan over medium heat with cumin, paprika, salt, and pepper for 3–4 minutes.','Mix sour cream with lime juice to make a quick crema.','Warm tortillas in a dry pan or directly over a flame.','Assemble tacos: spoon beans onto tortillas, top with salsa, avocado, and lime crema.','Finish with fresh coriander and an extra squeeze of lime.']},
  { id:8, emoji:'🍛', cat:'Dinner', title:'Coconut Lentil Curry', desc:'A warming, protein-rich curry that comes together in one pot — vegan and deeply satisfying.', time:'40 min', serv:'4', diff:'Medium',
    ingredients:['1 cup red lentils, rinsed','2 tbsp coconut oil','1 onion, diced','3 garlic cloves, minced','1 tbsp fresh ginger, grated','2 tsp curry powder','1 tsp turmeric','1 can coconut milk','1 can diced tomatoes','2 cups vegetable broth','Salt to taste','Rice and coriander to serve'],
    steps:['Heat coconut oil in a large pot. Sauté onion for 5 minutes until soft.','Add garlic and ginger, cook 1 minute. Stir in curry powder and turmeric.','Add lentils, coconut milk, diced tomatoes, and broth. Stir well.','Bring to a boil, then reduce heat and simmer uncovered for 25 minutes, stirring occasionally, until lentils are soft and sauce has thickened.','Season with salt. Serve over rice with fresh coriander.']},
];

let activeTag = 'All';
let searchQuery = '';

function renderCards(recipes) {
  const grid = document.getElementById('recipe-grid');
  const none = document.getElementById('no-results');
  grid.innerHTML = '';
  if (!recipes.length) { none.style.display = 'block'; return; }
  none.style.display = 'none';
  recipes.forEach(r => {
    const card = document.createElement('div');
    card.className = 'card';
    card.onclick = () => openModal(r.id);
    card.innerHTML = `<div class="card-img" style="background:${bgColor(r.cat)}">${r.emoji}</div>
      <div class="card-body">
        <div class="card-tag">${r.cat}</div>
        <div class="card-title">${r.title}</div>
        <div class="card-meta"><span><i class="ti ti-clock" aria-hidden="true"></i> ${r.time}</span><span><i class="ti ti-users" aria-hidden="true"></i> ${r.serv}</span></div>
      </div>`;
    grid.appendChild(card);
  });
}

function bgColor(cat) {
  const m = {Breakfast:'#FAEEDA',Lunch:'#EAF3DE',Dinner:'#E6F1FB',Dessert:'#FBEAF0',Snack:'#E1F5EE'};
  return m[cat] || '#F1EFE8';
}

function setTag(tag, btn) {
  activeTag = tag;
  document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('section-label').textContent = tag === 'All' ? 'All Recipes' : tag + ' Recipes';
  filterRecipes();
}

function filterRecipes() {
  searchQuery = document.getElementById('search-input').value.toLowerCase();
  const filtered = RECIPES.filter(r => {
    const matchTag = activeTag === 'All' || r.cat === activeTag;
    const matchSearch = !searchQuery || r.title.toLowerCase().includes(searchQuery) || r.cat.toLowerCase().includes(searchQuery);
    return matchTag && matchSearch;
  });
  renderCards(filtered);
}

function openModal(id) {
  const r = RECIPES.find(x => x.id === id);
  if (!r) return;
  document.getElementById('m-emoji').textContent = r.emoji;
  document.getElementById('m-cat').textContent = r.cat;
  document.getElementById('m-title').textContent = r.title;
  document.getElementById('m-desc').textContent = r.desc;
  document.getElementById('m-time').textContent = r.time;
  document.getElementById('m-serv').textContent = r.serv + ' servings';
  document.getElementById('m-diff').textContent = r.diff;
  document.getElementById('m-ing').innerHTML = r.ingredients.map(i => `<li>${i}</li>`).join('');
  document.getElementById('m-steps').innerHTML = r.steps.map(s => `<li>${s}</li>`).join('');
  document.getElementById('modal-bg').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modal-bg')) return;
  document.getElementById('modal-bg').classList.remove('open');
  document.body.style.overflow = '';
}

renderCards(RECIPES);