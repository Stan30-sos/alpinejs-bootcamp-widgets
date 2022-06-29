document.addEventListener('alpine:init', () => {
    Alpine.data('airtimeWidget', function(){
        return {
            airTimeUsage:'',
            airTimeAmount: '0.00',
            airtimeMessage:'',
            airtimeLeft(){
                this.airtimeMessage = enoughAirtime(this.airTimeUsage,this.airTimeAmount);
        
                setTimeout(() =>{
                    this.airtimeMessage = '';
                }, 3000);
        
                
            },
        }
    })
})