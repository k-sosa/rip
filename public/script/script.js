//Script for changing background image
function changeBackground() {
    document.body.style.backgroundImage ="url('images/starsbackground.jpg')"
}

function myFunction() {
    const Name = $('#searchBar').val().trim();


    $.ajax({
        url: "https://public.opendatasoft.com/api/records/1.0/search/?dataset=namus-missings&q="+Name+"&facet=cityoflastcontact&facet=countydisplaynameoflastcontact&facet=raceethnicity&facet=statedisplaynameoflastcontact&facet=gender",
        method: "GET"
        
    }).then(function (response) {
        
        const record1 = response.records[0]
        const record2 = response.records[0].fields.cityoflastcontact
        const record3 = response.records[0].fields.currentagefrom
    
        console.log(record1)
        console.log("where they were last seen " + record2)
        console.log("their current age " + record3)
    
       
        $("#search-div").append('They were last seen in ' +record2 + ' and their current age should be ' + record3 + ' Chat with others who are hoping to find someone.');
    
        
    });    
};




