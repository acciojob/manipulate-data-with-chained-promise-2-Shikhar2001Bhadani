//your JS code here. If required.
document.addEventListener('DOMContentLoaded',function(){
	let out = document.getElementById('output');
	function myPromise() {
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve([1,2,3,4]);
			},3000);
		});
	}
	myPromise().then( data => {
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					let even = data.filter(num=> num%2==0);
					out.textContent = even;
					resolve(even);
				},1000);
			})
	})
	.then(even => {
		return new Promise((resolve,reject)=>{
				setTimeout(() => {
					let multiply = even.map(n=>n*2);
					out.textContent = multiply;
					resolve(multiply);
				},3000);
		})
	}).catch(()=>{
		console.log("not solved");
	});
	
	
})