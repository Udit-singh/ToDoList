var ul = document.getElementById('list')
var li;
showtask();

var addButton = document.getElementById('add')
addButton.addEventListener("click",addItem)

function addItem() {
	var input = document.getElementById('input') 
	var item = input.value;
	ul = document.getElementById('list') 
	var textNode = document.createTextNode(item)

	// Saving the task in Local Storage

		let webtask = localStorage.getItem("localtask");
		if (webtask == null) {
			taskobj = [];
		}
		else {
			taskobj = JSON.parse(webtask);
		}
		taskobj.push(item);
		localStorage.setItem("localtask",JSON.stringify(taskobj))
		
		// Done add

	if(item == '') {
		msg = "Enter your Task"
		alert(msg)
		return false
	} 
	else {
		
		li = document.createElement('li')
		let checkbox = document.createElement('input')
		checkbox.type = 'checkbox'
		checkbox.setAttribute('id','check')

		let label = document.createElement('label')
		

		if(label!= null)
		{
		ul.appendChild(label)
		}

		li.appendChild(checkbox)

		if(textNode!= null)
		{
		label.appendChild(textNode)
		}

		if(label!= null)
		{
		li.appendChild(label)
		}

		ul.insertBefore(li, ul.childNodes[0])

		setTimeout(() => {
			li.className = 'visual'
		},5)
		input.value=" "



	}

	function showtask() {
			let webtask = localStorage.getItem("localtask");
			if (webtask == null) {
				taskobj = [];
			}	
			else {
				taskobj = JSON.parse(webtask);
			}
			let html = '';
			let mainlist = document.getElementById("list");
			taskobj.forEach((item,index) => {
				html += `<ul id="list">
					<li class="mycheck"><input type="checkbox" 
						id="check"><label>${item}</label></li>
					</li>
				</ul>`;
			});
			mainlist.innerHTML = html;
		} 
		// Done shown
}

		function showtask() {
			let webtask = localStorage.getItem("localtask");
			if (webtask == null) {
				taskobj = [];
			}	
			else {
				taskobj = JSON.parse(webtask);
			}
			let html = '';
			let mainlist = document.getElementById("list");
			taskobj.forEach((item,index) => {
				html += `<ul id="list">
					<li class="mycheck"><input type="checkbox" 
						id="check"><label>${item}</label></li>
					</li>
				</ul>`;
			});
			mainlist.innerHTML = html;
		} 
		// Done shown


var removeButton = document.getElementById('remove') 
removeButton.addEventListener("click",removeItem)

function removeItem() {
	li=ul.children

	for (let i = 0; i<li.length; i++) 
	{
		const element = li[i];

		while(li[i] && li[i].children[0].checked) 
		{
			ul.removeChild(li[i])
			// For Deleting from Local Storage
			
			let webtask = localStorage.getItem("localtask");
			let taskobj = JSON.parse(webtask);
			taskobj.splice(index,1);
			localStorage.setItem("localtask",JSON.stringify(taskobj));
			showtask();
		}
	}
	
}


function deleteition(index) {
	let webtask = localStorage.getItem("localtask");
	let taskobj = JSON.parse(webtask);
	taskobj.splice(index,1);
	localStorage.setItem("localtask",JSON.stringify(taskobj));
	showtask();
}