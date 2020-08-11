
  $(document).ready(function(){
    init()


    function init(){
        var url = "https://api.covid19api.com/summary"

        var worldwide = [];
       



       $.get(url, function(worldwide){
           console.log(worldwide.Global)

        worldwide = `
                ${worldwide.Global.TotalConfirmed}                
            `                     
 
            $("#worldwide").html(worldwide)
           
           
        })
    }
  })

