const data = fetch("./periodic.json")
	.then(response => response.json())
	.then(data => {
		var periodictable = document.getElementById('periodictable_main');
		console.log(periodictable);

		for (var i = 0; i < 7; i++)
		{
			var row = document.createElement('tr');
			periodictable.appendChild(row);

			for (var j = 0; j < 18; j++)
			{
				var cell = document.createElement('td');
				cell.innerHTML = data.location[i * 18 + j];
				row.appendChild(cell);

				if (i > 2)
				{
					cell.style.backgroundColor = "#BBC7DB";
					cell.style.color = "#253140";

					if (j == 2)
					{
						if (i == 5)
						{
							cell.style.backgroundColor = "#212529";
							cell.style.color = "#DEE0FF";
						}
						else if (i == 6)
						{
							cell.style.backgroundColor = "#212529";
							cell.style.color = "#FFDAD5";
						}
					}
				}

				for (var k = 0; k < 118; k++)
				{
					if (data.elements[k].symbol == data.location[i * 18 + j])
					{
						if (data.elements[k].type == "alkali_metal")
						{
							cell.style.backgroundColor = "#F9ABFF";
							cell.style.color = "#570066";
						}
						else if (data.elements[k].type == "alkali_earth_metal")
						{
							cell.style.backgroundColor = "#FFB59A";
							cell.style.color = "#5B1B00";
						}
						else if (data.elements[k].type == "transition_metal")
						{
							cell.style.backgroundColor = "#FABD00";
							cell.style.color = "#3F2E00";
						}
						else if (data.elements[k].type == "post-transition_metal")
						{
							cell.style.backgroundColor = "#DBC90A";
							cell.style.color = "#363100";
						}
						else if (data.elements[k].type == "metalloid")
						{
							cell.style.backgroundColor = "#9ED75B";
							cell.style.color = "#1E3700";
						}
						else if (data.elements[k].type == "non-metal")
						{
							cell.style.backgroundColor = "#78DC77";
							cell.style.color = "#00390A";
						}
						else if (data.elements[k].type == "halogen")
						{
							cell.style.backgroundColor = "#53DBC9";
							cell.style.color = "#003731";
						}
						else if (data.elements[k].type == "noble_gas")
						{
							cell.style.backgroundColor = "#65D3FF";
							cell.style.color = "#003546";
						}
						else
						{
							cell.style.backgroundColor = "#BBC7DB";
							cell.style.color = "#253140";
						}
					}
				}
			}
		}

		var periodictable = document.getElementById('periodictable_ln_an');
		console.log(periodictable);

		for (var i = 0; i < 2; i++)
		{
			var row = document.createElement('tr');
			periodictable.appendChild(row);

			for (var j = 0; j < 18; j++)
			{
				var cell = document.createElement('td');

				if (j > 2)
				{
					cell.innerHTML = data.location[126 + i * 15 + j - 3];

					if (i == 0)
					{
						cell.style.backgroundColor = "#BAC3FF";
						cell.style.color = "#08218a";
					}
					else
					{
						cell.style.backgroundColor = "#ffB4A9";
						cell.style.color = "#690002";
					}
				}
				row.appendChild(cell);
			}
		}
	})
	.catch(error => console.log(error));
