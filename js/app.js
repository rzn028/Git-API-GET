

//const fetchButton= document.querySelector("#fetch");
const searchInput=document.querySelector("#search");
const userData=document.querySelector(".userGitData");

const name=document.querySelector("#name");
const bio=document.querySelector("#bio");
const created=document.querySelector("#created");
const followers=document.querySelector("#followers");
const following=document.querySelector("#following");
const repos=document.querySelector("#repos");
const url=document.querySelector("#url");
const login=document.querySelector("#login");



const vClientID="Iv1.f680b747cc54d4cd";
const Clientsecret ="f61d0e88be362b010294a3b3d13af49f230ec01e";






const fetchUsers =  async(user)=>{

	const api_call=await fetch(`https://api.github.com/users/${user}?client_id=${vClientID}&client_secrets=${Clientsecret}`);

	const data=await api_call.json();

	return {data:data }

};


const showData = ()=>{

	console.log("API called");

	fetchUsers(searchInput.value).then((res)=>{
		console.log(res);
		name.innerHTML=res.data.name;
		
		created.innerHTML=res.data.created_at;
		following.innerHTML=res.data.following;
		followers.innerHTML=res.data.followers;
		bio.innerHTML=res.data.bio;
		repos.innerHTML=res.data.public_repos;
		location.innerHTML=res.data.location;
		url.innerHTML="<a href="+res.data.html_url+">"+res.data.html_url+"</a>";
		login.innerHTML=res.data.login;

		userData.style.display="block";
	});

}







