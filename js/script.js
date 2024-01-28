
 function validate() {
   
   const checkboxes1 = document.querySelectorAll(
     'input[type="checkbox"]:checked'
   );

   if (checkboxes1.length < 2) {
     alert("Please select at least two food items!");
    return  resetForm()
   }


   
            // Get form values
            const firstName = document.getElementById('firstname').value;
            const lastName = document.getElementById('lastName').value;
            const address = document.getElementById('address').value;
            const pincode = document.getElementById('pincode').value;
            const gender = document.querySelector('input[name="flexRadioDefault"]:checked').value;
            const foodChoices = [];
            const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            checkboxes.forEach(checkbox => {
                foodChoices.push(checkbox.value);
            });

            // Display values in the table
            displayResults(firstName, lastName, address, pincode, gender, foodChoices);
        }

        function displayResults(firstName, lastName, address, pincode, gender, foodChoices) {
            // Create a new table row
            const tableBody = document.getElementById('resultTableBody');
            const newRow = tableBody.insertRow();

            // Insert cells for each column
            const firstNameCell = newRow.insertCell(0);
            const lastNameCell = newRow.insertCell(1);
            const addressCell = newRow.insertCell(2);
            const pincodeCell = newRow.insertCell(3);
            const genderCell = newRow.insertCell(4);
            const foodCell = newRow.insertCell(5);

            // Set cell values
            firstNameCell.innerHTML = firstName;
            lastNameCell.innerHTML = lastName;
            addressCell.innerHTML = address;
            pincodeCell.innerHTML = pincode;
            genderCell.innerHTML = gender;
            foodCell.innerHTML = foodChoices.join(', '); // Join food choices with a comma
        }
            // You can add more cells and customize this based on your form structure
            function resetForm() {
             document.getElementById("CustomerForm").reset();
            }
            
        