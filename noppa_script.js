var rolls = [0, 0, 0, 0, 0, 0];
var roll_amount = 0;
function roll_dice()
{
	var many_rolls = document.getElementById("many_rolls").value;
	if (many_rolls < 1)
	{
		document.getElementById("many_rolls").value = 1;
		many_rolls = 1;
	}
	var i = 0;
	while (i < many_rolls)
	{
		roll_amount += 1;
		var roll = randInt(1,7);
		document.getElementById("dice").innerHTML = roll;
		rolls[roll - 1] += 1;
		updateRolls();
		i++;
	}
}

function reset_all()
{
	rolls[0] = 0;
	rolls[1] = 0;
	rolls[2] = 0;
	rolls[3] = 0;
	rolls[4] = 0;
	rolls[5] = 0;
	roll_amount = 0;
	document.getElementById("many_rolls").value = 1;
	updateRolls();
	document.getElementById("1_perc").innerHTML = 0;
    document.getElementById("2_perc").innerHTML = 0;
    document.getElementById("3_perc").innerHTML = 0;
    document.getElementById("4_perc").innerHTML = 0;
    document.getElementById("5_perc").innerHTML = 0;
    document.getElementById("6_perc").innerHTML = 0;
}

function updateRolls()
{
	document.getElementById("1_roll").innerHTML = rolls[0];
	document.getElementById("2_roll").innerHTML = rolls[1];
	document.getElementById("3_roll").innerHTML = rolls[2];
	document.getElementById("4_roll").innerHTML = rolls[3];
	document.getElementById("5_roll").innerHTML = rolls[4];
	document.getElementById("6_roll").innerHTML = rolls[5];
	document.getElementById("1_perc").innerHTML = Math.floor(rolls[0] / roll_amount * 100);
    document.getElementById("2_perc").innerHTML = Math.floor(rolls[1] / roll_amount * 100);
    document.getElementById("3_perc").innerHTML = Math.floor(rolls[2] / roll_amount * 100);
    document.getElementById("4_perc").innerHTML = Math.floor(rolls[3] / roll_amount * 100);
    document.getElementById("5_perc").innerHTML = Math.floor(rolls[4] / roll_amount * 100);
    document.getElementById("6_perc").innerHTML = Math.floor(rolls[5] / roll_amount * 100);
	document.getElementById("roll_amount").innerHTML = roll_amount;
}

function randInt(min, max) 
{
  return Math.floor(Math.random() * (max - min) ) + min;
}
