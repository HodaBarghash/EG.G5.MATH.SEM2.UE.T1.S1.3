function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5kRLYq9zeuL":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxXY2iEA2BcwGnRBGX1NAHNKs5GB_CFegyDRpa0SWtfBc2wzYw6dRMv1cFpVT5lWADnnQ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

