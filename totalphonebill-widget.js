document.addEventListener('alpine:init', () => {
    Alpine.data('phonebillWidget', function(){
        return {
            itemsUsed : '',
            totalCost :'0.00',
            billMessage : '',
            billDue(){
                this.billMessage = totalPhoneBill(this.itemsUsed);

                setTimeout (() => {
                    this.billMessage = '';
                },3000)
            },
           }
    })
    
})