//GOAL: Find all usernames in a reddit thread
//gets a dom element; can take nested descriptors
document.querySelector('.foo li');
 //gets all matching elements and turns them into an array
var links = [...element.querySelectorAll('a')];
 // returns the text of a link
var de = link.map(link => link.textContent).filter(streetName => streetName.includes('de'));

// count the instances of names
obj.reduce(function(obj, item) {
	if (!obj[item]) {
		obj[item] = 0;
	}
	obj[item]++;
	return obj;
}, {});

function toggleActive(e) {
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
}

const dfs = (node) => {
	const stack = [node]; // dfs is stack, bfs is queue, A* is priority
	while(stack.length) {
		let curr = stack.pop() // dequeue, unshift, etc.
		// evaluate curr.value
		curr.children.forEach(c => {
			stack.push(c);
		});
	}
}

// traverse a graph, etc.
const findDAG = (node) => {
	const stack = [node];
	const seen = {node: true};
	while(stack.length) {
		let curr = stack.pop()
		// evaluate curr.value
		curr.children.forEach(c => {
			if (!seen[node]) {
				stack.push(c);
				seen[node] = true;
			}
		});
	}
}

const reverseListRecursive = (node, parent) => {
  let result = parent || {};

  if (node) {
    let child = node.next;
    node.next = parent;

    result = reverseListRecursive(child, node);
  }

  return result;
}

// create a list of articles from an array of news stories
stories.forEach(storyObj => {
	let container = document.getElementById('container');
	let article = document.createElement('article');
	let headline = document.createElement('h3');
	headline.classList.addClass('headline');
	headline.innerHTML = storyObj.headline;
	let image = document.createElement('img');
	image.classList.addClass('photograph')
	image.src = storyObj.imgUrl;
	image.alt = storyObj.imgAltText;
	let story = document.createElement('div');
	story.classList.addClass('story');
	story.innerHTML = storyObj.text;
	article.appendChild(headline);
	article.appendChild(image);
	article.appendChild(story);
	container.appendChild(article);
});
