$(function() {
    
    $(document).on('keyup', 'input[type="text"]', function(e) {
    
        var $this = $(this),
            valeur = $this.val()
        
        console.log(valeur);
        
        if (valeur == 0  ) {
            valeur = 1;
            $this.val(valeur);
        }
    
        var 
            base = $this.attr('data-price'),
            priceUser = $this.attr('data-priceuser'),
            nbuser = valeur,
            priceByUser = parseInt(priceUser*nbuser, 10),
            total = parseInt(priceByUser) + parseInt(base);
        
        
            
        console.log('change', base, priceUser, nbuser, priceByUser, total  ); 
        
        
        $('#'+$this.attr('data-total')).html(total);
        
    });
    
});
