<script type='text/javascript' 
   src='http://www.bing.com/api/maps/mapcontrol?callback=GetMap' 
   async defer>
 </script>
    <script type="text/javascript">
 var map = null, infobox, dataLayer;
      
 function GetMap() 
 {
  // Seting Map Options
  map = new Microsoft.Maps.Map(document.getElementById("myMap"),
     {
   credentials: "U4VD6Xi1NuVkAaN8KvJF~dereRmfzkm5VdVorK5lmlA~Ar4MuDpGzRmqdUtbXYvjm31t06tAU-400GnsVAY8Zna23hb05WjeiHiszdHOEAXU",
   center: new Microsoft.Maps.Location(4.660177, 97.012866), // Kordinat bener meriah
   mapTypeId: Microsoft.Maps.MapTypeId.road,
   showLocateMeButton: false,
   zoom: 9
  });
 
  //Create window infobox in the middle of pin (not displayed)
  infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
   visible: false
  });
  //Assign infobox on variabel map
  infobox.setMap(map);
 
  AddData();
 }
function AddData() {
    //Create Pin
 var pin1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(3.818570, 96.831841));
    //Store metadata on pushpin
 pin1.metadata = 
   title: 'Keterangan',
   description: 'Ibukota Abdya <img src="https://png.pngtree.com/element_pic/17/07/23/9c5ab54a45235ed01d395c2d9ee8eab4.png">'
 };
  // Add handling event click on pushpin
 Microsoft.Maps.Events.addHandler(pin1, 'click', pushpinClicked);
//Set entity pushpin on map
 map.entities.push(pin1);
  
  //Create a polygon as our IPrimitive.
        var shape = Microsoft.Maps.TestDataGenerator.getPolygons(1, map.getBounds());

        //Add some metadata to the IPrimitive.
        shape.metadata = {
            title: 'IPrimitive clicked',
            description: 'I am a polygon'
        };
  
    
   // for Calang city
    var pin2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(4.727890, 95.601373),{color: 'red'});
    pin2.metadata = {
   title: 'Keterangan',
   description: 'Ibukota Kab.Aceh Jayahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
  };
    Microsoft.Maps.Events.addHandler(pin2, 'click', pushpinClicked);
 map.entities.push(pin2);
 
 //For Sabang city
 var pin3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(5.909284, 95.304742),{color: 'yellow'});
    pin3.metadata = {
   title: 'Keterangan',
   description: 'Ibukota Kotamadya Sabang'
  };
    Microsoft.Maps.Events.addHandler(pin3, 'click', pushpinClicked);
 map.entities.push(pin3);
 
 //For langsa city
 var pin4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(4.476020, 97.952447),{color: 'blue'});
    pin4.metadata = {
   title: 'Keterangan',
   description: 'Ibukota Kotamadya Langsa'
  };
    Microsoft.Maps.Events.addHandler(pin4, 'click', pushpinClicked);
 map.entities.push(pin4);
  
  
}
      
      

 function pushpinClicked(e) {
         //To ensure whether infobox have metadata to be displayed
        if (e.target.metadata) {
           //Add metadata pushpin on option infobox
            infobox.setOptions({
                location: e.target.getLocation(),
                title: e.target.metadata.title,
                description: e.target.metadata.description,
                visible: true
            });
        }
    }
</script>
