tableData = data


        var tbody = d3.select("tbody");
        var row = tbody.append("tr");
        
        // row.append("td").text(newGrade[i])
       
        
        function filterTable() {
        // Prevent the form from refreshing the page
            d3.event.preventDefault();
            var filtered_data = tableData;
            console.log("Your button is reacting");
            var date_input = d3.select("#datetime").property("value");
            var city_input = d3.select("#cityname").property("value");
            var state_input = d3.select("#statename").property("value");
            var country_input = d3.select("#countryname").property("value");
            var shape_input = d3.select("#shapename").property("value");
            console.log(date_input);
            console.log(city_input);
            console.log(state_input);
            console.log(country_input);
            console.log(state_input);
            if (date_input) {
                filtered_data = filtered_data.filter(temporary_row => temporary_row.datetime === date_input);
            }
            if (city_input) {
                filtered_data = filtered_data.filter(temporary_row => temporary_row.city === city_input);
            }
            if (state_input) {
                filtered_data = filtered_data.filter(temporary_row => temporary_row.state === state_input);
            }
            
            if (country_input) {
                filtered_data = filtered_data.filter(temporary_row => temporary_row.country === country_input);
            }
            if (shape_input) {
                filtered_data = filtered_data.filter(temporary_row => temporary_row.shape === shape_input);
            }
            console.log(filtered_data);
            buildTable(filtered_data);
        };
        
        
        function buildTable(data) {
        
        
        // Clear out any existing data
            tbody.html("");
            console.log(data);
            data.forEach(function(ufoReport) {
            var row = tbody.append("tr");
            Object.entries(ufoReport).forEach(function([key, value]) {
                var cell = tbody.append("td");
                cell.text(value);
            });
            });
        
        };
        
        console.log("Main Line");
        
        d3.selectAll("#filter-btn").on("click", filterTable);
        
        
        buildTable(tableData);
        
        
        
        
    