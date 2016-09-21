Template.registerHelper("prettifyDate", (date)=>{
	return moment(date).calendar(); 
})