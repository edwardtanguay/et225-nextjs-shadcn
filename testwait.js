const processIt = async () => {
	console.log("111");
	await new Promise((resolve) => setTimeout(resolve, 3000));
	console.log("222");
};

processIt();
