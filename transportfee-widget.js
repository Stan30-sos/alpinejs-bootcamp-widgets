document.addEventListener('alpine:init', () => {
    Alpine.data('feeWidget', function(){
        return {
            shift : '',
            message : '',
            showFee : true,
            shiftFee(){
                this.message = transportFee(this.shift);
    
                setTimeout(() =>{
                    this.message = '';
                }, 3000);
    
            },
        }
    })
})